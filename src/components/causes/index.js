/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    CausesItemWrap,
    Thumb,
    ContentBox,
    DonateInfo,
    InfoItem,
    Title,
    UserAdmin,
    UserAdminTitle,
    CausesFooter,
    UserAdminImg,
    InfoItemTitle,
    Amount,
} from "./style";
const CausesItem = ({
    title,
    dec,
    adminName,
    image,
    donateInfo,
    adminImage,
    slug,
}) => {
    const Thumbimage = getImage(image);
    const adminImg = getImage(adminImage);
    const donateInfoData = donateInfo;

    return (
        <CausesItemWrap>
            <Thumb>
                <GatsbyImage image={Thumbimage} alt={title} />
            </Thumb>
            <ContentBox>
                {/* <DonateInfo>
                    {donateInfoData.map((infoData, i) => {
                        return (
                            <InfoItem key={`donate-${i}`}>
                                <InfoItemTitle>
                                    {infoData.donateTitle}
                                </InfoItemTitle>
                                <Amount>{infoData.amount}</Amount>
                            </InfoItem>
                        );
                    })}
                </DonateInfo> */}
                {/* how to link <Link to={`/causes/${slug}`}>{title}</Link> */}
                <Title>
                    <Link to={``}>{title}</Link>
                </Title>
                <p>{dec}</p>
            </ContentBox>
        </CausesItemWrap>
    );
};

CausesItem.propTypes = {
    title: PropTypes.string,
    dec: PropTypes.string,
    adminName: PropTypes.string,
    image: PropTypes.object,
    donateInfo: PropTypes.array,
    adminImage: PropTypes.object,
    slug: PropTypes.string,
};

export default CausesItem;
