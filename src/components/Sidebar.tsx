import styled from "styled-components";
import { color } from "../utils/colors";

const Layout = styled.div`
  height: 100%;
  width: 15%;
  background: ${color.Pink};
  border: 0 solid ${color.Pink};
  border-right-width: 1px;
`;

const MenuLayout = styled.ul`
  height: 100%;
`;

const Menu = styled.li`
  list-style: none;
`;

const Sidebar = () => {
  return (
    <Layout>
      <MenuLayout>
        <Menu></Menu>
      </MenuLayout>
    </Layout>
  );
};

export default Sidebar;