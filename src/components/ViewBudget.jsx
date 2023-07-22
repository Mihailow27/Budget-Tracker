import PropTypes from "prop-types";

const ViewBudget = ({ budget, handleEditClick }) => {
  return (
    <>
      <span>Budget: £{budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

// Adding PropTypes validation for props
ViewBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default ViewBudget;
