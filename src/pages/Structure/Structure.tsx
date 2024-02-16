import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {
  StructureContainer,
  PlanetDetails,
  PlanetImageWrapper,
  PlanetDescription,
  Source,
  PlanetFigures,
  Figure,
  PlanetFactsLinks,
  DetailsWrapper,
} from "./Structure.styles";
import DesktopPlanetFacts from "../../components/DesktopPlanetFacts/DesktopPlanetFacts";
import MobilePlanetLinks from "../../components/MobilePlanetFacts/MobilePlanetFacts";
import earthImg from "../../assets/planet-earth-internal.svg";
import mercuryImg from "../../assets/planet-mercury-internal.svg";
import venusImg from "../../assets/planet-venus-internal.svg";
import marsImg from "../../assets/planet-mars-internal.svg";
import jupiterImg from "../../assets/planet-jupiter-internal.svg";
import saturnImg from "../../assets/planet-saturn-internal.svg";
import uranusImg from "../../assets/planet-uranus-internal.svg";
import neptuneImg from "../../assets/planet-neptune-internal.svg";

const Structure = () => {
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
            "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
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
            "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
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
            "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
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
            "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
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
            "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
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
            "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
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
            "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
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
            "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
          rotationTime: "16.08 HOURS",
          revolutionTime: "164.79 YEARS",
          radius: "24,622 KM",
          averageTemp: "-201°C",
        },
      ]
    : [];

  const selectedPlanet = planetDetails.find((p) => p.name === planet);

  return (
    <StructureContainer>
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
    </StructureContainer>
  );
};

export default Structure;
