import { Link } from "react-router-dom";
import s from "./Main.module.scss";

function Main() {
  return (
    <main>
      <Link to="/lore">Link to Lore</Link>
      <div className={s.main}>MainPage</div>
    </main>
  );
}

export default Main;
