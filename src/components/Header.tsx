import styled from "styled-components";
import { color } from "../utils/colors";

const Layout = styled.header`
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  background: ${color.Pink};
  border: 0 solid ${color.Pink};
  padding: 0 16px;
  border-bottom-width: 1px;
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