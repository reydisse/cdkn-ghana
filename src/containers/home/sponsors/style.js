import styled, { themeGet, device } from "@theme/utils";
export const SectionArea = styled.section`
    background-color: #fefbf6;
    padding: 60px 15px 267px;
    ${device.medium} {
        padding: 38px 0 292px;
    }
    ${device.large} {
        padding: 88px 0 292px;
    }
    ${device.xlarge} {
        padding: 19px 0 339px;
    }
`;
export const BrandLogoContent = styled.div`
    margin: -30px -27px 0;
`;
