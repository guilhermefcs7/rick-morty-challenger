import styled from "styled-components";
import { colors, fontSizes } from "../../../constants";

interface BadgeProps {
  BackgroundColor?: string;
}

export const Badge = styled.button<BadgeProps>`
  display: inline-block;
  padding: 0.5rem;

  border-radius: 10px;
  background-color: ${(props) => props.BackgroundColor};
  font-weight: bold;
  border: none;
  outline: none;
`;

export const Status = styled.h2`
  font-size: ${fontSizes.description};
  line-height: 1.6;
  font-weight: 500;
  color: ${colors.white};
`;
