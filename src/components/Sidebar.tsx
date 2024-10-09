import styled from "styled-components";
import { color } from "../utils/colors";

const Layout = styled.div`
  height: 100%;
  width: 15%;
  background: ${color.LightPink};
  border: 0 solid ${color.LightPink};
  border-right-width: 1px;
  z-index: 1000;
`;

const MenuLayout = styled.ul`
  height: 100%;
`;

const Sidebar = () => {
  return (
    <Layout>
      <MenuLayout>

      </MenuLayout>
    </Layout>
  );
};

export default Sidebar;