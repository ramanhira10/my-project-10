
import data from './data/phrases.json';
import Phrases from './components/phrases';
import './style.css';

function App() {
  
  const phrases = data.phrases;
  
  return (
    <div className="container">
      <h1>Bingo</h1>
      <Phrases phrases={phrases} />
    </div>
  );
}

export default App;
