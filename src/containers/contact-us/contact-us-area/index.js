import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "@components/contact-from";
import { StaticImage } from "gatsby-plugin-image";
import {
    SectionArea,
    ContactColunm,
    ContactMapArea,
    ContactInfoContentArea,
    ContactInfoItem,
    ContactIcon,
    ContactInfoContent,
    ContactTitle,
} from "./style";
const ContactUsArea = () => {
    return (
        <SectionArea>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <ContactColunm>
                            <ContactForm />

                            <ContactMapArea>
                                <ContactInfoContentArea>
                                    {/* <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c1.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Phone</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <a href="tel://+233541896955">
                                                233 541 896 955
                                            </a>
                                            <a href="tel://+884687549786">
                                                233 468-7549 786
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem> */}
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c2.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Email</ContactTitle>
                                            {/* <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            /> */}
                                            <a href="mailto://prince@southsouthnorth.org">
                                                prince@southsouthnorth.org
                                            </a>
                                            <a href="mailto://valerie@southsouthnorth.org">
                                                valerie@southsouthnorth.org
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c3.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Address</ContactTitle>
                                            {/* <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            /> */}
                                            <p
                                                style={{
                                                    textTransform: "none",
                                                }}
                                            >
                                                Haatso-Atomic Road, <br />
                                                Adjacent Royal Foam <br />
                                                Accra-Ghana
                                            </p>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                </ContactInfoContentArea>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.098732037819!2d-0.2012139!3d5.667803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNc2wMzInMTkuNyJTIDDCsDQ1JzAyLjQiVw!5e0!3m2!1sen!2sgh!4v1646296700026!5m2!1sen!2sgh"
                                ></iframe>
                            </ContactMapArea>
                        </ContactColunm>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ContactUsArea;
