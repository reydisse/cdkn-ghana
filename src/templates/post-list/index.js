import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import BlogList from "../../components/blog/list-blog";
import PaginationLinks from "../../components/pagination";
import { BlogPostContentArea, BlogDetailsArea } from "./style";

const PostList = ({ location, data, pageContext, ...props }) => {
    const listBlogData = data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = pageContext;

    return (
        <Layout>
            <SEO
                title={"Page 2 of 6 - Collections, News, Tips by Givest"}
                pathname="/"
                isBlogPost
            />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Post"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogPostContentArea>
                                {listBlogData &&
                                    listBlogData.map((blog, i) => {
                                        return (
                                            <BlogList
                                                key={i}
                                                title={
                                                    blog.node.frontmatter.title
                                                }
                                                thume_image={
                                                    blog.node.frontmatter
                                                        .thume_image
                                                }
                                                categories={
                                                    blog.node.frontmatter
                                                        .categories
                                                }
                                                body={blog.node.excerpt}
                                                date={
                                                    blog.node.frontmatter.date
                                                }
                                                slug={blog.node.fields.slug}
                                                postAuthor={
                                                    blog.node.frontmatter.author
                                                }
                                            />
                                        );
                                    })}
                            </BlogPostContentArea>

                            <PaginationLinks
                                currentPage={currentPage}
                                numberOfPages={numberOfPages}
                            />
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

PostList.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const PlstListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { frontmatter: { date: DESC } }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        author
                        categories
                        date(formatString: "MMMM DD YYYY")
                        tags
                        quote_text
                        title
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 750, height: 400)
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 100, truncate: true)
                }
            }
        }
    }
`;
export default PostList;
