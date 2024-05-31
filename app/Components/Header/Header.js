import React from 'react';
import styled from "styled-components";

const Header = (props) => {
  const { showNavItems } = props;

  return (
    <HeaderNew className="header_container flex w-full">
      <AppLogo className="app-logo">Ninjofy</AppLogo>
      {
        showNavItems &&
        <NavBarMenu className="navBarMenu">
          <NavMenuItems className="navBarMenu_items">Computers</NavMenuItems>
          <NavMenuItems className="navBarMenu_items">Printers</NavMenuItems>
          <NavMenuItems className="navBarMenu_items">WiFi & Networking</NavMenuItems>
          <NavMenuItems className="navBarMenu_items">Mobiles & Tablets</NavMenuItems>
          <NavMenuItems className="navBarMenu_items">TV Mounting</NavMenuItems>
        </NavBarMenu>
      }
      <UserLogin>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M9.94465 12.0526C12.452 12.0526 14.7323 12.7831 16.4098 13.8126C17.247 14.3263 17.9627 14.9326 18.4797 15.5915C18.9883 16.2389 19.3629 17.0136 19.3629 17.8421C19.3629 18.7315 18.9328 19.4326 18.3133 19.9326C17.7273 20.4063 16.9539 20.7199 16.1325 20.9389C14.4811 21.3778 12.2772 21.5263 9.94465 21.5263C7.61206 21.5263 5.40818 21.3789 3.75684 20.9389C2.93535 20.7199 2.16201 20.4063 1.57598 19.9326C0.955422 19.4315 0.526367 18.7315 0.526367 17.8421C0.526367 17.0136 0.901006 16.2389 1.40959 15.5905C1.92655 14.9326 2.64129 14.3273 3.47952 13.8115C5.15702 12.7842 7.43834 12.0526 9.94465 12.0526ZM9.94465 0.473633C11.3324 0.473633 12.6632 1.02814 13.6445 2.01518C14.6258 3.00221 15.177 4.34091 15.177 5.73679C15.177 7.13267 14.6258 8.47137 13.6445 9.45841C12.6632 10.4454 11.3324 10.9999 9.94465 10.9999C8.55694 10.9999 7.22606 10.4454 6.2448 9.45841C5.26354 8.47137 4.71227 7.13267 4.71227 5.73679C4.71227 4.34091 5.26354 3.00221 6.2448 2.01518C7.22606 1.02814 8.55694 0.473633 9.94465 0.473633Z" fill="#444444" />
        </svg></div>
      </UserLogin>
    </HeaderNew>
  );
}

const HeaderNew = styled.div`
    background-color: white;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`

const AppLogo = styled.div`
    font-size: 40px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #444444;
`

const NavBarMenu = styled.div`
  height: 28px;
  gap: 35px;
`;

const NavMenuItems = styled.div`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: #444444;
`

const UserLogin = styled.div`
  height:40px;
  width: 40px;
  border: 2px solid #444444;
  background-color: #E8E8E8;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 20px;
  width: 20px;
  color: #444444;
`

export default Header;
