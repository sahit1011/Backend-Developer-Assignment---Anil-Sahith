import pandas as pd
import os
from typing import Dict, List, Any
from datetime import datetime

class DataProcessor:
    def __init__(self, data_dir: str = "data"):
        self.data_dir = data_dir
        self.financial_data = None
        self.hr_data = None
        self.security_data = None
        self.rd_data = None
        self.supply_chain_data = None
        
    def load_all_data(self):
        """Load all CSV datasets"""
        try:
            # Load financial data
            self.financial_data = pd.read_csv(os.path.join(self.data_dir, "wayne_financial_data.csv"))
            
            # Load HR data
            self.hr_data = pd.read_csv(os.path.join(self.data_dir, "wayne_hr_analytics.csv"))
            
            # Load security data
            self.security_data = pd.read_csv(os.path.join(self.data_dir, "wayne_security_data.csv"))
            
            # Load R&D data
            self.rd_data = pd.read_csv(os.path.join(self.data_dir, "wayne_rd_portfolio.csv"))
            
            # Load supply chain data
            self.supply_chain_data = pd.read_csv(os.path.join(self.data_dir, "wayne_supply_chain.csv"))
            
            print("All datasets loaded successfully!")
            return True
        except Exception as e:
            print(f"Error loading data: {e}")
            return False
    
    def get_executive_summary(self) -> Dict[str, Any]:
        """Generate executive summary metrics"""
        if not self.financial_data is not None:
            self.load_all_data()
            
        summary = {}
        
        # Financial metrics
        if self.financial_data is not None:
            latest_quarter = self.financial_data[self.financial_data['Year'] == 2024].tail(5)
            total_revenue = latest_quarter['Revenue_M'].sum()
            total_profit = latest_quarter['Net_Profit_M'].sum()
            avg_satisfaction = latest_quarter['Customer_Satisfaction_Score'].mean()
            
            summary['financial'] = {
                'total_revenue_q4_2024': round(total_revenue, 1),
                'total_profit_q4_2024': round(total_profit, 1),
                'profit_margin': round((total_profit / total_revenue) * 100, 1),
                'avg_customer_satisfaction': round(avg_satisfaction, 1)
            }
        
        # HR metrics
        if self.hr_data is not None:
            latest_hr = self.hr_data[self.hr_data['Date'].str.contains('2024')].tail(20)
            avg_retention = latest_hr['Retention_Rate_Pct'].mean()
            avg_satisfaction = latest_hr['Employee_Satisfaction_Score'].mean()
            total_employees = self.financial_data['Employee_Count'].iloc[-5:].sum() if self.financial_data is not None else 0
            
            summary['hr'] = {
                'avg_retention_rate': round(avg_retention, 1),
                'avg_employee_satisfaction': round(avg_satisfaction, 1),
                'total_employees': int(total_employees),
                'diversity_index': round(latest_hr['Diversity_Index'].mean(), 2)
            }
        
        # Security metrics
        if self.security_data is not None:
            latest_security = self.security_data.tail(30)  # Last 30 records
            avg_response_time = latest_security['Response_Time_Minutes'].mean()
            total_incidents = latest_security['Security_Incidents'].sum()
            avg_safety_score = latest_security['Public_Safety_Score'].mean()
            
            summary['security'] = {
                'avg_response_time': round(avg_response_time, 1),
                'total_recent_incidents': int(total_incidents),
                'avg_safety_score': round(avg_safety_score, 1),
                'crime_prevention_effectiveness': round(latest_security['Crime_Prevention_Effectiveness_Pct'].mean(), 1)
            }
        
        return summary
    
    def get_financial_trends(self) -> Dict[str, List]:
        """Get financial trends for charts"""
        if self.financial_data is None:
            self.load_all_data()
            
        # Group by quarter and year for trends
        trends = {}
        
        # Revenue by division over time
        divisions = self.financial_data['Division'].unique()
        for division in divisions:
            div_data = self.financial_data[self.financial_data['Division'] == division]
            div_data = div_data.sort_values(['Year', 'Quarter'])
            
            trends[division] = {
                'quarters': [f"{row['Quarter']} {row['Year']}" for _, row in div_data.iterrows()],
                'revenue': div_data['Revenue_M'].tolist(),
                'profit': div_data['Net_Profit_M'].tolist(),
                'rd_investment': div_data['RD_Investment_M'].tolist()
            }
        
        return trends
    
    def get_hr_analytics(self) -> Dict[str, Any]:
        """Get HR analytics for charts"""
        if self.hr_data is None:
            self.load_all_data()
            
        analytics = {}
        
        # Retention by department and level
        dept_retention = self.hr_data.groupby(['Department', 'Employee_Level'])['Retention_Rate_Pct'].mean().reset_index()
        
        analytics['retention_by_level'] = {}
        for dept in dept_retention['Department'].unique():
            dept_data = dept_retention[dept_retention['Department'] == dept]
            analytics['retention_by_level'][dept] = {
                'levels': dept_data['Employee_Level'].tolist(),
                'retention_rates': dept_data['Retention_Rate_Pct'].round(1).tolist()
            }
        
        # Satisfaction trends
        latest_data = self.hr_data[self.hr_data['Date'].str.contains('2024')]
        satisfaction_by_dept = latest_data.groupby('Department')['Employee_Satisfaction_Score'].mean()
        
        analytics['satisfaction_by_department'] = {
            'departments': satisfaction_by_dept.index.tolist(),
            'satisfaction_scores': satisfaction_by_dept.round(1).tolist()
        }
        
        return analytics
    
    def get_security_analytics(self) -> Dict[str, Any]:
        """Get security analytics for charts"""
        if self.security_data is None:
            self.load_all_data()
            
        analytics = {}
        
        # Incidents by district
        district_incidents = self.security_data.groupby('District')['Security_Incidents'].sum()
        analytics['incidents_by_district'] = {
            'districts': district_incidents.index.tolist(),
            'incidents': district_incidents.tolist()
        }
        
        # Response time trends
        monthly_response = self.security_data.groupby('Date')['Response_Time_Minutes'].mean().reset_index()
        analytics['response_time_trends'] = {
            'dates': monthly_response['Date'].tolist(),
            'response_times': monthly_response['Response_Time_Minutes'].round(1).tolist()
        }
        
        # Safety scores by district
        safety_by_district = self.security_data.groupby('District')['Public_Safety_Score'].mean()
        analytics['safety_by_district'] = {
            'districts': safety_by_district.index.tolist(),
            'safety_scores': safety_by_district.round(1).tolist()
        }
        
        return analytics
    
    def get_data_narrative(self) -> Dict[str, str]:
        """Generate a compelling data narrative for newspaper-style presentation"""
        if not all([self.financial_data is not None, self.hr_data is not None, self.security_data is not None]):
            self.load_all_data()
        
        # Analyze Wayne Aerospace performance (seems to be the star performer)
        aerospace_data = self.financial_data[self.financial_data['Division'] == 'Wayne Aerospace']
        aerospace_2024 = aerospace_data[aerospace_data['Year'] == 2024]
        aerospace_2023 = aerospace_data[aerospace_data['Year'] == 2023]
        
        revenue_growth = ((aerospace_2024['Revenue_M'].sum() - aerospace_2023['Revenue_M'].sum()) / aerospace_2023['Revenue_M'].sum()) * 100
        
        narrative = {
            'headline': f"Wayne Aerospace Soars: {revenue_growth:.1f}% Revenue Growth Drives Enterprise Success",
            'subheading': "Strategic R&D investments and operational excellence position Wayne Enterprises for continued market leadership",
            'body': f"""Wayne Enterprises' aerospace division has emerged as the crown jewel of the conglomerate, delivering exceptional {revenue_growth:.1f}% revenue growth in 2024. 
            
The division's success stems from strategic R&D investments totaling ${aerospace_2024['RD_Investment_M'].sum():.1f}M, which have translated into market share gains and improved customer satisfaction scores averaging {aerospace_2024['Customer_Satisfaction_Score'].mean():.1f}/5.0.

This performance, combined with strong security operations maintaining an average {self.security_data['Public_Safety_Score'].mean():.1f}/10 safety score across Gotham districts, demonstrates Wayne Enterprises' commitment to both innovation and community protection.""",
            'key_metrics': {
                'aerospace_revenue_2024': f"${aerospace_2024['Revenue_M'].sum():.1f}M",
                'revenue_growth': f"{revenue_growth:.1f}%",
                'rd_investment': f"${aerospace_2024['RD_Investment_M'].sum():.1f}M",
                'customer_satisfaction': f"{aerospace_2024['Customer_Satisfaction_Score'].mean():.1f}/5.0"
            }
        }
        
        return narrative
