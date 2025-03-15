import { Navigation, Hero, Socials, Main, Blogs, Opensource } from "./components";
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
    </div>
  );
};

export default App;