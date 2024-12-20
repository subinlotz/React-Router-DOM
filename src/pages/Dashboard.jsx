import React from 'react';
import './Dashboard.css';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start a Successful Blog in 2024',
    excerpt: 'Discover the essential steps to launch your blog and attract readers. Learn tips, tools, and strategies to succeed in blogging.',
    image: 'https://via.placeholder.com/600x300?text=Start+Blogging',
    date: 'September 25, 2024',
  },
  {
    id: 2,
    title: '10 Tips for Writing Engaging Content',
    excerpt: 'Writing content that captures attention is key to a successful blog. Here are 10 tips to make your content stand out.',
    image: 'https://via.placeholder.com/600x300?text=Writing+Tips',
    date: 'October 1, 2024',
  },
  {
    id: 3,
    title: 'The Best SEO Practices for Bloggers',
    excerpt: 'Improve your blog’s search engine visibility with these SEO techniques. Drive more organic traffic to your posts.',
    image: 'https://via.placeholder.com/600x300?text=SEO+for+Bloggers',
    date: 'October 10, 2024',
  },
];

const Dashboard = () => {
  return (
    <div className="blog-posts-container">
      <h1>Latest Blog Posts</h1>
      <div className="posts-list">
        {blogPosts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <a className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
