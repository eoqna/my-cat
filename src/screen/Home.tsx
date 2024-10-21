import styled from "styled-components";
import { NavigationProps } from "../navigation";
import { color } from "../utils/colors";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiChatOutline } from "@mdi/js";
import { cats } from "../costants";

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
  border: 1px solid ${color.Black};
  background: ${color.White};
  padding: 10px 10px 20px 10px;
`;

const IconLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgLayout = styled.div`
  overflow: hidden;
  margin-bottom: 4px;
`;

const Img = styled.img`
  width: 100%;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const CatName = styled.p`
  padding: 8px 0;
  font-size: 2.6vmin;
  font-weight: bold;
  color: ${color.Black};
`;

const Instagram = styled.a`
  padding: 8px 0;
  font-size: 2vmin;
  font-weight: bold;
  color: ${color.Gray};
  cursor: pointer;
`;

const Home = (props: NavigationProps) => {
  const { navigation } = props;
  
  return (
    <Layout>
      <GridLayout>
        {cats.map((cat) => (
          <CardLayout>
            <ImgLayout>
              <Img src={cat.path} alt={cat.name} />
            </ImgLayout>
            <IconLayout>
              <Icon path={mdiHeartOutline} size={1} color={color.Pink} />
              <Icon path={mdiChatOutline} size={1} color={color.Pink} />
            </IconLayout>
            <CatName>{cat.name}</CatName>
            <Instagram>{`@${cat.instagram}`}</Instagram>
          </CardLayout>
        ))}
      </GridLayout>
    </Layout>
  );
};

export default Home;