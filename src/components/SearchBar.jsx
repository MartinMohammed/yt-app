import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // prop function
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment" style={{ marginTop: "20px" }}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   onFormSubmit = (event) => {
//     event.preventDefault();
//     // call the callback from the parent component and passing in the input of the form
//     this.props.onFormSubmit(this.state.term);

//     // TODO: Make sure we call callback
//     // from parent component
//   };

//   render() {}
// }

export default SearchBar;
