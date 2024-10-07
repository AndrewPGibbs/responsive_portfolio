import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Skills from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
