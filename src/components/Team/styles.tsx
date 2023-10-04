import styled from "styled-components";

export const TeamContainer = styled("div")`
  margin-top: 1.5rem;
  text-align: center;
  margin: 24px;
`;

export const TeamMembers = styled("div")`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5em;
`;

export const TeamMember = styled("div")`
    width: 250px;
    margin: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
`;

export const TeamMemberImage = styled("img")`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const MemberName = styled("h4")`
    font-size: 20px;
`;
