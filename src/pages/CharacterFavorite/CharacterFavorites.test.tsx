import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoriteContext } from "./context/FavoriteContext";
import FavoriteCharacters from "./Favorites";

interface CharacterDetail {
  favorites: {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
  }[];
}

const dataContext: CharacterDetail = {
  favorites: [
    {
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "Earth (C-137)" },
      location: { name: "Earth (Replacement Dimension)" },
    },
    {
      id: 2,
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "Earth (C-137)" },
      location: { name: "Earth (Replacement Dimension)" },
    },
  ],
};

function makeSut() {
  render(
    <FavoriteContext.Provider value={dataContext}>
      <FavoriteCharacters />
    </FavoriteContext.Provider>
  );
}

describe("FavoriteCharacters", () => {
  test("should display a list of favorites characters", () => {
    makeSut();

    const morty = screen.getByAltText("Morty Smith");

    expect(morty).toBeInTheDocument();
  });

  it("should warn when there is no favorite characters", () => {
    render(
      <FavoriteContext.Provider value={{ favorites: [] }}>
        <FavoriteCharacters />
      </FavoriteContext.Provider>
    );

    const NoFavoriteCharacterMessage = screen.getByText(
      "No character was favorited"
    );

    expect(NoFavoriteCharacterMessage).toBeInTheDocument();
  });
});
