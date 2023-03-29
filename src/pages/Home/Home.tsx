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
  Form,
  InputSearch,
  ButtonSearch,
  Grid,
  Card,
  Image,
  CardTitle,
  LoadMoreButton,
} from "./styles";

import { Character } from "../../../types/character";

import Link from "next/link";

function Home() {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const [nextPage, setNextPage] = React.useState<string | null>(null);

  const [searchTerm, setSearchTerm] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const [isSearchButtonLoading, setIsSearchButtonLoading] =
    React.useState(false);

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

    handleDebouncedSearch(event.target.value);
  }

  function handleSubmit(value: string) {
    if (searchTerm) {
      setIsSearchButtonLoading(true);

      fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
        .catch((error) => console.error(error));

      setIsSearchButtonLoading(false);
    }
  }

  const handleSearchSubmit = () => {
    handleSubmit(searchTerm);
  };

  const handleDebouncedSearch = debounce(handleSubmit, 500);

  return (
    <Container>
      <Content>
        <HeaderContent>
          <Title>Rick And Morty Challenger</Title>
          <Description>
            Discover more about the universe of rick and morty
          </Description>

          <Form onSubmit={handleSearchSubmit}>
            <InputSearch
              onChange={handleSearch}
              type="search"
              name="query"
              placeholder="Search for your character "
            />

            <ButtonSearch>
              {isSearchButtonLoading ? "Loading..." : "Search"}
            </ButtonSearch>
          </Form>
        </HeaderContent>

        <Grid>
          {characters.map((result) => {
            const { id, name, image } = result;
            return (
              <Card key={id}>
                <li>
                  <Link href={`/CharacterDetails/${id}`}>
                    <Image src={image} alt={`${name} thumb`} />
                  </Link>
                </li>
                <CardTitle>{name} </CardTitle>
              </Card>
            );
          })}
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
