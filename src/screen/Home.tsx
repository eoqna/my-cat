import styled from "styled-components";
import { NavigationProps } from "../navigation";

const Layout = styled.div`
  height: 100%;
  width: 85%;
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout></Layout>
  );
};

export default Home;