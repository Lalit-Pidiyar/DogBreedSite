This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Overview

This is a dog breed information application built using Next.js that provides detailed information about different dog breeds. Here's a breakdown of the main components and functionality:

### Key Features

1. **Interactive Dog Breed Cards**
   - Displays breed information in expandable cards
   - Shows basic information like breed name and description
   - Expandable view reveals additional details like weight ranges and hypoallergenic status
   - Smooth animations and transitions for better user experience

2. **Search Functionality** 
   - Real-time search filtering of dog breeds
   - Case-insensitive search
   - Updates results as user types

3. **Data Display**
   - Breed name and description
   - Average lifespan information
   - Male and female weight ranges
   - Hypoallergenic status with visual indicators
   - Breed group/type information

### Technical Implementation

1. **State Management**
   - Uses React's useState hooks for managing:
     - Breed data
     - Loading states
     - Error handling
     - Card expansion states
     - Search query

2. **Data Fetching**
   - Implements useEffect hook for API calls
   - Fetches data from 'https://dogapi.dog/api/v2/breeds'
   - Includes error handling and loading states

3. **Styling**
   - Utilizes Tailwind CSS for responsive design
   - Custom animations and transitions
   - Mobile-friendly grid layout
   - Purple-themed color scheme
   - Hover effects and interactive elements

4. **Component Structure**
   - Main page component (`page.js`)
   - DogBreedList component (`dogbreed.js`)
   - Responsive grid layout
   - Conditional rendering for expanded card views

### User Interface Features

1. **Card Design**
   - Hover effects with shadow and scale transformations
   - Expandable/collapsible content
   - Clear typography hierarchy
   - Visual feedback on interactions

2. **Loading & Error States**
   - Loading indicator during data fetch
   - Error message display for failed API calls
   - Graceful fallbacks for missing data

This application demonstrates modern React practices, responsive design principles, and effective state management while providing a user-friendly interface for exploring dog breed information.

