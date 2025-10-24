# Simple Counter Application

A minimal, intuitive, and reliable React application for counting tasks. Built with Vite and React, featuring a clean user interface and responsive design.

## Features

- **Increment**: Increase the count by one (+1)
- **Decrement**: Decrease the count by one (-1) with non-negative constraint
- **Reset**: Reset the count to zero
- **Responsive Design**: Adapts to different screen sizes (desktop, tablet, mobile)
- **Dark Mode Support**: Automatically adapts to system theme preferences
- **Accessibility**: Includes proper ARIA labels and keyboard navigation

## Technical Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+) with JSX
- **Styling**: CSS3 with responsive design
- **State Management**: React's built-in useState hook

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd simple-counter-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Implementation Details

### Component Structure

- **`App.jsx`**: Main root component that renders the Counter component
- **`Counter.jsx`**: Primary component containing:
  - Count state management using useState hook
  - Event handlers for increment, decrement, and reset actions
  - UI rendering with responsive design
- **`Counter.css`**: Stylesheet with responsive design and dark mode support

### Key Features Implementation

- **Non-negative constraint**: Decrement button is disabled when count is 0
- **State management**: Single state variable managed with useState hook
- **Event handling**: Separate functions for each action (increment, decrement, reset)
- **Responsive design**: Mobile-first approach with breakpoints at 768px and 480px
- **Accessibility**: ARIA labels and focus management

## Browser Support

- Modern browsers supporting ES2020
- Mobile browsers (iOS Safari, Android Chrome)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

Repository for chat room: Victor15
