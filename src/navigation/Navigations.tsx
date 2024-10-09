import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

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

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <Header />
      <ContentLayout>
        <Sidebar />
        <Routes>
          <Route index element={<Home navigation={navigation} />} />
        </Routes>
      </ContentLayout>
    </Layout>
  );
};

export default Navigations;