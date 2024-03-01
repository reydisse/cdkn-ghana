/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import SectionTitle from "@components/title";
import Button from "@components/ui/button";
import EventItem from "@components/events";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Video from "@components/ui/video";
import Tilt from "react-parallax-tilt";
import { SectionArea, EventContentWrap, LayerStyle, Thumb } from "./style";

const EventArea = () => {
    const eventsQuery = useStaticQuery(graphql`
        query EventsQuery {
            allEventJson {
                edges {
                    node {
                        title
                        path
                        eventDate
                        id
                        eventSubject
                        thumbImg {
                            childImageSharp {
                                gatsbyImageData(height: 256)
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const eventsData = eventsQuery.allEventJson.edges;

    // Video Modal Popup
    const [isOpen, setOpen] = useState(false);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            titleStyle
                            // title={"Check out previous work"}
                            subTitle={"Events & Opportunities"}
                        />
                    </Col>
                    <Row>
                        <EventContentWrap>
                            <Row>
                                {eventsData &&
                                    eventsData.slice(0, 4).map((item) => (
                                        <Col key={item.node.id} lg={6}>
                                            <EventItem
                                                title={item.node.title}
                                                eventDate={item.node.eventDate}
                                                eventSubject={
                                                    item.node.eventSubject
                                                }
                                                thumbImg={
                                                    item.node.thumbImg
                                                        .childImageSharp
                                                }
                                                slug={item.node.fields.slug}
                                            />
                                        </Col>
                                    ))}
                            </Row>
                        </EventContentWrap>
                    </Row>
                </Row>
                <p
                    style={{
                        fontSize: "20px",
                        fontWeight: 400,
                        fontFamily: "Myriad Pro",
                        fontStyle: "italic",
                    }}
                >
                    For insights into our previous initiatives and the impactful
                    journey through CDKN phase 1 and 2 in Ghana (2010-2022),
                    explore our main CDKN Website here.
                </p>

                <Button path="https://cdkn.org/regions/ghana" color="gradient">
                    CDKN Website
                </Button>
            </Container>
        </SectionArea>
    );
};

export default EventArea;
