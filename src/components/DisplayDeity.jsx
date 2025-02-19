function DisplayDeity({ deity }) {
    if (!deity) return <p className="h3">Click on the button to sort!</p>;
  
    const isGoddess = !!deity.Goddess;
    const name = deity.Goddess || deity.God;
    const pantheon = deity.Pantheon;
    const symbol = isGoddess ? "♀" : "♂";
  
    return (
      <div className="container mt-5 mb-5 chosen">
        <h2><span className={isGoddess ? "isGoddess" : "isGod"}>{symbol}</span> {name}</h2>
        <small><em>{pantheon}</em> Pantheon</small>
      </div>
    );
  }
  
  export default DisplayDeity;
  