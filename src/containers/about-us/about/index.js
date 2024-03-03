/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { graphql, useStaticQuery } from "gatsby";
import MissionBox from "@components/mission";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    ContentBoxWrp,
} from "./style";

const AboutPageArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutPageQuery {
            aboutUsJson {
                id
                section_title {
                    title
                    subTitle
                }
                content1
                content2
                content3
                image1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                mission {
                    id
                    VerientClassName
                    text1
                    text2
                    title
                }
            }
        }
    `);

    const {
        section_title: { title, subTitle },
        image1,
        content1,
        content2,
        content3,
        mission,
    } = aboutSectonQery.aboutUsJson;

    const imageOne = getImage(image1);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title={title}
                            subTitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xl={4}>
                        <LayerStyle>
                            <Thumb>
                                <GatsbyImage
                                    image={imageOne}
                                    className="img-one"
                                    alt="CDKN Ghana"
                                />
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={8} xl={8}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <AboutTextStyle>{content2}</AboutTextStyle>
                            <AboutTextStyle className="mb-0">
                                {content3}
                            </AboutTextStyle>
                        </AboutContent>
                    </Col>
                    <ContentBoxWrp>
                        <Row>
                            {mission.map((itemData) => {
                                return (
                                    <Col
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        key={itemData.id}
                                    >
                                        <MissionBox
                                            title={itemData.title}
                                            text1={itemData.text1}
                                            text2={itemData.text2}
                                            VerientClassName={
                                                itemData.VerientClassName
                                            }
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </ContentBoxWrp>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutPageArea;
