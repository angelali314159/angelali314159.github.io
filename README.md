# GitHub Pages Personal Website

This project is a personal website built using React and hosted on GitHub Pages. It introduces the creator, showcases their resume, and includes a blog section for sharing thoughts and experiences. The website is styled using Tailwind CSS for a modern and responsive design.

## Project Structure

- **public/index.html**: The main HTML template for the React application, including a root div for rendering.
- **public/favicon.ico**: The favicon for the website.
- **src/components/**: Contains React components for different sections of the website.
  - **About.js**: Displays information about the creator, including background and interests.
  - **Blog.js**: Lists the blog posts and links to their content.
  - **Header.js**: Contains navigation links to different sections of the website.
  - **Footer.js**: Displays copyright information.
  - **Home.js**: Serves as the landing page and introduces the creator.
  - **Resume.js**: Displays the creator's resume information.
- **src/blog/**: Contains Markdown files for blog posts.
  - **post1.md**: Content for the first blog post.
  - **post2.md**: Content for the second blog post.
  - **post3.md**: Content for the third blog post.
- **src/App.js**: The main application component that sets up routing and renders the appropriate components based on the current path.
- **src/index.js**: The entry point of the React application, rendering the App component into the root div of the index.html file.
- **src/styles/styles.css**: Custom styles that complement Tailwind CSS.
- **src/tailwind.config.js**: Configuration file for customizing Tailwind CSS styles.
- **package.json**: npm configuration file listing dependencies and scripts.
- **postcss.config.js**: Configuration file for PostCSS to process CSS with plugins.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Build the CSS using PostCSS:
   ```
   npm run build
   ```
5. Start the development server:
   ```
   npm start
   ```
6. Open your browser and go to `http://localhost:3000` to view the website.

## Features

- Responsive design using Tailwind CSS.
- Blog section for sharing posts.
- Easy navigation between sections.
- Custom styles for a unique look.

## License

This project is open-source and available for anyone to use and modify.