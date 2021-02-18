import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import { requests } from "./requests";

function App() {
  return (
    <div className="app">
      <Navbar key={8} />
      <Banner key={9} />
      <Row title="Lorenzo's Picks" key={1} lorenzosPicks isLargeRow />
      <Row title="Trending Now" key={2} fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" key={4} fetchUrl={requests.fetchTopRated} />
      <Row title="Action" key={5} fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" key={6} fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" key={7} fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
