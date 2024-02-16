import {
  MobilePlanetLinksContainer,
  PlanetFactLink,
} from "./MobilePlanetFacts.styles";
import { useParams } from "react-router-dom";

const MobilePlanetLinks = () => {
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
  console.log(planetColor);
  console.log(location.pathname === `/${planet}`);

  return (
    <MobilePlanetLinksContainer>
      <PlanetFactLink
        to={`/${planet}`}
        $active={
          location.pathname === `/${planet}` ? `3px solid ${planetColor}` : ""
        }
      >
        Overview
      </PlanetFactLink>
      <PlanetFactLink
        to={`/${planet}/structure`}
        $active={
          location.pathname === `/${planet}/structure`
            ? `3px solid ${planetColor}`
            : ""
        }
      >
        Structure
      </PlanetFactLink>
      <PlanetFactLink
        to={`/${planet}/surface`}
        $active={
          location.pathname === `/${planet}/surface`
            ? `3px solid ${planetColor}`
            : ""
        }
      >
        Surface
      </PlanetFactLink>
    </MobilePlanetLinksContainer>
  );
};

export default MobilePlanetLinks;
