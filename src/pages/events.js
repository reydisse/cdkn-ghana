/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import DonateArea from "../containers/donate";

const DonatePages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Events and Opportunities" pathname="/events" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Events and Opportunities"
            />
            <DonateArea />
        </Layout>
    );
};

DonatePages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default DonatePages;
