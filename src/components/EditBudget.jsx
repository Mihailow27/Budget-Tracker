import { useState } from "react";
import PropTypes from "prop-types";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <>
      <input
        required
        type="number"
        className="form-control mr-3"
        id="name"
        value={value}
        onChange={handleChange} // Use the handleChange function for onChange
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

// Adding PropTypes validation for props
EditBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};

export default EditBudget;
