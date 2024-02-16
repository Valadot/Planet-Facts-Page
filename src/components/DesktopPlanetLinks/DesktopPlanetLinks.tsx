import {
  DesktopPlanetLinksContainer,
  PlanetLink,
} from "./DesktopPlanetLinks.style";
import { useParams } from "react-router-dom";

const DesktopPlanetLinks = () => {
  const { planet } = useParams();

  const planets: string[] = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

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
    <DesktopPlanetLinksContainer>
      {planets.map((planet) => (
        <PlanetLink
          to={`/${planet}`}
          key={planet}
          $active={location.pathname.includes(planet) ? `${planetColor}` : ""}
        >
          {planet}
        </PlanetLink>
      ))}
    </DesktopPlanetLinksContainer>
  );
};

export default DesktopPlanetLinks;
