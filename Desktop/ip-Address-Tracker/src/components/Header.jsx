import "../styles/header.css";
import Searcher from "./Searcher";
export default function Header() {
  return (
    <header className="header">
      <h1>Ip Address Tracker</h1>
      <Searcher />
    </header>
  );
}
