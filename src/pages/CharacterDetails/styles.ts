import styled from "styled-components";
import { colors, fontSizes, measurements } from "../../../constants";
import { LoadMoreButton } from "../Home/styles";

export const PageTurnerGuide = styled(LoadMoreButton)`
  margin-bottom: ${measurements.medium};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;

  background: url("/images/rickAndMorty.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  &:hover {
    > h1,
    h2,
    button {
      display: flex;
    }
  }

  > h1,
  h2,
  button {
    display: none;
  }
`;

export const CardImage = styled.img`
  width: 400px;
  height: 400px;

  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 400px;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  transition: width 0.6s ease;

  &:hover {
    width: 900px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
`;

export const CardTitle = styled.h1`
  margin-top: ${measurements.medium};
  margin-bottom: ${measurements.small};

  font-size: ${fontSizes.title};
  line-height: 54px;
  font-weight: 700;
`;

export const DetailContainer = styled.div`
  height: 400px;
  justify-content: center;
`;

export const Status = styled.h2`
  font-size: ${fontSizes.description};
  line-height: 1.6;
  font-weight: 500;
  color: ${colors.white};
`;

export const Species = styled(Status)``;

export const Detail = styled(Status)``;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;
