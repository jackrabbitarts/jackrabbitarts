import React from 'react'

function BlogPost({ path }) {
  // Define the base URL of your website
  const baseUrl = 'https://example.com';

  // Construct the full URL for the blog post
  const fullUrl = `${baseUrl}${path}`;

  return (
    <div>
      {/* Use the 'fullUrl' to request and render the HTML content */}
      <iframe src={fullUrl} title="Blog Post" />
    </div>
  );
}

export default BlogPost;