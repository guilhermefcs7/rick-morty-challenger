import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Name = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Status = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const Detail = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;
