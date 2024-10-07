/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import { slugify } from "@utils/functions";
import BlogSidebar from "@containers/blog/blog-sideber";
import authors from "@utils/authors";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { DiscussionEmbed } from "disqus-react";
import {
    SingleBlogContent,
    PostDetailsContentWrap,
    BlogDetailsArea,
    PostDetailsBody,
    Thumb,
    Content,
    Title,
    MetaBox,
    CategorySocialContent,
    PostSocialItems,
    PostCategoryItems,
    CommentArea,
    CommentTitle,
} from "./style";

const SinglePosts = ({ data, location, pageContext }) => {
    const post = data.allWordpressPost.edges[0].node;
    // Note: featured_media is now just an ID, not an image object
    // You'll need to query for the actual image separately if needed

    // Author Post page
    // Note: author is now just an ID, you'll need to fetch author details separately
    const author = authors.find((x) => x.id === post.author);

    // Social Share
    const baseUrl = "https://hasthems.com";

    // Disqus Comments add
    const disqusShorttname = "mitech-1";
    const disquscConfig = {
        identifier: post.id,
        title: post.title.rendered,
        url: baseUrl + "/" + pageContext.slug,
    };

    return (
        <Layout>
            <SEO title={post.title.rendered} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Details"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <PostDetailsContentWrap>
                                <PostDetailsBody>
                                    {/* Note: You'll need to handle the featured image differently now */}
                                    <Thumb>
                                        {/* Replace this with appropriate image handling */}
                                        {/* <GatsbyImage image={getImage(post.featured_media)} alt={post.title.rendered} /> */}
                                    </Thumb>
                                    <Content>
                                        <MetaBox>
                                            {post.categories &&
                                                post.categories.map((categoryId, i) => (
                                                    <Link
                                                        className="post-category"
                                                        key={`category-${categoryId}-${i}`}
                                                        to={`/category/${categoryId}`}
                                                    >
                                                        {/* You'll need to fetch category names separately */}
                                                        Category {categoryId}
                                                    </Link>
                                                ))}
                                            {author && (
                                                <Link
                                                    className="post-author"
                                                    to="/"
                                                >
                                                    <span className="icon">
                                                        <StaticImage
                                                            className="icon-img"
                                                            src="../../data/images/icons/admin1.png"
                                                            alt="Icon-Image"
                                                        />
                                                    </span>
                                                    By: {author && author.name}
                                                </Link>
                                            )}
                                        </MetaBox>
                                        <Title>{post.title.rendered}</Title>
                                        <SingleBlogContent
                                            dangerouslySetInnerHTML={{
                                                __html: post.content.rendered,
                                            }}
                                        />

                                        <CategorySocialContent>
                                            <PostSocialItems>
                                                <a
                                                    href={
                                                        "https://www.facebook.com/sharer/sharer.php?u=" +
                                                        baseUrl +
                                                        pageContext.slug
                                                    }
                                                >
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                                <a href="#/">
                                                    <i className="icofont-skype"></i>
                                                </a>
                                                <a
                                                    href={
                                                        "https://twitter.com/share?url=" +
                                                        baseUrl +
                                                        pageContext.slug +
                                                        "&text=" +
                                                        post.title.rendered +
                                                        "&via" +
                                                        "twitterHandle"
                                                    }
                                                >
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </PostSocialItems>
                                            <PostCategoryItems>
                                                <span>Category: </span>
                                                {post.categories.map((categoryId, i) => (
                                                    <Link
                                                        key={i}
                                                        to={`/category/${categoryId}`}
                                                    >
                                                        {/* You'll need to fetch category names separately */}
                                                        Category {categoryId}
                                                        {i !== post.categories.length - 1 && ", "}
                                                    </Link>
                                                ))}
                                            </PostCategoryItems>
                                        </CategorySocialContent>
                                    </Content>
                                    {/* <CommentArea>
                                        <CommentTitle>Comments</CommentTitle>
                                        <DiscussionEmbed
                                            shortname={disqusShorttname}
                                            config={disquscConfig}
                                        />
                                    </CommentArea> */}
                                </PostDetailsBody>
                            </PostDetailsContentWrap>
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

SinglePosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const postQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        allWordpressPost(filter: { slug: { eq: $slug } }) {
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
                    author
                }
            }
        }
    }
`;

export default SinglePosts;