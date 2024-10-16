import styled from "styled-components";
import { NavigationProps } from "../navigation";
import { color } from "../utils/colors";
import img1 from "../assets/imgs/cat1.png";

const Layout = styled.div`
  height: 100%;
  width: 100%;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${color.Black};
  background: ${color.White};
  padding: 10px 10px 20px 10px;
`;

const ImgLayout = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const UserName = styled.p`
  font-size: 3vmin;
  font-weight: bold;
  color: ${color.Black};
`;

const Title = styled.p`
  font-size: 3vmin;
  font-weight: bold;
  color: ${color.Black};
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout>
      <GridLayout>
        <CardLayout>
          <ImgLayout>
            <Img src={img1} alt="cat1" />
          </ImgLayout>
          <UserName>ㅇㅇ님의 고양이</UserName>
          <Title>cat 1</Title>
        </CardLayout>
        <CardLayout>
          <ImgLayout>
            <Img src={img1} alt="cat2" />
          </ImgLayout>
          <UserName>ㅇㅇ님의 고양이</UserName>
          <Title>cat 2</Title>
        </CardLayout>
        <CardLayout>
          <ImgLayout>
            <Img src={img1} alt="cat3" />
          </ImgLayout>
          <UserName>ㅇㅇ님의 고양이</UserName>
          <Title>cat 3</Title>
        </CardLayout>
        <CardLayout>
          <ImgLayout>
            <Img src={img1} alt="cat4" />
          </ImgLayout>
          <UserName>ㅇㅇ님의 고양이</UserName>
          <Title>cat 4</Title>
        </CardLayout>
      </GridLayout>
    </Layout>
  );
};

export default Home;