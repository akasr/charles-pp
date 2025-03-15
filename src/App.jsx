import { Navigation, Hero, Socials, Main, Blogs, Opensource, GetInTouch } from "./components";
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
        <Opensource />
      </main>
      <footer>
        <GetInTouch />
      </footer>
    </div>
  );
};

export default App;