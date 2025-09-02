# Streamflix - React Based Streaming Platform

A modern Streamflix clone built with React, showcasing authentic animations, responsive design, and movie streaming interface.

#### Live Demo: [https://streamflix-flax.vercel.app/](https://streamflix-flax.vercel.app/)

## Tech Stack

Frontend:

- React 18 + Vite
- Tailwind CSS 4.1
- Framer Motion for animations
- React Router v6 for navigation
- Heroicons React (Outline & Solid)

Backend:

- Node.js + Express proxy server
- Secure API key management
- CORS protection
- DNS-agnostic architecture

API & Data:

- TMDB (The Movie Database) API integration
- Real movie posters, ratings, and metadata
- Dynamic content fetching with error handling

Fonts & Assets:

- Bebas Neue + Helvetica Neue (Self-hosted)
- Custom StreamFlix branding and logos

Deployment:

- Frontend: Vercel
- Backend Proxy: Vercel/Railway
- Environment-based configuration

## Completed Features

#### Core Application

- ✅ Professional React + Vite setup with optimized workflow
- ✅ Complete responsive design (mobile-first approach)
- ✅ React Router navigation with clean URLs
- ✅ Mobile hamburger menu with smooth animations
- ✅ Fixed header with scroll-based backdrop effects

#### Movie Data & UI

- ✅ **Real TMDB API Integration** - Live movie data from The Movie Database
- ✅ **4 Movie Categories** - Trending, Popular, Top Rated, Now Playing
- ✅ **Dynamic Hero Section** - Featured movie with real backdrop images
- ✅ **Interactive Movie Cards** - Netflix-style hover effects with scaling
- ✅ **Movie Runtime Data** - Fetched dynamically on hover/touch
- ✅ **Professional Loading States** - Skeleton loaders matching final content

#### User Experience

- ✅ **Cross-Device Compatibility** - Works on desktop, tablet, and mobile
- ✅ **Touch-Friendly Mobile** - Tap interactions for movie details
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Horizontal Movie Scrolling** - Habitual browsing experience
- ✅ **Real Movie Posters** - High-quality images from TMDB
- ✅ **Active Navigation** - Current page highlighting in menu

#### Architecture & Security

- 🔄 **Secure API Proxy** - Backend server hides TMDB API keys
- 🔄 **DNS-Agnostic Design** - Resolves connectivity issues in India
- 🔄 **Error Handling** - Graceful fallbacks for network issues
- 🔄 **Professional Deployment** - Separate frontend/backend architecture
- 🔄 **Environment Configuration** - Secure key management

## 🚧 Current Development Phase

**Navigation & Pages** _(In Progress)_

- ✅ React Router setup with working navigation
- ✅ Header navigation with active states
- 🔄 Individual category pages (Trending, Popular, etc.)
- 🔄 Movie grid layouts for category pages
- 🔄 Pagination for loading more movies

## 🛣️ Upcoming Features

#### Advanced Functionality

- Movie detail modal overlays with full information
- Video trailer integration via TMDB
- Search functionality with live results
- My List watchlist feature (local storage)
- Genre filtering and sorting options

#### Performance & Polish

- Code splitting and lazy loading
- Image optimization and caching
- API response caching strategies
- Accessibility improvements (ARIA labels, keyboard navigation)
- SEO optimization

## 🏗️ Architecture Highlights

#### Security-First Design

- User → Frontend (Vercel) → Proxy Server → TMDB API
- API keys never exposed to browsers
- CORS protection for proxy endpoints
- Production-ready security patterns

#### Global Accessibility

- Resolves DNS issues common in India
- Works with any ISP or DNS configuration
- Consistent performance worldwide

#### Professional Patterns

- Component-based architecture
- Custom hooks for data management
- Responsive design system
- Error boundary implementations

## Technical Decisions

- Framer Motion over CSS: Better animation control and React integration
- Self-hosted Fonts: Improved performance over Google Fonts CDN
- Proxy Architecture: Solves security AND regional connectivity issues
- React Router: Professional SPA navigation patterns
- TMDB API: Rich movie database with high-quality assets

## Installation & Setup

### Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/asifjirayat/Streamflix-enhanced
cd Streamflix-enhanced
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Environment Setup

- Copy `.env.example` to `.env`
- Add your TMDB API key to `.env`
- Get your API key from https://www.themoviedb.org/

Open http://localhost:5173 in your browser

## 📄 License

This project is open source and available under the MIT License.

## Status

🟡 **In Development** - Check back for updates!

---

_This README will be updated from time-to-time until the project is complete._
