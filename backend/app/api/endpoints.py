from fastapi import APIRouter, HTTPException
from app.services.data_processor import DataProcessor
from app.models.schemas import (
    ExecutiveSummary, FinancialTrends, HRAnalytics, 
    SecurityAnalytics, DataNarrative, APIResponse
)
from typing import Dict, Any

router = APIRouter()

# Initialize data processor
data_processor = DataProcessor()

@router.on_event("startup")
async def startup_event():
    """Load data on startup"""
    success = data_processor.load_all_data()
    if not success:
        raise Exception("Failed to load data on startup")

@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "Wayne Enterprises BI API is running"}

@router.get("/executive-summary", response_model=APIResponse)
async def get_executive_summary():
    """Get executive summary metrics"""
    try:
        summary = data_processor.get_executive_summary()
        return APIResponse(success=True, data=summary)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating executive summary: {str(e)}")

@router.get("/financial-trends", response_model=APIResponse)
async def get_financial_trends():
    """Get financial trends data for charts"""
    try:
        trends = data_processor.get_financial_trends()
        return APIResponse(success=True, data=trends)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating financial trends: {str(e)}")

@router.get("/hr-analytics", response_model=APIResponse)
async def get_hr_analytics():
    """Get HR analytics data for charts"""
    try:
        analytics = data_processor.get_hr_analytics()
        return APIResponse(success=True, data=analytics)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating HR analytics: {str(e)}")

@router.get("/security-analytics", response_model=APIResponse)
async def get_security_analytics():
    """Get security analytics data for charts"""
    try:
        analytics = data_processor.get_security_analytics()
        return APIResponse(success=True, data=analytics)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating security analytics: {str(e)}")

@router.get("/data-narrative", response_model=APIResponse)
async def get_data_narrative():
    """Get compelling data narrative for newspaper-style presentation"""
    try:
        narrative = data_processor.get_data_narrative()
        return APIResponse(success=True, data=narrative)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating data narrative: {str(e)}")

@router.get("/dashboard-data", response_model=APIResponse)
async def get_dashboard_data():
    """Get all dashboard data in one call for efficiency"""
    try:
        dashboard_data = {
            "executive_summary": data_processor.get_executive_summary(),
            "financial_trends": data_processor.get_financial_trends(),
            "hr_analytics": data_processor.get_hr_analytics(),
            "security_analytics": data_processor.get_security_analytics(),
            "data_narrative": data_processor.get_data_narrative()
        }
        return APIResponse(success=True, data=dashboard_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating dashboard data: {str(e)}")
