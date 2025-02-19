import { useEffect, useState } from "react";
import { goddesses } from "../data/goddesses";
import { gods } from "../data/gods";

function PantheonFilter({ selectedPantheons, onChange }) {
  const [pantheons, setPantheons] = useState([]);

  useEffect(() => {
    const allPantheons = [
      ...new Set([...goddesses, ...gods].map(deity => deity.Pantheon))
    ];
    setPantheons(allPantheons);
  }, []);

  const handleCheckboxChange = (pantheon) => {
    if (selectedPantheons.includes(pantheon)) {
      onChange(selectedPantheons.filter(p => p !== pantheon));
    } else {
      onChange([...selectedPantheons, pantheon]);
    }
  };

  return (
    <div className="pantheon-filter">
  <p>Filter by Pantheon:</p>
  {pantheons.map((pantheon) => (
    <div className="form-check-inline" key={pantheon}>
      <input
        className="form-check-input"
        type="checkbox"
        id={pantheon} // Associar corretamente ao label
        checked={selectedPantheons.includes(pantheon)}
        onChange={() => handleCheckboxChange(pantheon)}
      />
      <label className="form-check-label" htmlFor={pantheon}>
        {pantheon}
      </label>
    </div>
  ))}
</div>

  );
}

export default PantheonFilter;
