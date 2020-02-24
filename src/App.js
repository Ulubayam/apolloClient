import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const RickAndMorty = gql`
  {
    characters {
      results {
        id
        name
        image
        gender
        species
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(RickAndMorty);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Opps !!</p>;
  return data.characters.results.map(({ id, name, image, gender, species }) => (
    <p key={id}> {name}</p>
  ));
}

export default App;
