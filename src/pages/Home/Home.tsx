import { fetchApiData } from "../api/rickAndMortyApi";

import axios from "axios";

import debounce from "lodash/debounce";

import React from "react";

import {
  Container,
  Content,
  HeaderContent,
  Title,
  Description,
  FavoritePage,
  Form,
  InputSearch,
  Select,
  ButtonSearch,
  Grid,
  Card,
  Image,
  CardTitle,
  FavoriteButton,
  LoadMoreButton,
  SelectLabelText,
} from "./styles";

import Link from "next/link";
import { FavoriteContext } from "../CharacterFavorite/context/FavoriteContext";
import { CharacterDetail } from "../../../types/characterDetail";

function Home() {
  const [characters, setCharacters] = React.useState<CharacterDetail[]>([]);

  const [nextPage, setNextPage] = React.useState<string | null>(null);

  const [searchTerm, setSearchTerm] = React.useState("");

  const [status, setStatus] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const [isSearchButtonLoading, setIsSearchButtonLoading] =
    React.useState(false);

  const [clickedIds, setClickedIds] = React.useState<number[]>([]);

  const { favorites, setFavorites } = React.useContext(FavoriteContext);

  const addCharacterToFavorites = (id: number) => {
    const characterToAdd = characters.find((character) => character.id === id);

    if (characterToAdd) {
      if (!favorites.some((character) => character.id === id)) {
        setFavorites([...favorites, characterToAdd]);
      }

      if (!clickedIds.includes(id)) {
        setClickedIds([...clickedIds, id]);
      }
    }
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchApiData();

        setCharacters(data.results);

        setNextPage(data.info.next);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  async function handleLoadMoreCharacters(): Promise<void> {
    setIsLoading(true);

    try {
      const response = await axios.get(nextPage as string);

      setCharacters([...characters, ...response.data.results]);

      setNextPage(response.data.info.next);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(value: string) {
    setIsSearchButtonLoading(true);

    let endpoint = "https://rickandmortyapi.com/api/character/";

    if (value) {
      endpoint += `?name=${value}`;
    }

    fetch(endpoint)
      .then((response) => response.json())

      .then((data) => setCharacters(data.results))

      .catch((error) => console.error(error))

      .finally(() => setIsSearchButtonLoading(false));
  }

  const fetchStatusCharacters = async (status: string) => {
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=${status}`;

    const response = await fetch(endpoint);

    const data = await response.json();

    return data.results;
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    debouncedHandleSubmit(searchTerm);
  };

  React.useEffect(() => {
    async function handleFilterSubmit() {
      try {
        const data = await fetchStatusCharacters(status);

        setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    }

    handleFilterSubmit();
  }, [status]);

  const debouncedHandleSubmit = React.useCallback(
    debounce((value: string) => {
      handleSubmit(value);
    }, 500),
    []
  );

  return (
    <Container>
      <Content>
        <HeaderContent>
          <Title>Rick And Morty Challenger</Title>

          <Description>
            Discover more about the universe of rick and morty
          </Description>

          <Link href={`/CharacterFavorite/Favorites`}>
            <FavoritePage>favoritos</FavoritePage>
          </Link>

          <Form onSubmit={handleSearchSubmit}>
            <InputSearch
              onChange={handleSearch}
              type="search"
              name="query"
              placeholder="Search for your character "
            />

            <SelectLabelText htmlFor="status">
              Search by status:
              <Select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
                <option value="">Status</option>

                <option value="Alive">Alive</option>

                <option value="Dead">Dead</option>

                <option value="unknown">Unknown</option>
              </Select>
            </SelectLabelText>

            <ButtonSearch>
              {isSearchButtonLoading ? "Loading..." : "Search"}
            </ButtonSearch>
          </Form>
        </HeaderContent>

        <Grid>
          {characters ? (
            characters.map((result) => {
              const { id, name, image } = result;
              return (
                <Card key={id}>
                  <li>
                    <Link href={`/CharacterDetails/${id}`}>
                      <Image src={image} alt={`${name} thumb`} />
                    </Link>
                  </li>

                  <CardTitle>{name} </CardTitle>

                  <FavoriteButton
                    onClick={() => {
                      addCharacterToFavorites(id);
                    }}>
                    {clickedIds.includes(id) ? "Favorited!" : "Favorite"}
                  </FavoriteButton>
                </Card>
              );
            })
          ) : (
            <>
              <Card>
                <CardTitle>Character Not Found</CardTitle>
              </Card>
            </>
          )}
        </Grid>

        {nextPage && (
          <LoadMoreButton
            disabled={isLoading}
            onClick={handleLoadMoreCharacters}>
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreButton>
        )}
      </Content>
    </Container>
  );
}

export default Home;
