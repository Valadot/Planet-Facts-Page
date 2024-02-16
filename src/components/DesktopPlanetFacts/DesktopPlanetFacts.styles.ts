import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface PlanetFactLinkProps {
  $active: string;
  // $color: string;
}

export const DesktopPlanetFactsContainer = styled.div`
  padding: 1rem 2rem;
  display: none;
  font-family: "League Spartan", sans-serif;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (min-width: 1150px) {
    justify-content: flex-start;
    align-items: flex-end;
    /* margin-left: 30rem; */
  }
`;

export const PlanetFactLink = styled(NavLink)<PlanetFactLinkProps>`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.93px;
  border: 1px solid rgba(151, 151, 151, 0.3);
  font-size: 9px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1rem;
  width: 100%;

  background-color: ${(props) => props.$active};

  /* @media screen and (min-width: 1150px) {
    width: 100%;
  } */
  span {
    background-color: transparent;
  }

  &:hover {
    background-color: #38384f;
  }
`;
