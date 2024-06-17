import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
