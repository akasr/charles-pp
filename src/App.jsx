import { Navigation, Hero, Socials, Main } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
        <Hero />
        <Socials />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
};

export default App;