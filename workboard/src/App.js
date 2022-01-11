import './App.css';
import Header from './components/Header';
import BoardOne from './components/BoardOne/BoardOne';
import BoardTwo from './components/BoardTwo/BoardTwo';
import BoardThree from './components/BoardThree/BoardThree';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <BoardOne />
        <BoardTwo />
        <BoardThree />
      </div>
    </div>
  );
}

export default App;
