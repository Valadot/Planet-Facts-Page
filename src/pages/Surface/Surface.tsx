import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import MobilePlanetLinks from "../../components/MobilePlanetFacts/MobilePlanetFacts";
import {
  SurfaceContainer,
  PlanetDetails,
  PlanetImageWrapper,
  PlanetDescription,
  Source,
  PlanetFigures,
  Figure,
  SurfaceImage,
  PlanetFactsLinks,
  DetailsWrapper,
} from "./Surface.styles";
import DesktopPlanetFacts from "../../components/DesktopPlanetFacts/DesktopPlanetFacts";
import mercurySurface from "../../assets/geology-mercury.png";
import earthSurface from "../../assets/geology-earth.png";
import venusSurface from "../../assets/geology-venus.png";
import marsSurface from "../../assets/geology-mars.png";
import jupiterSurface from "../../assets/geology-jupiter.png";
import saturnSurface from "../../assets/geology-saturn.png";
import uranusSurface from "../../assets/geology-uranus.png";
import neptuneSurface from "../../assets/geology-neptune.png";
import earthImg from "../../assets/planet-earth.svg";
import mercuryImg from "../../assets/planet-mercury.svg";
import venusImg from "../../assets/planet-venus.svg";
import marsImg from "../../assets/planet-mars.svg";
import jupiterImg from "../../assets/planet-jupiter.svg";
import saturnImg from "../../assets/planet-saturn.svg";
import uranusImg from "../../assets/planet-uranus.svg";
import neptuneImg from "../../assets/planet-neptune.svg";

const Surface = () => {
  interface Planet {
    name: string;
    color: string;
    image: string;
    surface: string;
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
          surface: earthSurface,
          description:
            "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
          rotationTime: "0.99 DAYS",
          revolutionTime: "365.26 DAYS",
          radius: "6,371 KM",
          averageTemp: "16°C",
        },
        {
          name: "Mercury",
          color: "blue",
          image: mercuryImg,
          surface: mercurySurface,
          description:
            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
          rotationTime: "58.6 DAYS",
          revolutionTime: "87.97 DAYS",
          radius: "2,439.7 KM",
          averageTemp: "430°C",
        },
        {
          name: "Venus",
          color: "blue",
          image: venusImg,
          surface: venusSurface,
          description:
            "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
          rotationTime: "243 DAYS",
          revolutionTime: "224.7 DAYS",
          radius: "6.051.8 KM",
          averageTemp: "471°C",
        },
        {
          name: "Mars",
          color: "blue",
          image: marsImg,
          surface: marsSurface,
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
          surface: jupiterSurface,
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
          surface: saturnSurface,
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
          surface: uranusSurface,
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
          surface: neptuneSurface,
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
    <SurfaceContainer>
      <Navbar />
      <MobilePlanetLinks />
      <PlanetDetails>
        <DetailsWrapper>
          <PlanetImageWrapper>
            <img src={selectedPlanet?.image} alt="" />
            <SurfaceImage src={selectedPlanet?.surface} />
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
    </SurfaceContainer>
  );
};

export default Surface;
