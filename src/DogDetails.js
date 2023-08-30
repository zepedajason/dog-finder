import { useParams, Navigate } from "react-router-dom";
import App from "./App";

function DogDetails() {
  const { name } = useParams();

  const dogArr = App.defaultProps.dogs;

  return (
    <div>
      {dogArr.map((dog) => {
        if (name.toUpperCase() === dog.name.toUpperCase()) {
          return (
            <div key={crypto.randomUUID()}>
              <h1>{dog.name}</h1>
              <p>Age: {dog.age}</p>
              <div>
                <h2>Dog facts:</h2>
                {dog.facts.map((fact) => (
                  <p key={crypto.randomUUID()}>{fact}</p>
                ))}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default DogDetails;
