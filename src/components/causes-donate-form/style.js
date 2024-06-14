import styled, { themeGet, device } from "@theme/utils";

//  Donation Form Style

export const DonateFormContainer = styled.div`
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    width: 100%;
`;

export const Title = styled.h1`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

export const EventList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const EventItem = styled.li`
    margin: 10px 0;
    padding: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

export const EventLink = styled.a`
    display: block;
    text-decoration: none;
    color: #0073e6;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
        color: #005bb5;
    }
`;
export const EventDate = styled.p`
    font-style: italic;
    color: #666;
    margin: 5px 0 0 0;
`;
