import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BlogPostCard from '../../components/blog-post-card';
import BlogLayout from '../../components/blog-layout';
import SEO from '../../components/seo';

import './style.scss';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              shortDescription
              date(formatString: "D MMM YYYY")
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <BlogLayout backTo="/">
      <SEO title="Blog" description="[YOUR PERSONAL BLOG DESCRIPTION]" />
      <div className="blog">
        <h1>
          Personal Blog by <span>[YOUR NAME]</span>
        </h1>
        {posts.map((post, index) => {
          const { title, shortDescription, date } = post.node.frontmatter;
          const { slug } = post.node.fields;
          return (
            <BlogPostCard
              key={index}
              title={title}
              shortDescription={shortDescription}
              date={date}
              to={`/blog/${slug}`}
            />
          );
        })}
      </div>
    </BlogLayout>
  );
};

export default Blog;
