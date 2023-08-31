import "../styles/Searcher.css";
export default function Searcher() {
  return (
    <div className="searcher">
      <form>
        <input
          type="text"
          name=""
          placeholder="Search for any IP address or  domain"
          id=""
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
