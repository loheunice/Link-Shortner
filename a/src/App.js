import './App.css';

function App({ Component, pageProps }) {
  return (
      <div className="app">
        <Component {...pageProps} />
      </div>
  );
}

export default App;
