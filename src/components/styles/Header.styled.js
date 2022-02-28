import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 200px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 768px;
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  width: 450px;
  height: 200px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 768px;
    margin-bottom: 30px;
  }
`;
