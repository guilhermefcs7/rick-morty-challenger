import React from "react";
import { CharacterDetail } from "../../../../types/characterDetail";
import { useRouter } from "next/router";
import axios from "axios";

function CharacterDetails() {
  const router = useRouter();
  const { id } = router.query;

  return <>{id} </>;
}

export default CharacterDetails;
