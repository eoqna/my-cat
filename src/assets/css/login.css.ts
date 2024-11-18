import styled from "styled-components";
import { color } from "../../utils/colors";

export const ModalLayout = styled.div`
  width: 25%;
  background: ${color.Pink};
  position: relative;
  padding: 30px;
  z-index: 1001;
  cursor: default;
  border: 1px solid ${color.Pink};
  border-radius: 10px;
`;

export const TitleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.p`
  color: ${color.White};
  font-size: 4vmin;
  font-weight: bold;
`;

export const InputLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ $margin?: boolean }>`
  padding: 6px 8px;
  font-size: 2vmin;
  color: ${color.White};
  background: ${color.LightPink};
  border: 1px solid ${color.LightPink};
  border-radius: 4px;
  outline: none;
  margin-bottom: ${({ $margin }) => $margin ? "24px" : "8px"};
  &::placeholder {
    color: ${color.White};
  }
`;

export const Button = styled.p`
  width: 100%;
  font-size: 2.5vmin;
  font-weight: bold;
  background: ${color.LightPink};
  color: ${color.White};
  text-align: center;
  padding: 8px 0;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const SubButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubButton = styled.p`
  color: ${color.White};
  font-size: 1.8vmin;
  cursor: pointer;
`;