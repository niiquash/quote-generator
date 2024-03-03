import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Quotes from "./components/quotes/Quotes";

const baseURL = "https://type.fit/api/quotes";

function App() {
  const [quotes, setQuotes] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setQuotes(response.data);
    });
  }, []);

  const handleGenerateQuote = () => {
    let newIndex = Math.floor(Math.random() * quotes.length);
    setCurrent(newIndex);
  };

  console.log(quotes);
  console.log(quotes && quotes[current]?.text);

  return (
    <main className="app">
      <div className="quote-container">
        <Quotes quote={quotes && quotes[current]} />
        <button className="generate-btn" onClick={handleGenerateQuote}>
          New Quote
        </button>
      </div>
    </main>
  );
}

export default App;
