import styled from "styled-components";

import { fontSizes, measurements, colors } from "../../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  padding: ${measurements.large};
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: ${measurements.small};

  font-size: ${fontSizes.title};
  line-height: 34px;
  font-weight: 700;
`;

export const Description = styled.span`
  margin-bottom: ${measurements.medium};

  font-size: ${fontSizes.description};
  line-height: 12px;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${measurements.medium};
`;

export const InputSearch = styled.input`
  padding: 10px;
  margin-right: 10px;
  width: 300px;

  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-right: ${measurements.medium};

  background-color: white;
  color: black;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${colors.gray};
  outline: none;
  transition: all 0.3s;

  &:hover {
    border-color: black;
  }

  &:focus {
    border-color: ${colors.chiffonBlue};
  }
`;

export const ButtonSearch = styled.button`
  padding: 10px 20px;

  background-color: ${colors.chiffonBlue};
  border: none;
  border-radius: 5px;
  color: ${colors.white};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.irisBlue};
  }
`;

export const Grid = styled.ul`
  display: grid;

  grid-template-columns: repeat(3, minmax(20px, 1fr));
  grid-gap: 20px;
  list-style: none;
  grid-gap: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: ${measurements.medium};

  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 80%;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-radius: 10%;
  }
`;

export const CardTitle = styled.h2`
  font-size: ${fontSizes.subtitle};
  line-height: 24px;
  font-weight: 600;
  color: ${colors.gray};
  transition: all 0.3s ease-in-out;
  text-decoration: underline;
  text-align: center;
`;

export const LoadMoreButton = styled.button`
  padding: 10px 20px;
  margin-top: ${measurements.medium};

  background-color: ${colors.turquoiseBlue};
  border: none;
  border-radius: 5px;
  color: ${colors.white};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${colors.irisBlue};
    border-radius: 50px;
  }
`;
