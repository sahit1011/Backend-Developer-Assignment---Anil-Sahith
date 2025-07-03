from pydantic import BaseModel
from typing import Dict, List, Any, Optional

class FinancialMetrics(BaseModel):
    total_revenue_q4_2024: float
    total_profit_q4_2024: float
    profit_margin: float
    avg_customer_satisfaction: float

class HRMetrics(BaseModel):
    avg_retention_rate: float
    avg_employee_satisfaction: float
    total_employees: int
    diversity_index: float

class SecurityMetrics(BaseModel):
    avg_response_time: float
    total_recent_incidents: int
    avg_safety_score: float
    crime_prevention_effectiveness: float

class ExecutiveSummary(BaseModel):
    financial: FinancialMetrics
    hr: HRMetrics
    security: SecurityMetrics

class DivisionTrend(BaseModel):
    quarters: List[str]
    revenue: List[float]
    profit: List[float]
    rd_investment: List[float]

class FinancialTrends(BaseModel):
    trends: Dict[str, DivisionTrend]

class RetentionByLevel(BaseModel):
    levels: List[str]
    retention_rates: List[float]

class SatisfactionByDepartment(BaseModel):
    departments: List[str]
    satisfaction_scores: List[float]

class HRAnalytics(BaseModel):
    retention_by_level: Dict[str, RetentionByLevel]
    satisfaction_by_department: SatisfactionByDepartment

class IncidentsByDistrict(BaseModel):
    districts: List[str]
    incidents: List[int]

class ResponseTimeTrends(BaseModel):
    dates: List[str]
    response_times: List[float]

class SafetyByDistrict(BaseModel):
    districts: List[str]
    safety_scores: List[float]

class SecurityAnalytics(BaseModel):
    incidents_by_district: IncidentsByDistrict
    response_time_trends: ResponseTimeTrends
    safety_by_district: SafetyByDistrict

class KeyMetrics(BaseModel):
    aerospace_revenue_2024: str
    revenue_growth: str
    rd_investment: str
    customer_satisfaction: str

class DataNarrative(BaseModel):
    headline: str
    subheading: str
    body: str
    key_metrics: KeyMetrics

class APIResponse(BaseModel):
    success: bool
    data: Optional[Any] = None
    message: Optional[str] = None
