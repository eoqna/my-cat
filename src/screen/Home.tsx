import styled from "styled-components";
import { NavigationProps } from "../navigation";
import { color } from "../utils/colors";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiChatOutline } from "@mdi/js";
import { cats } from "../costants";
import { useCallback, useState } from "react";
import useAppStore from "../store/useAppStore";
import { Types } from "../@types";

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

const PointerIcon = styled(Icon)`
  cursor: pointer;
`;

const LikeLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LikeButton = styled.button`
  border: none;
  background: ${color.White};
  padding: 0;
`;  

const Like = styled.p`
  color: ${color.Pink};
  font-size: 2.2vmin;
  margin-left: 2px;
`;

const ImgLayout = styled.div`
  overflow: hidden;
  margin-bottom: 4px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const CatLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 2px;
`;

const CatName = styled.p`
  padding: 8px 0;
  font-size: 2.6vmin;
  font-weight: bold;
  color: ${color.Black};
  margin-right: 4px;
`;

const Instagram = styled.a`
  padding: 8px 0;
  font-size: 2vmin;
  font-weight: bold;
  color: ${color.Gray};
  cursor: pointer;

  &:hover {
    color: ${color.Pink};
  }
`;

const Home = ({ navigation }: NavigationProps) => {
  const { openModal } = useAppStore();
  const [ liked, setLiked ] = useState(false);

  const open = useCallback((cat: Types.Cat) => {
    openModal({ 
      open: true, 
      type: "comment",
      title: cat.name, 
      img: cat.path,
      comments: cat.comment,
    });
  }, []);

  const onClickLike = useCallback((idx: number) => {

  }, []);
  
  return (
    <Layout>
      <GridLayout>
        {cats.map((cat) => (
          <CardLayout key={cat.idx}>
            <ImgLayout onClick={() => open(cat)}>
              <Img src={cat.path} alt={cat.name} />
            </ImgLayout>
            <IconLayout>
              <LikeLayout>
                <LikeButton onClick={() => onClickLike(cat.idx)}>
                  <PointerIcon path={mdiHeartOutline} size="2.2vmin" color={color.Pink} />
                </LikeButton>
                <Like>{cat.like}</Like>
              </LikeLayout>
              <LikeButton onClick={() => open(cat)}>
                <PointerIcon path={mdiChatOutline} size={1} color={color.Pink} />
              </LikeButton>
            </IconLayout>
            <CatLayout>
              <CatName>{cat.name}</CatName>
              <Instagram>{`@${cat.instagram}`}</Instagram>
            </CatLayout>
          </CardLayout>
        ))}
      </GridLayout>
    </Layout>
  );
};

export default Home;