import styled, { device } from "@theme/utils";

export const BlogDetailsArea = styled.section`
    padding: 70px 0 280px;
    ${device.medium} {
        padding: 100px 0 300px;
    }
    ${device.large} {
        padding: 120px 0 300px;
    }
    ${device.xlarge} {
        padding: 150px 0 390px;
    }
`;

export const BlogPostContentArea = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
`;
