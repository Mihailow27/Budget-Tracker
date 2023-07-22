import PropTypes from "prop-types";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti"; // Import TiDelete from react-icons/ti
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{props.cost}
        </span>
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={handleDeleteExpense}
        >
          <TiDelete size="1.5em" />
        </button>
      </div>
    </li>
  );
};

// Adding PropTypes validation for props
ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default ExpenseItem;
