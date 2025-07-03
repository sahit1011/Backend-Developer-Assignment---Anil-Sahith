# Wayne Enterprises BI Dashboard - Deployment Guide

## ⚡ Quick Start

### Option 1: Automated Startup (Recommended)
```bash
# Windows
.\start-dashboard.ps1

# macOS/Linux
./start-dashboard.sh
```

The script will automatically:
- ✅ Start FastAPI backend on port 8000
- ✅ Start Next.js frontend on port 3000
- ✅ Display status information
- ✅ Keep both servers running until you press any key

**Then open:** http://localhost:3000

### Option 2: Manual Startup

#### Backend
```bash
cd backend
.\venv\Scripts\Activate.ps1  # Windows
# source venv/bin/activate    # macOS/Linux
python main.py
```

#### Frontend
```bash
cd frontend
npm run dev
```

## Access Points

- **Frontend Dashboard**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## Verification Steps

1. **Backend Health Check**:
   ```bash
   curl http://localhost:8000/api/v1/health
   ```

2. **Frontend Loading**: 
   - Open http://localhost:3000
   - Should see Wayne Enterprises dashboard loading

3. **Data Integration**:
   - Executive summary cards should populate with real data
   - Charts should render with Wayne Aerospace financial trends
   - Newspaper narrative should display current insights

## Troubleshooting

### Backend Issues
- Ensure Python 3.11+ is installed
- Verify virtual environment is activated
- Check if port 8000 is available
- Ensure CSV data files are in `backend/data/` directory

### Frontend Issues
- Ensure Node.js 18+ is installed
- Verify npm dependencies are installed
- Check if port 3000 is available
- Ensure backend is running before starting frontend

### CORS Issues
- Backend is configured to allow requests from localhost:3000
- If using different ports, update CORS settings in `backend/main.py`

## Performance Notes

- Initial load may take 5-10 seconds for data processing
- Charts render client-side for better interactivity
- API responses are cached for improved performance

## Production Considerations

For production deployment:
1. Use environment variables for configuration
2. Implement proper authentication
3. Add rate limiting and security headers
4. Use production-grade database instead of CSV files
5. Implement proper logging and monitoring
