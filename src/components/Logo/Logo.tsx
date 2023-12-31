import { styled } from "styled-components";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  
  return (
    <LogoWrapper to="/" state={location.state}>
      <img src={logo} alt="pavoce logo" />
      <span>Pavoce</span>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #050d2a;
`;
