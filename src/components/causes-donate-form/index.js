/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import {
    DonateFormContainer,
    EventList,
    EventItem,
    Title,
    EventLink,
    EventDate,
    DonateAmount,
    PaymentMethodWrap,
    PaymentTitle,
    PaymentMethod,
    PaymentType,
    FormCheckBox,
    PaymentPersonalInfo,
    PersonalInfoTitle,
    FormGroup,
    ButtonWrap,
    LayerStyle,
} from "./style";

const events = [
    {
        title: "Climate Change, Biodiversity Loss and Pollution: Promoting Synergy Approaches to Adress the Three Environmental Crises",
        url: "https://unu.edu/ias/event/climate-change-biodiversity-loss-and-pollution-promoting-synergy-approaches-address-three",
        date: "6th March 2024",
    },
    {
        title: "9th Investment Treaty Conference - Supporting the global energy transition",
        url: "https://www.oecd-events.org/investment-treaty-conference",
        date: "11th March 2024",
    },
    {
        title: "International Conference on Soil, Water, Air, Energy, Ecology and Environment (ICSWAEEE-24)",
        url: "https://isit.org.in/event/index.php?id=2229872",
        date: "15th - 16th March 2024",
    },
    {
        title: "The Risks of Climate Change for the Home Garden: A Risk Management Approach",
        url: "https://www.eventbrite.com/e/the-risks-of-climate-change-for-the-home-garden-a-risk-management-approach-tickets-806005874267?aff=eprofsaved&keep_tld=1",
        date: "19th March  2024 -  20th March 2024",
    },
    {
        title: "WREN Symposium 2024 - Collaborating towards the Sustainable Development Goals",
        url: "https://www.eventbrite.com/e/wren-symposium-collaborating-towards-the-sustainable-development-goals-tickets-813560109187?aff=eprofsaved&keep_tld=1",
        date: "20th & 22nd March, 2024",
    },
    {
        title: "1st International Conference on Environment, Social, Governance and Sustainable Development of Africa (ICESDA -2024)",
        url: "https://www.csrconferenceafrica.com/icesda-2024/",
        date: "26th - 29th March 2024",
    },
    {
        title: "International Conference on Climate Change and European Law (ICCCEL -24)",
        url: "https://after.org.in/event/index.php?id=2238406",
        date: "28th - 29th March 2024",
    },
    {
        title: "Ecosystem-based Climate Change Adaptation and Disaster Risk Reduction",
        url: "https://www.eventbrite.com/e/ecosystem-based-climate-change-adaptation-and-disaster-risk-reduction-tickets-767930830787?aff=eprofsaved&keep_tld=1",
        date: "Tuesday, 9 April 2024",
    },
    {
        title: "Climate Change & Disaster Risk Reduction-South Asia (Online Training)",
        url: "https://www.eventbrite.com/e/climate-change-disaster-risk-reduction-south-asia-online-training-tickets-765812033407?aff=eprofsaved&keep_tld=1",
        date: "15th April 2024 - 24th May 2024",
    },
    {
        title: "Locally-led and Community-based Climate Change Adaptation Strategies",
        url: "https://www.eventbrite.com/e/locally-led-and-community-based-climate-change-adaptation-strategies-tickets-767946969057?aff=eprofsaved&keep_tld=1",
        date: "17th April 2024",
    },
    {
        title: "Tenth Session of the Africa Regional Forum on Sustainable Development",
        url: "https://www.uneca.org/eca-events/arfsd2024",
        date: "23rd April 2024 - 25th April 2024",
    },
    {
        title: "Out of Ice: the History of Frozen Mammoths and the Future of Climate Change",
        url: "https://www.eventbrite.com/e/out-of-ice-the-history-of-frozen-mammoths-and-the-future-of-climate-change-tickets-768894974567?aff=eprofsaved&keep_tld=1",
        date: "29th April 2024",
    },
    {
        title: "International Conference on Environmental Physics and Climate Change (ICEPCC-24)",
        url: "https://isar.org.in/event/index.php?id=2356078",
        date: "29th April 2024 - 30th April 2024",
    },
    {
        title: "Campaign for Nature - a Full Day/Live Program",
        url: "https://www.eventbrite.com/e/climate-change-is-already-here-the-problem-its-impacts-how-we-solve-it-tickets-772297170627?aff=eprofsaved",
        date: "1st May 2024",
    },
    {
        title: "Designing Sustainable Services",
        url: "https://www.eventbrite.com/e/designing-sustainable-services-430-vat-tickets-793280602637?aff=eprofsaved&keep_tld=1",
        date: "18th June 2024",
    },
    {
        title: "International Conference on Renewable Energy System Design and Applications - (ICRESDA-24)",
        url: "https://www.iarfconference.com/conf/index.php?id=2327208",
        date: "19th June 2024 - 20th June 2024",
    },
    {
        title: "Who shoulders the risk of climate change in the world of changing climate?",
        url: "https://www.eventbrite.com/e/who-shoulders-the-risk-of-climate-change-in-the-world-of-changing-climate-tickets-777724804827?aff=eprofsaved&keep_tld=1",
        date: "27th June 2024",
    },
    {
        title: "International Conference on Environmental Quality (ICEQ - 24)",
        url: "https://www.iierd.org/events/index.php?id=2389757",
        date: "11th July 2024 - 12th July 2024",
    },
    {
        title: "Climate Change Symposium",
        url: "https://www.eventbrite.com/e/climate-change-symposium-tickets-761499594787?aff=eprofsaved",
        date: "5th September 2024",
    },
    {
        title: "Transforming Research into Media Narratives; A Guide for Students",
        url: "https://linktr.ee/cdknghana",
        date: "19th March 2024",
    },
    {
        title: "Sustainability LIVE London – 2024",
        url: "https://sustainability-live.com/sustainability-live-2024/",
        date: "10th September 2024 - 11th September 2024",
    },
    // Add more events as needed
];

const CausesDonateForm = () => {
    return (
        <DonateFormContainer>
            <Title>Events and Opportunities</Title>
            <EventList>
                {events.map((event, index) => (
                    <EventItem key={index}>
                        <EventLink
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {event.title}
                        </EventLink>
                        <EventDate>{event.date}</EventDate>
                    </EventItem>
                ))}
            </EventList>
        </DonateFormContainer>
    );
};

export default CausesDonateForm;
