import { useParams } from "react-router-dom";
import {
  DesktopPlanetFactsContainer,
  PlanetFactLink,
} from "./DesktopPlanetFacts.styles";

const DesktopPlanetFacts = () => {
  const { planet } = useParams();

  const planetColors: { [key: string]: string } = {
    Mercury: "#419EBB",
    Venus: "#EDA249",
    Earth: "#6D2ED5",
    Mars: "#D14C32",
    Jupiter: "#D83A34",
    Saturn: "#CD5120",
    Uranus: "#1EC1A2",
    Neptune: "#2D68F0",
  };

  const planetColor = planet ? planetColors[planet] : "";
  return (
    <DesktopPlanetFactsContainer>
      <PlanetFactLink
        to={`/${planet}`}
        $active={location.pathname === `/${planet}` ? planetColor : ""}
      >
        <span>01</span> Overview
      </PlanetFactLink>
      <PlanetFactLink
        to={`/${planet}/structure`}
        $active={
          location.pathname === `/${planet}/structure` ? planetColor : ""
        }
      >
        <span>02</span> Structure
      </PlanetFactLink>
      <PlanetFactLink
        to={`/${planet}/surface`}
        $active={location.pathname === `/${planet}/surface` ? planetColor : ""}
      >
        <span>03</span> Surface
      </PlanetFactLink>
    </DesktopPlanetFactsContainer>
  );
};

export default DesktopPlanetFacts;
