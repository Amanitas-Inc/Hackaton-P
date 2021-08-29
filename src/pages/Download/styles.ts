import styled from "styled-components";
import { ReactComponent as Image } from "../../assets/img/download-image.svg";

export const StyledImage = styled(Image)`
  position: relative;
  bottom: -150px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.25rem;
  line-height: 130%;
  font-weight: 500;
`;

export const Button = styled.button`
  margin-top: 40px;
  color: #fff;
  background-color: ${(p) => p.theme.colors.purple[5]};
  border: 1px solid ${(p) => p.theme.colors.pink[2]};
  padding: 15px 50px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.black[1]};
`;
