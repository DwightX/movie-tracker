import './index.css';
import PopularMovies from './components/PopularMovies';
import UpcomingMovies from './components/UpcomingMovies';
import ActionMovies
 from './components/ActionMovies';
function App() {

  return (
    <div className="App">
    <PopularMovies />
    <UpcomingMovies />
    <ActionMovies />
    </div>
  );
}

export default App;
