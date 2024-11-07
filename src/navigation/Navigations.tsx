import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { color } from "../utils/colors";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const ContentLayout = styled.div`
  display: flex;
  height: 92%;
  flex-direction: row;
`;

const HomeLayout = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  background: ${color.LightPink};
  padding: 30px;
  overflow-y: auto;

  &::-webkit-scrollbar {
	  width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${color.LightPink};
  }
  &::-webkit-scrollbar-thumb { 
    background-color: ${color.Pink};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <Header navigation={navigation} />
      <ContentLayout>
        {/* <Sidebar /> */}
        <HomeLayout>
          <Routes>
            <Route index element={<Home navigation={navigation} />} />
          </Routes>
        </HomeLayout>
      </ContentLayout>
    </Layout>
  );
};

export default Navigations;