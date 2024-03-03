import "./quotes.css";

const Quotes = ({ quote }) => {
  return (
    <div className="box">
      <p className="quote-text">{`"${quote?.text}`}</p>
      <i className="author-text">{`- ${quote?.author}`}</i>
    </div>
  );
};

export default Quotes;
