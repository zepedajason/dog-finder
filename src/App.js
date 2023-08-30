import Home from "./Home";
import DogDetails from "./DogDetails";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import DogList from "./DogList";

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={<DogList />}></Route>
          <Route path="/dogs/:name" element={<DogDetails />}></Route>
          <Route path="*" element={<Navigate to="/dogs" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
