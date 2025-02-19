# Deity Randomizer  

A small React app that randomly selects names of Goddesses and Gods from different pantheons.  

## 📌 About the Project  
This project was developed as an **exercise to practice React**, focusing on:  
- **Using components** to separate logic and presentation.  
- **Managing state** to dynamically update the UI.  
- **Fetching data from an external source**, simulating an API with JSON files containing the deities.  

## 🚀 Technologies Used  
- **React + Vite**
- **Bootstrap** for styling  
- **React State and Props**  

## 📂 Project Structure  
```
/src
  ├── components/
  │   ├── DisplayDeity.jsx   # Component to display the selected deity
  │   ├── PantheonFilter.jsx # Component to filter by pantheon
  │   ├── Menu.jsx           # Menu to choose between Goddesses or Gods
  │   ├── RandomizerButton.jsx # Button to draw a random name
  ├── data/
  │   ├── goddesses.json     # List of Goddesses
  │   ├── gods.json          # List of Gods
  ├── App.jsx                # Main component
  ├── main.jsx               # Application entry point
```

## 📌 Future Improvements  
- Improve the UI with animations.  
- Implement a real API to fetch data.
- Add a form to include personal entries in the data.  