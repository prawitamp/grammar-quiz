# GrammarQuiz - Educational Grammar Game

Platform belajar grammar interaktif untuk siswa SD, SMP, dan SMA dengan gamification.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Project Structure

```
grammar-game-nextjs/
├── app/
│   ├── layout.tsx          # Root layout dengan Navbar
│   ├── page.tsx             # Dashboard page
│   ├── game/
│   │   └── page.tsx         # Game quiz page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation component
│   └── ui/                  # Reusable UI components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Feedback.tsx
│       ├── Modal.tsx
│       ├── Option.tsx
│       ├── ProgressBar.tsx
│       └── QuestionCard.tsx
├── tailwind.config.ts       # Tailwind + Design tokens
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1) - Main actions
- **Secondary**: Pink (#ec4899) - Accents
- **Success**: Green (#10b981) - Correct answers
- **Warning**: Amber (#f59e0b) - Warnings
- **Danger**: Red (#ef4444) - Incorrect answers

### Components
- **Button**: Primary, secondary, danger variants
- **Card**: Default, gradient, success, warm variants
- **Badge**: Success, warning, danger, primary
- **ProgressBar**: Track learning progress
- **QuestionCard**: Display quiz questions
- **Option**: Multiple choice options
- **Feedback**: Success/error messages

## 🎮 Features

### Dashboard
- Progress tracking dengan XP system
- Daily streak counter
- Game cards dengan difficulty levels
- Achievement system
- Locked content (unlock dengan XP)

### Game Mode
- Multiple choice questions
- Real-time feedback
- Score tracking
- Level progression
- Explanation untuk setiap jawaban

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Custom component library

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface untuk mobile users

## 🎯 Target Audience

- **SD (Elementary)**: Simple questions, visual feedback
- **SMP (Junior High)**: Intermediate difficulty
- **SMA (Senior High)**: Advanced grammar concepts

## 🚧 Next Steps

1. Add more question types (drag-drop, fill-in-blank)
2. Implement user authentication
3. Add backend for progress persistence
4. Create leaderboard functionality
5. Add sound effects and animations
6. Implement spaced repetition algorithm
7. Add social features (challenges, friends)

## 📄 License

This is an educational project.
