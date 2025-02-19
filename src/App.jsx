import { useState } from "react";
import { getRandomDeity } from "./utils/getRandomDeity";
import DisplayDeity from "./components/DisplayDeity";
import Button from "./components/Button";
import Menu from "./components/Menu";
import PantheonFilter from "./components/PantheonFilter";
import "./App.css";

function App() {
  const [deity, setDeity] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [category, setCategory] = useState("Ambos");
  const [selectedPantheons, setSelectedPantheons] = useState([]);

  const handleSort = () => {
    setIsRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      setDeity(getRandomDeity(category, selectedPantheons));
      count++;
      if (count > 10) {
        clearInterval(interval);
        setTimeout(() => {
          setDeity(getRandomDeity(category, selectedPantheons));
          setIsRolling(false);
        }, 500);
      }
    }, 150);
  };

  return (
    <div className="app-container">
      <h1>Deity Draw</h1>
      <Menu category={category} onChange={setCategory} />
      <PantheonFilter selectedPantheons={selectedPantheons} onChange={setSelectedPantheons} />
      <DisplayDeity deity={deity} isRolling={isRolling} />
      <Button onClick={handleSort} />
    </div>
  );
}

export default App;
