# 🐕 ShibaDino Landing Page

A modern, performant landing page built with Next.js 15, TypeScript, and TailwindCSS.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **UI Components:** Custom components with Radix UI primitives
- **Development:** Turbopack for faster development experience

## 📁 Project Structure

```
shibadino-lp/
├── src/
│   ├── app/           # Next.js app router pages and layouts
│       ├── _components/   # Components for homepage sections
│       ├── _sections/     # Comepage sections
│   ├── components/    # Reusable UI components
│   └── lib/          # Utility functions, fonts, and shared logic
├── public/           # Static assets
└── ...config files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shibadino-lp
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code linting

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration for TailwindCSS
- `prettier.config.js` - Code formatting rules
- `eslint.config.mjs` - Linting rules
- `components.json` - UI components configuration

## 🎨 Features

- Modern UI/UX with TailwindCSS
- Smooth animations using Motion
- Type-safe development with TypeScript
- Fast development experience with Turbopack
- Component-driven architecture
- Optimized for performance
- SEO friendly

## 📦 Dependencies

### Core
- Next.js 15.3.1
- React 19.0.0
- TypeScript 5.x
- TailwindCSS 4.x

### UI and Animation
- Motion 12.7.4
- Radix UI components
- class-variance-authority
- clsx & tailwind-merge for class management
