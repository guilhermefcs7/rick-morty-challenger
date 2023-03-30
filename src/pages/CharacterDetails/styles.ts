import styled from "styled-components";
import { colors, fontSizes, measurements } from "../../../constants";
import { LoadMoreButton } from "../Home/styles";

export const PageTurnerGuide = styled(LoadMoreButton)``;

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

export const ContentArea = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: 40%;

  transition: all 0.3s ease-in-out;

  &:hover {
    max-width: 70%;
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
export const ImageCardContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  border-radius: 8px;
  padding: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 48px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  padding: ${measurements.medium};

  border-radius: 28px;
  object-fit: cover;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${measurements.medium};
`;

export const Name = styled.h1`
  margin-bottom: ${measurements.medium};

  font-size: ${fontSizes.title};
  line-height: 54px;
  font-weight: 700;
`;

export const Status = styled.h2`
  font-size: ${fontSizes.description};
  line-height: 1.6;
  font-weight: 500;
  color: ${colors.white};
`;

export const Species = styled(Status)``;

export const Detail = styled(Status)``;
