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
  Select,
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

  const [status, setStatus] = React.useState("");

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

  const fetchStatusCharacters = async (status: string) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=${status}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(searchTerm);
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

            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Status</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Select>

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
