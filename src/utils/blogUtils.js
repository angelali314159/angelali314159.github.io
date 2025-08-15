// Blog post metadata and content management
export const blogPosts = [
  {
    id: 1,
    slug: 'welcome-to-my-blog',
    title: "Welcome to My Blog!",
    date: "2024-01-15",
    tags: ['introduction', 'personal'],
    featured: true,
    filename: 'first-post'
  },
  {
    id: 2,
    slug: 'building-my-personal-website',
    title: "Building My Personal Website",
    date: "2024-01-10",
    tags: ['web-development', 'react', 'tailwind'],
    filename: 'building-website'
  },
];

// Function to get excerpt from HTML content (first paragraph or 150 chars)
export const getExcerpt = (content, length = 150) => {
  // Remove HTML tags and frontmatter for excerpt
  const plainText = content
    .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Get first 150 characters or until first period/newline
  if (plainText.length <= length) {
    return plainText;
  }
  
  const truncated = plainText.substring(0, length);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
};

// Simple frontmatter parser for HTML files
const parseFrontmatter = (content) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatter = match[1];
  const htmlContent = match[2];
  
  // Parse simple YAML-like frontmatter
  const data = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      // Handle arrays (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
      } else {
        data[key] = value.replace(/['"]/g, '');
      }
    }
  });
  
  return { data, content: htmlContent };
};

// Function to load blog post content from separate files
export const loadBlogPost = async (slug) => {
  try {
    const postMeta = blogPosts.find(post => post.slug === slug);
    if (!postMeta) {
      throw new Error('Post not found');
    }

    // Import the HTML file dynamically
    const htmlModule = await import(`../components/data/blogPosts/${postMeta.filename}.js`);
    const htmlContent = htmlModule.default;
    
    // Parse frontmatter and content
    const { data: frontmatter, content } = parseFrontmatter(htmlContent);
    
    return {
      title: frontmatter.title || postMeta.title,
      date: frontmatter.date || postMeta.date,
      tags: frontmatter.tags || postMeta.tags,
      content,
      slug
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    throw new Error(`Failed to load blog post: ${error.message}`);
  }
};