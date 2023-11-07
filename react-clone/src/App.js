import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div >
  );
}
/*앱을 실행시키고 HTML을 열어보면 h1과 button의 className은 랜덤하게 설정되어있다는 것을 알 수 있음
=> 각자 다른 컴포넌트에서 같은 className을 쓰게 되더라도 걱정할 필요가 없다는 뜻(각각의 className을 안겹치기 위해 매번 기억하지 않아도 됨)
*/

Button.PropTypes = {
  text: PropTypes.string.isRequired,
}

export default App;
