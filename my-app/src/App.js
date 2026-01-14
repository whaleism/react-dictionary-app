import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/whaleism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenny Lee
          </a>
          , on{" "}
          <a
            href="https://github.com/whaleism/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          , hosted by{" "}
          <a
            href="https://roaring-meerkat-514551.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
