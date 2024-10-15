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
  grid-gap: 30px;
`;

const ImgLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  font-size: 3vmin;
  font-weight: bold;
  color: ${color.White};
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout>
      <GridLayout>
        <ImgLayout>
          <Image src={img1} alt="cat1" />
          <Title>cat 1</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat2" />
          <Title>cat 2</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat3" />
          <Title>cat 3</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat4" />
          <Title>cat 4</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
        <ImgLayout>
          <Image src={img1} alt="cat5" />
          <Title>cat 5</Title>
        </ImgLayout>
      </GridLayout>
    </Layout>
  );
};

export default Home;