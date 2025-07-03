# Wayne Enterprises Business Intelligence Dashboard

A full-stack business intelligence dashboard built for Wayne Enterprises, showcasing key insights from company data through a FastAPI backend and Next.js frontend.

## 🎬 Live Demo

### 📺 Dashboard Preview

<div align="center">

[![Wayne Enterprises Dashboard Demo](https://img.shields.io/badge/🎥_Download_Demo_Video-52.9MB-red?style=for-the-badge)](demo/wayne-enterprises-dashboard-demo.mp4)

**Click the badge above to download the demo video**

</div>

> **Executive-Level Business Intelligence Dashboard** - Professional data visualization with interactive charts, real-time insights, and Wayne Enterprises branding.

### 🚀 Quick Preview Features:
- ✨ **Enhanced Executive Summary Cards** with gradient animations
- 📊 **Professional Chart Visualizations** (Area, Donut, Bar charts)
- 📰 **Newspaper-style Data Narrative** with Wayne Enterprises branding
- 🎯 **Interactive Tooltips** and hover effects
- 📱 **Responsive Design** for all screen sizes

*The demo video showcases all enhanced features and professional styling improvements.*

### 📸 Dashboard Screenshots

<div align="center">

| Executive Summary Cards | Interactive Charts | Data Narrative |
|:---:|:---:|:---:|
| ![Executive Cards](https://via.placeholder.com/300x200/1f2937/ffffff?text=Executive+Summary+Cards) | ![Charts](https://via.placeholder.com/300x200/1f2937/ffffff?text=Interactive+Charts) | ![Narrative](https://via.placeholder.com/300x200/1f2937/ffffff?text=Data+Narrative) |
| Professional gradient cards with animations | Area, donut, and bar charts with tooltips | Newspaper-style layout with branding |

</div>

## 🚀 Features

### 📊 Dashboard Components
- **Executive Summary Cards**: 4 gradient-styled cards with hover animations and trend indicators
- **Interactive Charts**: 6 professional visualizations with custom tooltips and gradient fills
- **Data Narrative**: Realistic newspaper-style layout with Wayne Enterprises branding
- **Real-time Data**: Live connection between frontend and backend APIs
- **Professional Design**: Executive-ready dashboard with modern styling and animations

### 🎨 Visual Enhancements
- **Gradient Backgrounds**: Professional color schemes throughout the interface
- **Interactive Animations**: Hover effects, scaling, and smooth transitions
- **Custom Typography**: Google Fonts (Inter, Playfair Display) for professional appearance
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing
- **Wayne Enterprises Branding**: Consistent logo, colors, and corporate identity

### 📈 Chart Improvements
- **Area Charts**: Financial data with gradient fills instead of simple lines
- **Donut Charts**: Employee satisfaction and safety scores for better visual appeal
- **Custom Tooltips**: Clear, readable information without transparency issues
- **Proper Labeling**: All X-axis labels visible with angled text for long names
- **Focus Management**: No unwanted focus outlines on chart interactions

## 📊 Key Insights

- **Wayne Aerospace**: 24.5% revenue growth driving enterprise success
- **Employee Satisfaction**: 9.0/10 average with 96.5% retention rate
- **Security Excellence**: 9.1/10 safety score with 2.1min average response time
- **Customer Satisfaction**: 4.8/5.0 rating across all divisions

## 🛠 Tech Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Python**: Data processing and analytics
- **Pandas**: Data manipulation and analysis
- **Uvicorn**: ASGI server for production deployment

### Frontend
- **Next.js 15**: React framework with TypeScript
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library
- **Lucide React**: Beautiful icons
- **Axios**: HTTP client for API calls

## 📁 Project Structure

```
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── endpoints.py      # API routes
│   │   ├── models/
│   │   │   └── schemas.py        # Pydantic models
│   │   └── services/
│   │       └── data_processor.py # Data processing logic
│   ├── data/                     # CSV datasets
│   ├── main.py                   # FastAPI application
│   └── requirements.txt          # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── page.tsx          # Main dashboard page
│   │   ├── components/           # React components
│   │   └── services/
│   │       └── api.ts            # API service layer
│   └── package.json              # Node.js dependencies
└── docs/                         # Original assignment materials
```

## ⚡ Quick Start

### One-Command Setup
```bash
# Clone the repository
git clone <repository-url>
cd wayne-enterprises-dashboard

# Start both servers (Windows)
.\start-dashboard.ps1

# Start both servers (macOS/Linux)
./start-dashboard.sh
```

Then open http://localhost:3000 in your browser!

## 🚀 Manual Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv
# Windows
.\venv\Scripts\Activate.ps1
# macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the FastAPI server:
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📊 API Endpoints

- `GET /api/v1/health` - Health check
- `GET /api/v1/executive-summary` - Executive summary metrics
- `GET /api/v1/financial-trends` - Financial trends data
- `GET /api/v1/hr-analytics` - HR analytics data
- `GET /api/v1/security-analytics` - Security analytics data
- `GET /api/v1/data-narrative` - Data narrative for newspaper-style presentation
- `GET /api/v1/dashboard-data` - All dashboard data in one call

## 📈 Data Sources

The dashboard processes 5 key datasets:
1. **Financial Performance**: Quarterly data for 5 divisions (2023-2024)
2. **HR Analytics**: Monthly employee metrics across all divisions
3. **Security Operations**: Monthly data across 6 Gotham districts
4. **R&D Portfolio**: Active research projects data
5. **Supply Chain**: Monthly production data from 5 facilities

## 🎯 Business Value

- **Strategic Insights**: Cross-dataset correlations and predictive analytics
- **Executive Decision Making**: Clear, actionable insights for leadership
- **Performance Monitoring**: Real-time tracking of key business metrics
- **Risk Management**: Security and operational risk assessment

## 🔧 Development Notes

- Built with rapid prototyping in mind (5-hour challenge)
- Prioritizes core functionality and professional presentation
- Separated backend and frontend concerns for scalability
- Uses mock data processing for speed while maintaining data integrity

## 📝 Assignment Completion

This project fulfills all requirements of the Wayne Enterprises BI Dashboard assignment:
- ✅ FastAPI backend with data processing
- ✅ Next.js frontend with TypeScript and Tailwind CSS
- ✅ Executive summary with key metrics cards
- ✅ 6 essential charts (financial trends, HR analytics, security metrics)
- ✅ Newspaper-style data narrative
- ✅ Professional, executive-ready appearance
- ✅ Working proof-of-concept demonstrating full-stack skills

## 👨‍💻 Author

Built as part of the Backend Developer Assignment for Wayne Enterprises BI Dashboard.

---

*"A working simple dashboard that tells a clear business story is better than an incomplete complex system."*
