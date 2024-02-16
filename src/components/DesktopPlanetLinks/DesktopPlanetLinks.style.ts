import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface PlanetLinkProps {
  $active: string;
}

export const DesktopPlanetLinksContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  margin-top: 2rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1150px) {
    display: flex;
    gap: 2rem;
    margin-left: auto;
  }
`;

export const PlanetLink = styled(NavLink)<PlanetLinkProps>`
  color: white;
  text-decoration: none;
  font-family: "League Spartan", sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  border-bottom: ${(props) =>
    props.$active ? `3px solid ${props.$active}` : ""};
  padding-bottom: 1rem;
  margin-bottom: -1rem;
`;
