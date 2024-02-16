import styled from "styled-components";

interface HamburgerProps {
  $activeMenu: boolean;
}

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(151, 151, 151, 0.3);
  padding: 1rem 2rem;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: center;
  }

  @media screen and (min-width: 1150px) {
    display: flex;
    justify-content: start;
  }
`;

export const Headline = styled.div`
  color: #ffffff;
  font-family: "Antonio", sans-serif;
  font-size: 28px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 1150px) {
    margin: 0;
  }
`;

export const HamburgerWrapper = styled.div<HamburgerProps>`
  cursor: pointer;
  opacity: ${(props) => (props.$activeMenu ? 0.3 : 1)};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
