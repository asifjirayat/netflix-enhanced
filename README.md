# Streamflix - React Based Streaming Platform

A modern Netflix-inspired streaming platform built with React, showcasing authentic animations, responsive design, and real movie data integration.

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
- ✅ 404 Error page with branded design
- ✅ SPA routing configuration for Vercel deployment

#### Movie Data & UI

- ✅ _Real TMDB API Integration_ - Live movie data from The Movie Database
- ✅ _Secure Proxy Server_ - Backend Express server hiding API keys
- ✅ _4 Movie Categories_ - Trending, Popular, Top Rated, Now Playing
- ✅ _Dynamic Hero Section_ - Featured movie with real backdrop images
- ✅ _Interactive Movie Cards_ - Netflix-style hover effects with scaling
- ✅ _Movie Runtime Data_ - Fetched dynamically on hover/touch
- ✅ _Professional Loading States_ - Skeleton loaders matching final content
- ✅ _Error Handling_ - Graceful fallbacks for network issues

#### Category Pages & Pagination

- ✅ _Individual Category Pages_ - Dedicated pages for each movie category
- ✅ _Movie Grid Layouts_ - Consistent card-based display system
- ✅ _Infinite Scroll Pagination_ - Load more movies with smooth transitions
- ✅ _useReducer Hook Implementation_ - Advanced state management for pagination
- ✅ _Custom Pagination Hook_ - Reusable useMoviesPagination across all categories
- ✅ _Proxy Server Pagination_ - Backend support for page parameters

#### Interactive Movie Components

✅ _Interactive Movie Cards_ - Netflix-style hover effects with scaling

- ✅ _Framer Motion Animations_ - Smooth card hover transitions
- ✅ _Touch-Friendly Mobile_ - Tap interactions for movie details
- ✅ _Horizontal Movie Scrolling_ - Netflix-style browsing experience
- ✅ _Real Movie Posters_ - High-quality images from TMDB
- ✅ _Active Navigation_ - Current page highlighting in menu

#### Search Functionality

- ✅ _Animated Search Bar_ - Framer Motion powered expandable search input
- ✅ _Search Form Handling_ - React Router navigation to search results
- ✅ _Search Results Page_ - Dedicated page with movie grid layout
- ✅ _Search API Integration_ - Backend proxy handling search queries
- ✅ _Search Pagination_ - Load more search results functionality
- ✅ _Empty State Handling_ - User-friendly messages for no results

#### User Experience

- ✅ _Cross-Device Compatibility_ - Works on desktop, tablet, and mobile
- ✅ _Smooth Animations_ - Framer Motion powered transitions throughout
- ✅ _Professional Loading States_ - Skeleton loaders for better UX
- ✅ _DNS-Agnostic Design_ - Resolves connectivity issues globally
- ✅ _Production Deployment_ - Separate frontend/backend architecture
- ✅ _Environment Configuration_ - Secure key management

#### Architecture & Security

- ✅ _Secure API Proxy_ - Backend server hides TMDB API keys
- ✅ _DNS-Agnostic Design_ - Resolves connectivity issues in India
- ✅ _Error Handling_ - Graceful fallbacks for network issues
- ✅ _Professional Deployment_ - Separate frontend/backend architecture
- ✅ _Environment Configuration_ - Secure key management

## 🚧 Current Development Phase

_Authentication & User Features_ _(Next Phase)_

- 🔄 User authentication system
- 🔄 Watchlist/My List functionality
- 🔄 User preferences and settings

## 🛣️ Upcoming Features

#### Advanced Functionality

- Movie detail modal overlays with full information
- Video trailer integration via TMDB
- Advanced search filters (genre, year, rating)
- My List watchlist feature (local storage)
- Recently viewed movies tracking

#### Performance & Polish

- Code splitting and lazy loading
- Image optimization and caching
- API response caching strategies
- Accessibility improvements (ARIA labels, keyboard navigation)
- SEO optimization with meta tags and structured data

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
- Mobile-first responsive design

#### Professional Patterns

- Component-based architecture
- Custom hooks for data management (useMoviesPagination, useScrollPosition)
- Advanced state management with useReducer
- Error boundary implementations
- Proper separation of concerns

## Technical Decisions

- Framer Motion over CSS: Better animation control and React integration
- Self-hosted Fonts: Improved performance over Google Fonts CDN
- Proxy Architecture: Solves security AND regional connectivity issues
- React Router: Professional SPA navigation patterns
- TMDB API: Rich movie database with high-quality assets
- useReducer for Pagination: Better state management for complex pagination logic
- Tailwind CSS: Rapid development with consistent design system

## Installation & Setup

### Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/asifjirayat/streamflix
cd streamflix
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser

### Environment Setup

- Copy `.env.example` to `.env`
- Add your TMDB API key to `.env`
- Get your API key from `https://www.themoviedb.org/`

### Project Structure

```bash
src/
├── App.jsx
├── components/
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── movies/
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   ├── MoviesGrid.jsx
│   │   └── PageHeader.jsx
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── NowPlaying.jsx
│   │   ├── Popular.jsx
│   │   ├── SearchResultsPage.jsx
│   │   ├── TopRated.jsx
│   │   └── TrendingPage.jsx
│   ├── sections/
│   │   └── Hero.jsx
│   └── ui/
│       ├── LoadMoreButton.jsx
│       └── SearchBar.jsx
├── hooks/
│   ├── useMovies.js
│   ├── useMoviesPagination.js
│   └── useScrollPosition.js
├── index.css
├── main.jsx
├── services/
│   └── tmdbApi.js
└── utils/
    └── mockData.js

```

## Performance Metrics (Lighthouse score)

- Performance: 94
- Accessibility: 90
- Best Practices: 100
- First Contentful Paint: ~0.4s
- Total Blocking Time: 0s

## 📄 License

This project is open source and available under the MIT License.

## Status

🟢 _Production Ready_ - Check back for updates!

---

Contributors Welcome! Feel free to submit issues, feature requests, or pull requests to help improve StreamFlix.

README.md Last Updated: _05-September-2025_
