import styled, { themeGet, device } from "@theme/utils";
export const ContactFormArea = styled.div`
    padding: 65px 30px 70px;
    margin-bottom: 90px;
    background-color: #f7f7f7;
    width: 100%;
    ${device.medium} {
        padding: 95px 25px 100px;
    }
    ${device.large} {
        max-width: none;
        min-width: auto;
        padding: 95px 65px 100px 85px;
        width: 100%;
    }
    ${device.xlarge} {
        max-width: 550px;
        min-width: 550px;
        padding: 145px 65px 151px 85px;
        margin-bottom: 0px;
    }

    ${device.xxxlarge} {
        max-width: 662px;
        min-width: 662px;
        padding: 145px 100px 151px 132px;
    }
`;

export const Form = styled.form``;
export const SectionTitle = styled.form`
    margin-bottom: 54px;
`;
export const Subtitle = styled.h5`
    color: #fc6539;
    display: inline-block;
    font-family: "Myriad pro", sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 12px;
    padding-left: 64px;
    position: relative;
    &:after {
        background-color: #fc6539;
        content: "";
        height: 3px;
        left: 0;
        position: absolute;
        top: calc(50% - 1.5px);
        width: 43px;
    }
`;
export const Title = styled.h2`
    margin-bottom: 16px;
`;
export const SectionDec = styled.p``;
export const FormGroup = styled.div`
    margin-bottom: 20px;
`;
export const Input = styled.input`
    background-color: transparent;
    border: 2px solid #d7d7d7;
    border-radius: 0;
    color: #001d23;
    font-size: 15px;
    height: 55px;
    padding: 14px 20px;
`;
export const Textarea = styled.textarea`
    background-color: transparent;
    border: 2px solid #d7d7d7;
    border-radius: 0;
    color: #001d23;
    font-size: 15px;
    height: 55px;
    padding: 14px 20px;
    min-height: 215px;
`;
