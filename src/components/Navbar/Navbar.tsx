import { useState } from "react"
import { NavbarContainer,HamburgerWrapper,Headline } from "./Navbar.styles"
import hamburger from "../../assets/icon-hamburger.svg"
import PlanetList from "../PlanetList/PlanetList"
import DesktopPlanetLinks from "../DesktopPlanetLinks/DesktopPlanetLinks"

const Navbar = () => {
    const [active, setActive] = useState(false)

    return(
        <>
        <NavbarContainer>
            <Headline>THE PLANETS</Headline>
            <HamburgerWrapper $activeMenu={active} onClick={() => setActive(!active)}>
<img src={hamburger} alt="menu icon" />
            </HamburgerWrapper>
            <DesktopPlanetLinks/>
        </NavbarContainer>
        {active && <PlanetList onClose={() => setActive(false)}/> }
        
        </>
    )
}

export default Navbar