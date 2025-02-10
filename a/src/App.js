import './App.css';
import { Provider } from "@/components/ui/provider"

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

function App() {
  return (
    <div className="app">
     
    </div>
  );
}

export default App;
