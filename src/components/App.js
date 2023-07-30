import './App.scss';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contacts from "./Contacts";
import Faq from "./Faq";

function App() {
  return (
    <div className="App">
      <header className="App-header banner">
        <Header  />
      </header>
        <Home />
        <About />
        <Services />
        <Faq />
        <Contacts />
    </div>
  );
}

export default App;
