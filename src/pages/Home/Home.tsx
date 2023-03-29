import { fetchApiData } from "../api/rickAndMortyApi";
import axios from "axios";

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
    try {
      const response = await axios.get(nextPage as string);
      setCharacters([...characters, ...response.data.results]);
      setNextPage(response.data.info.next);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }

  return (
    <Container>
      <Content>
        <HeaderContent>
          <Title>Rick And Morty Challenger</Title>
          <Description>
            Discover more about the universe of rick and morty
          </Description>

          <Form onSubmit={handleSubmit}>
            <InputSearch
              onChange={handleSearch}
              type="search"
              name="query"
              placeholder="Search for your character "
            />

            <ButtonSearch>Search</ButtonSearch>
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
          <LoadMoreButton onClick={handleLoadMoreCharacters}>
            Load More
          </LoadMoreButton>
        )}
      </Content>
    </Container>
  );
}

export default Home;
