/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogList from "@components/blog/list-blog";
import { BlogPostContentArea, PaginationArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import PaginationLinks from "../../../components/pagination";

const BlogPostArea = () => {
  const listBlogQuery = useStaticQuery(graphql`
    query ListBlogQuery {
      allWordpressPost {
        totalCount
        edges {
          node {
            id
            featured_media
            content {
              rendered
            }
            date(formatString: "MMM DD YYYY")
            title {
              rendered
            }
            slug
            author
          }
        }
      }
    }
  `);
  
  const { totalCount } = listBlogQuery.allWordpressPost;
  const listBlogData = listBlogQuery.allWordpressPost.edges;
  const postsPerPage = 3;
  let numberOfPages = Math.ceil(totalCount / postsPerPage);

  return (
    <BlogPostContentArea>
      {listBlogData &&
        listBlogData.map(({ node }, i) => (
          <BlogList
            key={i}
            title={node.title.rendered}
            thume_image={node.featured_media}
            body={node.content.rendered}
            date={node.date}
            slug={node.slug}
            postAuthor={node.author}
          />
        ))}

      <PaginationArea>
        <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
      </PaginationArea>
    </BlogPostContentArea>
  );
};

export default BlogPostArea;