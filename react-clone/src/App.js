import Button from "./Button"
import PropTypes from "prop-types"
function App() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <Button text={"Continue"} />
    </div >
  );
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
