import { PlanetListContainer,PlanetWrapper,Ball,Planet,Arrow } from "./PlanetList.styles"
import arrow from "../../assets/icon-chevron.svg"
import React from "react"

interface PlanetListProps {
    onClose: () => void;
  }



const PlanetList: React.FC<PlanetListProps> = ({onClose}) => {

    const planets:string[] = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

    const planetColors: { [key: string]: string} = {
        Mercury: "#DEF4FC",
        Venus: "#F7CC7F",
        Earth: "#545BFE",
        Mars: "#FF6A45",
        Jupiter: "#ECAD7A",
        Saturn: "#FCCB6B",
        Uranus: "#65F0D5",
        Neptune: "#497EFA"
    } 

    return(
        <PlanetListContainer>
{planets.map(planet => 
    <PlanetWrapper to={`/${planet}`} key={planet} onClick={() => onClose()}>
        <Ball color={planetColors[planet]}>
        </Ball>
        <Planet>{planet}</Planet>
        <Arrow>
            <img src={arrow} alt="arrow" />
        </Arrow>
        
    </PlanetWrapper>)}
        </PlanetListContainer>
    )
}

export default PlanetList