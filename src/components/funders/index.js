/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, BrandLogoContent } from "./style";
import SponsorLogo from "@components/sponsors";
import { graphql, useStaticQuery } from "gatsby";

const FundersArea = () => {
    const sponsorsQuery = useStaticQuery(graphql`
        query SponsorsQuery {
            allSponsorsJson {
                edges {
                    node {
                        id
                        sponsorLogo {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const sponsorsData = sponsorsQuery.allSponsorsJson.edges;
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col
                        sm={{ span: 8, offset: 2 }}
                        md={{ sapn: 8, offset: 2 }}
                        lg={{ span: 4, offset: 0 }}
                        xl={12}
                    >
                        <SectionTitle
                            titleStyle
                            // texttheme
                            sx={{
                                mb: ["30px", "50px", "60px", "60px", "60px"],
                                mt: ["0px", "0px", "0px", "0px", "60px"],
                            }}
                            subTitle={"Partnerships that drive change"}
                        />
                    </Col>
                    <Col xl={12}>
                        <BrandLogoContent>
                            <Row className="row-cols-7">
                                {" "}
                                {/* Set number of columns to 7 */}
                                {sponsorsData &&
                                    sponsorsData.map((item) => {
                                        return (
                                            <Col
                                                key={item.node.id}
                                                className="col"
                                            >
                                                <SponsorLogo
                                                    sponsorLogo={
                                                        item.node.sponsorLogo
                                                            .childImageSharp
                                                    }
                                                />
                                            </Col>
                                        );
                                    })}
                            </Row>
                        </BrandLogoContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default FundersArea;
