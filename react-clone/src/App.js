/*import Button from "./Button";*/
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [keyword, setKeyword] = useState('');
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => (setKeyword(event.target.value));
  console.log("I run all the time")
  useEffect(() => {
    console.log("CALL THE API")
  }, [])
  useEffect(() => {
    console.log("Search for", keyword)
  }, [keyword])
  useEffect(() => {
    console.log("I run keyword and counter change");
  }, [keyword, counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div >
  );
}

export default App;
/*API를 외부에서 가져오는 코드를 작성했을 때 렌더링 할때마다 가져오는 작업을 막기 위해,
input태그의 onChange속성에 함수를 대입해 값을 입력할 때마다 렌더링이 되기 때문에 => useEffect 사용
useEffect는 2개의 argument를 갖는데
1. 첫번째는 우리가 딱 한번만 실행시키고 싶은 코드
2. 두번째는 [변수]가 변화할 때마다 useEffect를 실행시키고 싶다고 알려주는 것
useEffect내의 코드는 처음 렌더링 후에 실행됨(나중에 코드 꼬이지 않으려면 알고 있어야 됨)

input태그는 값이 변할 때 onChange상태가 되고 그 상태의 event가 입력한 text를 가지고 있음(input - onChange(event.target.value))
*/