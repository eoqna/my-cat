import styled from "styled-components";
import { color } from "../utils/colors";

const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 15%;
  background: ${color.Pink};
  border: 0 solid ${color.Pink};
  border-right-width: 1px;
  z-index: 1000;
`;

const MenuLayout = styled.ul`
  margin-top: 6%;
  height: 97%;
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