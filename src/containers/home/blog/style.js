import styled, { themeGet, device } from "@theme/utils";

export const SectionArea = styled.section`
    padding: 48px 0 2px;
    background-color: #f2efe5;
    ${device.small} {
        padding: 48px 0 0px;
    }
    ${device.medium} {
        padding: 88px 0 92px;
    }
    ${device.large} {
        padding: 88px 0 92px;
    }
    ${device.xlarge} {
        padding: 25px 0 120px;
    }
`;
