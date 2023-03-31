import React from "react";
import { FavoriteContext } from "./context/FavoriteContext";

import {
  PageTurnerGuide,
  Warning,
  Container,
  FavoritesContainer,
  CharacterCard,
  Title,
} from "./styles";
import { BadgeButton } from "../../../components";
import Link from "next/link";

function FavoriteCharacters() {
  const { favorites } = React.useContext(FavoriteContext);

  return (
    <Container>
      <Link href="/">
        <PageTurnerGuide>Home</PageTurnerGuide>
      </Link>

      <Title>Favorite Characters</Title>

      <FavoritesContainer>
        {favorites.length > 0 ? (
          favorites.map((favorite) => {
            return (
              <CharacterCard key={favorite.id}>
                <img src={favorite.image} alt={favorite.name} />
                <BadgeButton status={favorite.status} />
                <h2>{favorite.name}</h2>

                <p> Species: {favorite.species}</p>

                <p> Gender: {favorite.gender}</p>

                <p>Origin: {favorite.origin.name}</p>

                <p> Location (last seen): {favorite.location.name}</p>
              </CharacterCard>
            );
          })
        ) : (
          <Warning>No character was favorited</Warning>
        )}
      </FavoritesContainer>
    </Container>
  );
}

export default FavoriteCharacters;
