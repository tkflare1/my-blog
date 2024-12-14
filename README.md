# Blog Project - Learning Next.js and Sanity.io

## Overview
This project is a blog platform built using **Next.js** and **Sanity.io**. It was created as a learning exercise to explore full-stack development with modern frameworks and libraries. The blog dynamically fetches posts from a Sanity CMS backend and displays them with a responsive and visually appealing design.

## Features
- **Dynamic Content**: Blog posts are fetched from Sanity.io and displayed dynamically.
- **Responsive Design**: The layout adapts seamlessly to different screen sizes (mobile, tablet, and desktop).
- **Category and Author Data**: Posts are categorized, and author details are fetched dynamically.
- **Optimized Images**: Images are served efficiently using the `next/image` component.
- **Reusable Components**: Modular components such as `Card`, `NavBar`, and `Footer` make the codebase easy to maintain and extend.
- **Custom Styling**: Styles are tailored using a combination of CSS modules and global CSS.

## Technologies Used
- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Styling**: Tailwind CSS, custom CSS files
- **Image Optimization**: Next.js `next/image` component
- **Data Fetching**: Static and dynamic data fetching using Sanity's GROQ queries
- **TypeScript**: Strong typing for safer and more maintainable code

## Installation and Setup
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the Sanity backend:
   - Create a Sanity project at [Sanity.io](https://www.sanity.io/).
   - Define the required schemas (e.g., `post`, `author`, `category`).
   - Connect your Sanity project by updating the client configuration in `lib/sanity.js`.

4. Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Directory Structure
- **`components/`**: Contains reusable UI components such as `Card`, `NavBar`, and `Footer`.
- **`lib/`**: Includes helper functions and client configurations for Sanity.
- **`pages/`**: Contains the Next.js pages, including the main blog page and individual post pages.
- **`public/`**: Stores static assets like images and icons.
- **`styles/`**: Contains global and custom CSS styles.
- **`mystyles.css`**: Additional custom styles for unique visual elements.

## Key Functionality
1. **Dynamic Blog Post Rendering**:
   - Fetches blog posts using the GROQ query:
     ```javascript
     const query = `
       *[_type == 'post'] | order(_updatedAt desc) {
         title,
         "currentSlug": slug.current,
         "authorRef": author._ref,
         mainImage,
         "category": categories[0]->title,
         body,
         _createdAt
       }`;
     ```

2. **Reusable Components**:
   - Example: `Card` component for displaying each blog post with a title, category, and preview text.

3. **Metadata and SEO**:
   - Dynamic metadata using Next.js's `Metadata` API.

## Lessons Learned
- **Next.js Features**: Leveraging static generation and server-side rendering for performance and flexibility.
- **Sanity.io**: A powerful and customizable CMS for managing content.
- **Responsive Design**: Using Tailwind CSS and `next/image` to create a responsive and optimized user experience.
- **Code Modularity**: Writing reusable and maintainable components for scalability.

## Future Improvements
- Add support for comments and user interaction.
- Enhance the UI/UX with animations and transitions.
- Implement advanced features like search functionality and post filtering.
- Explore deployment options and optimize for production.

## License
This project is for educational purposes and is not intended for commercial use. Feel free to use and adapt the code for your own learning journey!
