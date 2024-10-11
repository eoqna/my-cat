import styled from "styled-components";
import { NavigationProps } from "../navigation";
import { color } from "../utils/colors";

const Layout = styled.div`
  height: 100%;
  width: 85%;
  background: ${color.LightPink};
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout></Layout>
  );
};

export default Home;