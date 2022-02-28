import styled from "styled-components";

export const BookTopSellersStyled = styled.div`
  display: flex;
  align-items: wrap;
  flex-direction: row;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    height: 13vh;
    flex-grow: 1;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
