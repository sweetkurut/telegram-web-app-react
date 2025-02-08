import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <>
      <h1>Hello dalbaeb</h1>
      <button onClick={onClose}>Закрыть</button>
    </>
  );
}

export default App;
