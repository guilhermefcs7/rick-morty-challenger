import styled from "styled-components";
import { colors, fontSizes, measurements } from "../../../constants";
import { LoadMoreButton } from "../Home/styles";

import { motion } from "framer-motion";

export const PageTurnerGuide = styled(LoadMoreButton)`
  margin-bottom: ${measurements.medium};
`;

export const Warning = styled.h2`
  font-size: ${fontSizes.description};
  line-height: 1.6;
  font-weight: 600;
  color: ${colors.gray900};
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: url("/images/rickAndMorty.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  overflow: hidden;
`;

export const CharacterCard = styled.div`
  width: 300px;
  margin-right: 30px;

  background: #c33764;
  background: -webkit-linear-gradient(to right, #1d2671, #c33764);
  background: linear-gradient(to right, #1d2671, #c33764);
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  cursor: grab;

  &:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    margin: 1rem;

    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
  }

  p {
    margin: 1rem;

    color: #fff;
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    padding: 14px;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export const FavoritesContainer = styled(motion.div)`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: ${measurements.medium};
  margin-bottom: ${measurements.small};

  color: #fff;
  text-align: center;
  font-size: ${fontSizes.title};
  line-height: 54px;
  font-weight: 700;

  @media only screen and (max-width: 768px) {
    font-size: ${fontSizes.subtitle};
    line-height: 54px;
    font-weight: 700;
  }
`;
