import styled from "styled-components";
import { color } from "../utils/colors";

const Layout = styled.header`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 8%;
  width: calc(100% - 32px);
  background: ${color.Pink};
  border: 0 solid ${color.Pink};
  padding: 0 16px;
  border-bottom-width: 1px;
  align-items: center;
  z-index: 1001;
`;

const LogoText = styled.p`
  font-size: 5vmin;
  font-weight: bold;
  color: ${color.White};
`;

const Header = () => {
  return (
    <Layout>
      <LogoText>My Cat</LogoText>
    </Layout>
  );
};

export default Header;