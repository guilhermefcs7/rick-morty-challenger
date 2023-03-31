import styled from "styled-components";
import { colors, fontSizes, measurements } from "../../../constants";
import { LoadMoreButton } from "../Home/styles";

export const PageTurnerGuide = styled(LoadMoreButton)`
  margin-bottom: ${measurements.medium};
`;

export const Warning = styled.h2`
  font-size: ${fontSizes.description};
  line-height: 1.6;
  font-weight: 600;
  color: ${colors.gray900};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: url("/images/rickAndMorty.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const CharacterCard = styled.div`
  background: #c33764;
  background: -webkit-linear-gradient(to right, #1d2671, #c33764);
  background: linear-gradient(to right, #1d2671, #c33764);

  width: 300px;

  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  font-weight: 600;

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem;
  }

  p {
    color: #fff;
    font-size: 1rem;
    margin: 1rem;
  }
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: ${measurements.medium};
  margin-bottom: ${measurements.small};

  font-size: ${fontSizes.title};
  line-height: 54px;
  font-weight: 700;
`;
