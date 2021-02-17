import "./App.css";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import { requests } from "./requests";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Lorenzo's Picks"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
