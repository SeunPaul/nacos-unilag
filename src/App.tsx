import { useEffect } from "react";
import Aos from "aos";
import Router from "./router/Router";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
