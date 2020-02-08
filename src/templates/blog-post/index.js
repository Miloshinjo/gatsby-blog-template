import React from 'react';

import { Link } from 'gatsby';

import BlogLayout from '../../components/blog-layout';
import SEO from '../../components/seo';
import Share from '../../components/share';

import './style.scss';

export const query = graphql`
  query PostQuery($slug: String!) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "D MMM YYYY")
      }
    }
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { title, description, date }
  } = data.markdownRemark;

  const { prev, next } = pageContext;

  const { slug } = data.markdownRemark.fields;
  const { author, siteUrl } = data.site.siteMetadata;

  const shareUrl = `${siteUrl}/blog/${slug}`;

  return (
    <BlogLayout backTo="/blog">
      <SEO title={title} description={description} slug={slug} />
      <div className="blog-post-template">
        <div className="blog-post-template__heading">
          <small>{date}</small>
          <h1>{title}</h1>
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Share shareUrl={shareUrl} author={author} title={title} />
        <footer>
          {prev ? (
            <Link to={`/blog/${prev.fields.slug}`}>
              &larr; {prev.frontmatter.title}
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link to={`/blog/${next.fields.slug}`}>
              {next.frontmatter.title} &rarr;
            </Link>
          )}
        </footer>
      </div>
    </BlogLayout>
  );
};

export default BlogPostTemplate;
