import axios from "axios";

import Link from "next/link";

import { useRouter } from "next/router";

import React from "react";
import { BadgeButton } from "../../../components";

import { CharacterDetail } from "../../../types/characterDetail";

import { FavoriteContext } from "../CharacterFavorite/context/FavoriteContext";

import {
  Container,
  DetailContainer,
  Species,
  Detail,
  PageTurnerGuide,
  CardContainer,
  Card,
  CardImage,
  CardInfo,
  CardTitle,
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

  const { favorites, setFavorites } = React.useContext(FavoriteContext);

  return (
    <Container>
      <CardContainer>
        {characterDetail && (
          <Card>
            <CardImage src={characterDetail.image} alt={characterDetail.name} />

            <CardInfo>
              <DetailContainer>
                <CardTitle>{characterDetail.name}</CardTitle>

                <BadgeButton status={characterDetail.status} />

                <Species>Species: {characterDetail.species}</Species>

                <Detail>Gender: {characterDetail.gender}</Detail>

                <Detail>Origin: {characterDetail.origin?.name}</Detail>

                <Detail>
                  Location (last seen): {characterDetail.location?.name}
                </Detail>

                <Link href="/">
                  <PageTurnerGuide>See more characters</PageTurnerGuide>
                </Link>
              </DetailContainer>
            </CardInfo>
          </Card>
        )}
      </CardContainer>
    </Container>
  );
}

export default CharacterDetails;
