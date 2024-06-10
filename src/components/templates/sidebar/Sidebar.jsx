import styled from "styled-components";
import { navItems } from "../../../configs/nav-configs/nav-items";
import { navIcons } from "../../../configs/nav-configs/navIcons-configs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import { useState } from "react";

const SidebarContainer = styled.div`
  width: ${(props) => (props.toggle ? '150px' : '250px')};
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: width 0.3s ease;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  font-size: 18px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #e9ecef;
    border-radius: 5px;
  }
`;

const IconWrapper = styled.div`
  margin-right: ${(props) => (props.toggle ? '0' : '10px')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:'bold';
`;

const Label = styled.span`
  display: ${(props) => (props.toggle ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  gap:30px;
`;

const Sidebar = () => {
  const [toggle, setToggle] = useState();
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
     
      <SidebarContainer toggle={toggle}>
      <div onClick={handleClick} className="flex">
        {toggle ? <FaCaretRight className="text-3xl" /> : <FaCaretLeft className="text-3xl" />}
        <h1 className="text-center text-3xl text-blue-600 font-bold my-[-10px]">Vdoit</h1>
      </div>
      
     
        <Scrollbars>
          {navItems.map((item) => (
            <NavLink to={item.path} key={item.key}>
              <NavItem>
                <IconWrapper toggle={toggle} >{navIcons[item.key]}</IconWrapper>
                <Label toggle={toggle}>{item.label}</Label>
              </NavItem>
            </NavLink>
          ))}
        </Scrollbars>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
