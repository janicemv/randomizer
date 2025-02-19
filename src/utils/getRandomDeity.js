import { goddesses } from "../data/goddesses";
import { gods } from "../data/gods";

export function getRandomDeity(category = "Both", selectedPantheons = []) {
  let filteredDeities = [];

  if (category === "Goddesses") {
    filteredDeities = goddesses;
  } else if (category === "Gods") {
    filteredDeities = gods;
  } else {
    filteredDeities = [...goddesses, ...gods]; 
  }

  if (selectedPantheons.length > 0) {
    filteredDeities = filteredDeities.filter(deity =>
      selectedPantheons.includes(deity.Pantheon)
    );
  }

  if (filteredDeities.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * filteredDeities.length);
  return filteredDeities[randomIndex];
}
