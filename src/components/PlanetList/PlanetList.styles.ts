import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface BallProps {
  color: string;
}

export const PlanetListContainer = styled.div`
  color: #ffffff;
  padding: 1rem 2rem;
`;

export const PlanetWrapper = styled(NavLink)`
  border-bottom: 1px solid rgba(151, 151, 151, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 0;
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1.36px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  &:last-child {
    border: none;
  }
`;

export const Ball = styled.div<BallProps>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

export const Planet = styled.div``;

export const Arrow = styled.div`
  margin-left: auto;
`;
