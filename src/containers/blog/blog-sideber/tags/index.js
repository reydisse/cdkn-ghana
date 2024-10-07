import React from "react";
import Tag from "@components/blog/blog-sidebar/tags";
import { graphql, useStaticQuery } from "gatsby";

const AllTags = () => {
    const tagQuery = useStaticQuery(graphql`
        query TagQuery {
         allWordpressPost {
    edges {
      node {
        id
        date
        content {
          rendered
          protected
        }
        title {
          rendered
        }
        featured_media
        categories
      }
    }
  }
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `);

    const tags = tagQuery.allMarkdownRemark.edges;

    return <Tag tags={tags} />;
};

export default AllTags;
