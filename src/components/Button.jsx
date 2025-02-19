function Button({ onClick }) {
    return (
      <div className="button">
          <button
            onClick={onClick}
            className="btn btn-info btn-lg"
          >
            Get Deity
          </button>
      </div>
    );
  }
  
  export default Button;
  