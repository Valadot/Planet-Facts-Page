import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router";
import {
  OverviewContainer,
  PlanetImageWrapper,
  PlanetDetails,
  PlanetDescription,
  Source,
  PlanetFigures,
  Figure,
  PlanetFactsLinks,
  DetailsWrapper,
} from "./Overview.styles";
import MobilePlanetLinks from "../../components/MobilePlanetFacts/MobilePlanetFacts";
import DesktopPlanetFacts from "../../components/DesktopPlanetFacts/DesktopPlanetFacts";
import earthImg from "../../assets/planet-earth.svg";
import mercuryImg from "../../assets/planet-mercury.svg";
import venusImg from "../../assets/planet-venus.svg";
import marsImg from "../../assets/planet-mars.svg";
import jupiterImg from "../../assets/planet-jupiter.svg";
import saturnImg from "../../assets/planet-saturn.svg";
import uranusImg from "../../assets/planet-uranus.svg";
import neptuneImg from "../../assets/planet-neptune.svg";

const Overview = () => {
  interface Planet {
    name: string;
    color: string;
    image: string;
    description: string;
    rotationTime: string;
    revolutionTime: string;
    radius: string;
    averageTemp: string;
  }

  const { planet } = useParams();

  const planetDetails: Planet[] = planet
    ? [
        {
          name: "Earth",
          color: "red",
          image: earthImg,
          description:
            "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
          rotationTime: "0.99 DAYS",
          revolutionTime: "365.26 DAYS",
          radius: "6,371 KM",
          averageTemp: "16°C",
        },
        {
          name: "Mercury",
          color: "blue",
          image: mercuryImg,
          description:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
          rotationTime: "58.6 DAYS",
          revolutionTime: "87.97 DAYS",
          radius: "2,439.7 KM",
          averageTemp: "430°C",
        },
        {
          name: "Venus",
          color: "blue",
          image: venusImg,
          description:
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
          rotationTime: "243 DAYS",
          revolutionTime: "224.7 DAYS",
          radius: "6.051.8 KM",
          averageTemp: "471°C",
        },
        {
          name: "Mars",
          color: "blue",
          image: marsImg,
          description:
            "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
          rotationTime: "1.03 DAYS",
          revolutionTime: "1.88 YEARS",
          radius: "3,389.5 KM",
          averageTemp: "-28°C",
        },
        {
          name: "Jupiter",
          color: "blue",
          image: jupiterImg,
          description:
            "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
          rotationTime: "9.93 HOURS",
          revolutionTime: "11.86 YEARS",
          radius: "69,911 KM",
          averageTemp: "-108°C",
        },
        {
          name: "Saturn",
          color: "blue",
          image: saturnImg,
          description:
            "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
          rotationTime: "10.8 HOURS",
          revolutionTime: "29.46 YEARS",
          radius: "58,232 KM",
          averageTemp: "-138°C",
        },
        {
          name: "Uranus",
          color: "blue",
          image: uranusImg,
          description:
            "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
          rotationTime: "17.2 HOURS",
          revolutionTime: "84 YEARS",
          radius: "25,362 KM",
          averageTemp: "-195°C",
        },
        {
          name: "Neptune",
          color: "blue",
          image: neptuneImg,
          description:
            "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
          rotationTime: "16.08 HOURS",
          revolutionTime: "164.79 YEARS",
          radius: "24,622 KM",
          averageTemp: "-201°C",
        },
      ]
    : [];

  const selectedPlanet = planetDetails.find((p) => p.name === planet);

  return (
    <OverviewContainer>
      <Navbar />
      <MobilePlanetLinks />
      <PlanetDetails>
        <DetailsWrapper>
          <PlanetImageWrapper>
            <img src={selectedPlanet?.image} alt="" />
          </PlanetImageWrapper>
          <PlanetDescription>
            <div>
              <h3>{planet}</h3>
              <p>{selectedPlanet?.description}</p>
              <Source>
                Source:
                <a
                  href={`https://wikipedia.org/wiki/${planet}`}
                  target="_blank"
                >
                  Wikipedia
                </a>
              </Source>
            </div>
            <PlanetFactsLinks>
              <DesktopPlanetFacts />
            </PlanetFactsLinks>
          </PlanetDescription>
        </DetailsWrapper>
        <PlanetFigures>
          <Figure>
            <div>
              <p>ROTATION TIME</p>
            </div>
            <div>
              <h3>{selectedPlanet?.rotationTime}</h3>
            </div>
          </Figure>
          <Figure>
            <div>
              <p>REVOLUTION TIME</p>
            </div>
            <div>
              <h3>{selectedPlanet?.revolutionTime}</h3>
            </div>
          </Figure>
          <Figure>
            <div>
              <p>RADIUS</p>
            </div>
            <div>
              <h3>{selectedPlanet?.radius}</h3>
            </div>
          </Figure>
          <Figure>
            <div>
              <p>AVERAGE TEMP.</p>
            </div>
            <div>
              <h3>{selectedPlanet?.averageTemp}</h3>
            </div>
          </Figure>
        </PlanetFigures>
      </PlanetDetails>
    </OverviewContainer>
  );
};

export default Overview;
