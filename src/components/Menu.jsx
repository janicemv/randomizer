function Menu({ category, onChange }) {
    return (
      <div className="menu input-group mx-auto my-4">
        <label className="input-group-text">Select a category:</label>
        <select className="custom-select" value={category} onChange={(e) => onChange(e.target.value)}>
          <option value="Both">Both</option>
          <option value="Goddesses">♀ Goddesses</option>
          <option value="Gods">♂ Gods</option>
        </select>
      </div>
    );
  }
  
  export default Menu;
  