# 🎓 TechVerse Campus Portal

A modern, glassmorphic student portal built with Next.js 14+, TypeScript, and TurboRepo. This project replicates the functionality of a student management system with a beautiful, responsive UI.

## ✨ Features

- **🔐 Secure Login System** - Student authentication with USN and password
- **📊 Interactive Dashboard** - Overview of attendance, grades, fees, and courses
- **📚 Course Management** - View enrolled courses with faculty information
- **💰 Fee Management** - Track fee payments and download receipts
- **📅 Attendance Tracking** - Monitor attendance across all subjects
- **🎯 CIE Marks** - View Continuous Internal Evaluation scores
- **👨‍🏫 Proctor Diary** - Access personal and family information
- **🌓 Dark/Light Mode** - Toggle between themes
- **📱 Responsive Design** - Works on all device sizes
- **🎨 Glassmorphic UI** - Modern, translucent design elements

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom glassmorphic theming
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Monorepo**: TurboRepo
- **Linting**: ESLint + Prettier

## 🏗️ Project Structure

```
├── apps/
│   └── web/                 # Next.js application
│       ├── app/            # App router pages
│       │   ├── dashboard/  # Dashboard pages
│       │   ├── layout.tsx  # Root layout
│       │   └── page.tsx    # Login page
│       ├── components/     # React components
│       │   ├── ui/        # ShadCN UI components
│       │   ├── header.tsx # Navigation header
│       │   └── sidebar.tsx# Sidebar navigation
│       ├── data/          # Mock data files
│       ├── lib/           # Utility functions
│       └── public/        # Static assets
├── packages/              # Shared packages (future)
├── turbo.json            # TurboRepo configuration
└── package.json          # Root package.json
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Bun** (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campus-portal-monorepo
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Start the development server**
   ```bash
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Manual Installation (Alternative)

If you prefer manual setup:

```bash
# Install dependencies
bun install

# Install web app dependencies
cd apps/web && bun install && cd ../..

# Start development server
bun dev
```

## 📱 Pages & Features

### 🔑 Login Page
- Modern glassmorphic login form
- Illustration on the left side
- Form validation
- Responsive design

### 📊 Dashboard
- Welcome message with student info
- Metrics cards (attendance, CIE scores, fees, courses)
- Quick action buttons
- Animated components

### 📚 Courses Page
- Table view of all enrolled courses
- Course type badges (PC, BS, AE, NCMC)
- Faculty information
- Search and filter functionality

### 💰 Fees Page
- Fee overview cards
- Detailed fee structure table
- Payment status indicators
- Download receipt functionality

### 📅 Attendance Page
- Attendance records for all subjects
- Color-coded status indicators
- Overall attendance percentage
- Eligibility status

### 🎯 CIE Page
- Internal assessment marks
- Theory and lab marks breakdown
- Eligibility status for exams
- Performance indicators

### 👨‍🏫 Proctor Diary
- Personal information display
- Family details
- Contact information
- Address details

## 🎨 Design System

### Color Scheme
- **Primary**: Blue tones for main actions
- **Secondary**: Muted grays for secondary content
- **Success**: Green for positive states
- **Warning**: Yellow/Orange for attention
- **Error**: Red for negative states

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, good line-height

### Components
- **Cards**: Glassmorphic with backdrop-blur
- **Buttons**: Rounded with hover animations
- **Tables**: Clean, responsive with hover states
- **Badges**: Color-coded status indicators

## 🔧 Development

### Available Scripts

```bash
# Development
bun dev          # Start dev server for all apps
bun build        # Build all applications
bun lint         # Lint all packages
bun clean        # Clean build artifacts

# Individual app commands
cd apps/web
bun dev          # Start web app only
bun build        # Build web app only
bun lint         # Lint web app only
```

### Environment Variables

Create `apps/web/.env.local`:

```env
NEXT_PUBLIC_APP_NAME="TechVerse Student Portal"
NEXT_PUBLIC_APP_VERSION="1.0.0"
```

## � Data Structure

All data is mocked and stored in the `apps/web/data/` directory:

- `student.ts` - Student personal information
- `courses.ts` - Course enrollment data
- `fees.ts` - Fee structure and payment info
- `attendance.ts` - Attendance records
- `cie.ts` - Internal assessment marks

## 🎭 Demo Credentials

For demo purposes, any USN and password combination will work on the login page.

Example:
- **USN**: `ABC23DEF456`
- **Password**: `password123`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set the root directory to `apps/web`
3. Deploy with default settings

### Manual Deployment

```bash
# Build the application
bun build

# Deploy the apps/web/.next folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## � License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is a demo project created for educational purposes. All student data is fictional and generated for demonstration only. Do not use real personal information or credentials.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for the icon library

---

Built with ❤️ by the TechVerse Team
