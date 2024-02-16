import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface PlanetFactLinkProps {
  $active: string;
}

export const MobilePlanetLinksContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(151, 151, 151, 0.3);
  font-family: "League Spartan", sans-serif;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const PlanetFactLink = styled(NavLink)<PlanetFactLinkProps>`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.93px;
  font-size: 9px;
  font-weight: bold;
  border-bottom: ${(props) => props.$active};
  padding-bottom: 1rem;
  margin-bottom: -1rem;
`;
