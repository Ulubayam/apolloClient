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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {newData.map(item => {
          return (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt="RickandMorty"
                style={{ width: "100%" }}
              />
              <div className="container">
                <h4>
                  <b>{item.name}</b>
                </h4>
                <p>{item.species}</p>
                <p>{item.gender}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
