import { Navigation, Hero, Socials, Main, Blogs } from "./components";
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
        <Blogs />
      </main>
    </div>
  );
};

export default App;