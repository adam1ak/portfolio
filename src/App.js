import './restart.css';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Experience from './Experience';

function App() {
  return (
    <div>
      <NavBar />
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
