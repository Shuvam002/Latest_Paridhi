import { useState } from "react";
import {
  NavbarContainer,
  Logo,
  MenuBtn,
  NavList,
  NavItem,
  NavLinkName,
  StyledContainer,
  SubLogo,
  DropdownMenu,
  DropdownItem,
  NavLinkNameParent,
} from "./Navbar.styled";
import megalogo from "./static/megaLogo.png";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleEventsDropdown = () => {
    setShowEventsDropdown(!showEventsDropdown);
  };
  const closeEventsDropdown = () => {
    setShowEventsDropdown(false);
  };


  return (
    <StyledContainer>
      <NavbarContainer>
        <Logo to="/">
          <SubLogo src={megalogo} />
        </Logo>
        <MenuBtn onClick={handleClick}>
          {isClicked ? (
            <i className="ri-close-large-fill"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </MenuBtn>
        <NavList $clicked={isClicked}>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="profile"
              onClick={handleClick}
            >
              Profile
            </NavLinkName>
          </NavItem>
          <NavItem onMouseEnter={toggleEventsDropdown} onMouseLeave={closeEventsDropdown}>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
                borderBottom: isActive ? "#ff0000" : "",
              })}
              to="events"
              onClick={handleClick}
            >
              Events
            </NavLinkName>
            {showEventsDropdown && (
              <DropdownMenu>
                <DropdownItem>
                  <NavLinkNameParent  to="/events/coding">CODING</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/manual_robitics">MANUAL ROBOTICS</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/autonomous_robotics">AUTONOMOUS ROBOTICS</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/combat_robitics">COMBAT</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/civil">CIVIL</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/electrical">ELECTRICAL</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/gaming">GAMING</NavLinkNameParent>
                </DropdownItem>
                <DropdownItem>
                  <NavLinkNameParent to="/events/general">GENERAL</NavLinkNameParent>
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="workshop"
              onClick={handleClick}
            >
              Workshop
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="pre_paredhi_events"
              onClick={handleClick}
            >
              Pre-Paridhi Events
            </NavLinkName>
          </NavItem>
          {/* <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="sponsors"
              onClick={handleClick}
            >
              Sponsors
            </NavLinkName>
          </NavItem> */}
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="merchandise"
              onClick={handleClick}
            >
              Merchandise
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: isActive ? "4px 4px 5px #ff0000" : "",
                color: isActive ? "#ff0000" : "",
              })}
              to="our_team"
              onClick={handleClick}
            >
              Our Team
            </NavLinkName>
          </NavItem>
          <NavItem>
            <NavLinkName
              style={({ isActive }) => ({
                textShadow: "4px 4px 5px #ff0000",
                color: "#ff0000",
              })}
              to="sign_up"
              onClick={handleClick}
            >
              Register
            </NavLinkName>
          </NavItem>
        </NavList>
      </NavbarContainer>
    </StyledContainer>
  );
};

export default Navbar;