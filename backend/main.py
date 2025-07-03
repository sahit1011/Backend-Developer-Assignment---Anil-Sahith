from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import router
from app.services.data_processor import DataProcessor

# Create FastAPI app
app = FastAPI(
    title="Wayne Enterprises BI Dashboard API",
    description="Business Intelligence Dashboard API for Wayne Enterprises",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Next.js default ports
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(router, prefix="/api/v1")

# Initialize data processor on startup
data_processor = DataProcessor()

@app.on_event("startup")
async def startup_event():
    """Load data on startup"""
    success = data_processor.load_all_data()
    if success:
        print("✅ Data loaded successfully on startup")
    else:
        print("❌ Failed to load data on startup")

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Wayne Enterprises BI Dashboard API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/api/v1/health"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
