import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import Sidebar from "../components/Sidebar";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <Sidebar />
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
      </Routes>
    </Layout>
  );
};

export default Navigations;