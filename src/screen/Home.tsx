import styled from "styled-components";
import { NavigationProps } from "../navigation";

const Layout = styled.div`
  margin-left: 15%;
  margin-top: 8%;
  width: 85%;
  height: 92%;
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout></Layout>
  );
};

export default Home;