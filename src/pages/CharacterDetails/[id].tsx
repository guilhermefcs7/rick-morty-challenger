import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { CharacterDetail } from "../../../types/characterDetail";

import {
  Container,
  Image,
  Name,
  Status,
  DetailsContainer,
  Detail,
} from "./styles";

function CharacterDetails() {
  const router = useRouter();

  const [characterDetail, setCharacterDetail] = React.useState<
    CharacterDetail[]
  >([]);

  React.useEffect(() => {
    async function fetchCharacterDetail() {
      const path = router.asPath;

      const id = path.replace(/[^0-9]/g, "");

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const detail = response.data;

      setCharacterDetail(detail);

      console.log(detail);
    }

    fetchCharacterDetail();
  }, [router.asPath]);

  return (
    <Container>
      <Image src={characterDetail.image} alt={characterDetail.name} />
      <Name>{characterDetail.name}</Name>
      <Status>
        {characterDetail.status} - {characterDetail.species}
      </Status>
      <DetailsContainer>
        <Detail>Gender: {characterDetail.gender}</Detail>
      </DetailsContainer>
    </Container>
  );
}

export default CharacterDetails;
