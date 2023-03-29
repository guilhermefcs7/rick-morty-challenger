import axios from "axios";

import Link from "next/link";

import { useRouter } from "next/router";

import React from "react";

import { CharacterDetail } from "../../../types/characterDetail";

import {
  Container,
  ContentArea,
  ImageCardContainer,
  Image,
  DetailContainer,
  Name,
  Species,
  Status,
  Detail,
  PageTurnerGuide,
} from "./styles";

function CharacterDetails() {
  const router = useRouter();

  const [characterDetail, setCharacterDetail] =
    React.useState<CharacterDetail>();

  React.useEffect(() => {
    async function fetchCharacterDetail() {
      const path = router.asPath;

      const id = path.replace(/[^0-9]/g, "");

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const detail = response.data;

      setCharacterDetail(detail);
    }

    fetchCharacterDetail();
  }, [router.asPath]);

  return (
    <>
      <Container>
        <ContentArea>
          {characterDetail && (
            <>
              <ImageCardContainer>
                <Image src={characterDetail.image} alt={characterDetail.name} />

                <Name> {characterDetail.name}</Name>

                <DetailContainer>
                  <Species>Species: {characterDetail.species}</Species>

                  <Status>Status: {characterDetail.status}</Status>

                  <Detail>Gender: {characterDetail.gender}</Detail>

                  <Detail>Origin: {characterDetail.origin?.name}</Detail>

                  <Detail>
                    Location (last seen): {characterDetail.location?.name}
                  </Detail>

                  <Link href="/">
                    <PageTurnerGuide>See more characters</PageTurnerGuide>
                  </Link>
                </DetailContainer>
              </ImageCardContainer>
            </>
          )}
        </ContentArea>
      </Container>
    </>
  );
}

export default CharacterDetails;
