/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    EventItemWrap,
    Thumb,
    ContentArea,
    EventInfo,
    EventName,
} from "./style";
import Button from "@components/ui/button";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const EventItem = ({ title, eventDate, eventSubject, thumbImg, slug }) => {
    const image = getImage(thumbImg);
    return (
        <EventItemWrap>
            <Thumb>
                <GatsbyImage
                    className="thumb-img"
                    image={image}
                    alt="Image-Givest"
                />
                <Button
                    className="btn-theme"
                    size="small"
                    color="theme-gradient"
                    path="/events"
                >
                    View more
                    <i
                        className="flaticon-right-arrow"
                        // eslint-disable-next-line react/no-unknown-property
                        sx={{ fontSize: "12px" }}
                    ></i>
                </Button>
            </Thumb>
            <ContentArea>
                <EventInfo>
                    {eventDate} {"//"} <span>{eventSubject}</span>
                </EventInfo>
                <EventName>
                    <Link to={""}>{title}</Link>
                    {/* `/events/${slug}` */}
                </EventName>
            </ContentArea>
        </EventItemWrap>
    );
};

EventItem.propTypes = {
    title: PropTypes.string,
    eventDate: PropTypes.string,
    eventSubject: PropTypes.string,
    thumbImg: PropTypes.object,
    slug: PropTypes.string,
};

export default EventItem;
