# Wayne Enterprises BI Dashboard - Project Structure

## 📁 Complete Directory Structure

```
wayne-enterprises-dashboard/
├── 📁 backend/                          # FastAPI Backend
│   ├── 📁 app/
│   │   ├── 📁 api/
│   │   │   ├── __init__.py
│   │   │   └── endpoints.py             # API route definitions
│   │   ├── 📁 models/
│   │   │   ├── __init__.py
│   │   │   └── schemas.py               # Pydantic data models
│   │   ├── 📁 services/
│   │   │   ├── __init__.py
│   │   │   └── data_processor.py        # Business logic & data processing
│   │   └── __init__.py
│   ├── 📁 data/                         # CSV datasets
│   │   ├── wayne_financial_data.csv     # Financial performance data
│   │   ├── wayne_hr_analytics.csv       # HR metrics and analytics
│   │   ├── wayne_rd_portfolio.csv       # R&D project portfolio
│   │   ├── wayne_security_data.csv      # Security operations data
│   │   └── wayne_supply_chain.csv       # Supply chain metrics
│   ├── 📁 venv/                         # Python virtual environment
│   ├── main.py                          # FastAPI application entry point
│   └── requirements.txt                 # Python dependencies
├── 📁 frontend/                         # Next.js Frontend
│   ├── 📁 public/                       # Static assets
│   │   ├── favicon.ico
│   │   └── ...
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css              # Global styles & animations
│   │   │   ├── layout.tsx               # Root layout component
│   │   │   └── page.tsx                 # Main dashboard page
│   │   ├── 📁 components/
│   │   │   ├── ChartsSection.tsx        # Charts and visualizations
│   │   │   ├── DataNarrative.tsx        # Newspaper-style narrative
│   │   │   ├── ExecutiveSummaryCards.tsx # Summary metric cards
│   │   │   └── LoadingSpinner.tsx       # Loading component
│   │   └── 📁 services/
│   │       └── api.ts                   # API service layer
│   ├── 📁 node_modules/                 # Node.js dependencies
│   ├── eslint.config.mjs                # ESLint configuration
│   ├── next-env.d.ts                    # Next.js TypeScript definitions
│   ├── next.config.ts                   # Next.js configuration
│   ├── package-lock.json                # Dependency lock file
│   ├── package.json                     # Node.js dependencies
│   ├── postcss.config.mjs               # PostCSS configuration
│   └── tsconfig.json                    # TypeScript configuration
├── 📁 docs/                             # Assignment materials
│   ├── Inspiration 1.pdf               # Design inspiration
│   ├── Inspiration 2.pdf               # Design inspiration
│   ├── Instructions.pptx               # Assignment instructions
│   ├── wayne_financial_data.csv        # Original data files
│   ├── wayne_hr_analytics.csv
│   ├── wayne_rd_portfolio.csv
│   ├── wayne_security_data.csv
│   └── wayne_supply_chain.csv
├── 📄 README.md                         # Project documentation
├── 📄 DEPLOYMENT.md                     # Deployment instructions
├── 📄 PROJECT_STRUCTURE.md             # This file
├── 📄 TESTING_CHECKLIST.md             # Testing guidelines
├── 📄 SCREEN_RECORDING_SCRIPT.md       # Recording instructions
├── 📄 TECH_PLAN.md                     # Technical planning
├── 📄 instructions_text.txt            # Assignment text
├── 📄 task.md                          # Task breakdown
├── 🚀 start-dashboard.ps1              # Windows startup script
└── 🚀 start-dashboard.bat              # Windows batch script
```

---

## 🏗️ Architecture Overview

### Backend Architecture (FastAPI)
```
📁 backend/
├── main.py                    # Application entry point
├── app/
│   ├── api/endpoints.py       # RESTful API routes
│   ├── models/schemas.py      # Data validation models
│   └── services/data_processor.py # Business logic
└── data/                      # CSV data sources
```

### Frontend Architecture (Next.js)
```
📁 frontend/src/
├── app/
│   ├── page.tsx              # Main dashboard page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # Reusable UI components
└── services/api.ts          # API communication layer
```

---

## 📊 Data Flow

```
CSV Files → Data Processor → FastAPI Endpoints → Frontend Components → User Interface
```

1. **CSV Data Sources** (5 datasets)
2. **Data Processor** (Python/Pandas)
3. **FastAPI Endpoints** (RESTful APIs)
4. **Frontend Services** (Axios HTTP client)
5. **React Components** (UI rendering)
6. **User Dashboard** (Interactive interface)

---

## 🔧 Key Components

### Backend Components

**main.py**
- FastAPI application setup
- CORS configuration
- Route registration
- Server startup logic

**endpoints.py**
- API route definitions
- Request/response handling
- Error management
- Data serialization

**data_processor.py**
- CSV file loading
- Data transformation
- Analytics calculations
- Business logic

**schemas.py**
- Pydantic models
- Data validation
- Type definitions
- API contracts

### Frontend Components

**page.tsx**
- Main dashboard layout
- Component orchestration
- State management
- Error handling

**ExecutiveSummaryCards.tsx**
- 4 metric cards with gradients
- Hover animations
- Trend indicators
- Professional styling

**DataNarrative.tsx**
- Newspaper-style layout
- Wayne Enterprises branding
- CEO quotes and insights
- Metrics sidebar

**ChartsSection.tsx**
- Financial area charts
- Employee satisfaction donut
- Security incident bars
- Safety scores visualization

**api.ts**
- HTTP client configuration
- API endpoint definitions
- Error handling
- Type safety

---

## 🎨 Styling Architecture

### CSS Structure
```
globals.css
├── Google Fonts imports
├── Tailwind CSS base
├── Custom animations
├── Chart styling
└── Responsive utilities
```

### Design System
- **Colors**: Professional gradients (blue, green, purple, amber)
- **Typography**: Inter (body), Playfair Display (headlines)
- **Spacing**: Consistent padding/margins
- **Shadows**: Layered depth system
- **Animations**: Smooth transitions and hover effects

---

## 🔌 API Structure

### Endpoints
```
GET /                          # Root endpoint
GET /api/v1/health            # Health check
GET /api/v1/executive-summary # Key metrics
GET /api/v1/financial-trends  # Financial charts data
GET /api/v1/hr-analytics      # HR charts data
GET /api/v1/security-analytics # Security charts data
GET /api/v1/data-narrative    # Newspaper content
GET /api/v1/dashboard-data    # All data combined
```

### Response Format
```json
{
  "success": true,
  "data": {
    // Actual data payload
  }
}
```

---

## 📦 Dependencies

### Backend Dependencies (requirements.txt)
- **fastapi**: Web framework
- **uvicorn**: ASGI server
- **pandas**: Data processing
- **python-multipart**: File uploads

### Frontend Dependencies (package.json)
- **next**: React framework
- **react**: UI library
- **typescript**: Type safety
- **tailwindcss**: CSS framework
- **recharts**: Chart library
- **axios**: HTTP client
- **lucide-react**: Icons

---

## 🚀 Build Process

### Backend Build
1. Virtual environment creation
2. Dependency installation
3. Data file validation
4. Server startup

### Frontend Build
1. Node.js dependency installation
2. TypeScript compilation
3. CSS processing (Tailwind)
4. Next.js optimization
5. Development server startup

---

## 📈 Performance Considerations

### Backend Optimizations
- **Data Caching**: Processed data cached in memory
- **Async Operations**: Non-blocking I/O operations
- **Efficient Pandas**: Optimized data processing
- **CORS Optimization**: Minimal overhead

### Frontend Optimizations
- **Code Splitting**: Automatic by Next.js
- **Image Optimization**: Next.js built-in
- **CSS Optimization**: Tailwind purging
- **Bundle Analysis**: Webpack optimization

---

## 🔒 Security Features

### Backend Security
- **Input Validation**: Pydantic models
- **CORS Configuration**: Restricted origins
- **Error Handling**: Secure error messages
- **Data Sanitization**: Clean CSV processing

### Frontend Security
- **Type Safety**: TypeScript throughout
- **XSS Prevention**: React built-in protection
- **API Validation**: Response type checking
- **Environment Variables**: Secure configuration

---

This structure provides a scalable, maintainable foundation for the Wayne Enterprises BI Dashboard while maintaining clean separation of concerns and professional development practices.
