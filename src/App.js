import './index.css';
import './App.css'
import Row from './components/Row';
import request from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Banner fetchUrl={request.fetchBannerMovie}/>
      <Row title="Trending"  isLargeRow={true} fetchUrl={request.fetchTrending}></Row>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}></Row>
      <Row title="Romantic" fetchUrl={request.fetchRomanticMovies}></Row>
      <Row title="Action" fetchUrl={request.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}></Row>
      <Row title="Thriller" fetchUrl={request.fetchThrillerMovies}></Row>
      <Row title="Romantic" fetchUrl={request.fetchRomanticMovies}></Row>
    </div>
  );
}

export default App;
