import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./App.css";

const rickandmorty = gql`
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
  const { loading, error, data } = useQuery(rickandmorty);
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Oppss !!</p>;
  const newData = data.characters.results;
  return (
    <div className="container">
      <h1 className="title">Rick and Morty API with GraphQL</h1>
      {newData.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.image} alt="RickandMorty" />
            <div className="container">
              <div className="container-title">
                <h3 style={{ width: "150px" }}>
                  <b>{item.name}</b>
                </h3>
                <p>{item.species}</p>
                <p>{item.gender}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
