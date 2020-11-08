import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      {/* Banner */}
      <Banner/>
      <Row isLarge title="NETFILX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentraries Movies" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
