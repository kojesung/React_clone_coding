import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])
  const handleOnChange = (event) => { setToDo(event.target.value) }
  const handleOnSubmit = (event) => {
    event.preventDefault();//사용자의 폼 제출을 막아주는 함수
    console.log(toDo)
    if (toDo === "") {
      return
    }
    else {
      setToDo("")
    }
    setToDos(function (currentArray) {
      const newArray = [...currentArray, toDo]
      console.log(newArray)
      return newArray
    })
  }
  return (
    <div>
      <h1>My To Do List({(toDos.length)})</h1>
      <form onSubmit={handleOnSubmit}>
        <input value={toDo} onChange={handleOnChange} type='text' placeholder="Write your to do..." />
        <button>Add to do</button>
      </form>
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
3. 함수 컴포넌트 안에 useEffect를 실행시켜주면 컴포넌트가 호출될 때 useEffect가 실행됨(함수가 작동함),
해당 컴포넌트가 없어질 때도 호출하고 싶을 땐(다른 함수를 작동 시키고 싶을 때) function을 return 해주면 됨
함수, 컴포넌트가 없어질 때의 어떤 분석 결과를 보내고 싶을 떄 활용

input태그는 값이 변할 때 onChange상태가 되고 그 상태의 event가 입력한 text를 가지고 있음(input - onChange(event.target.value))
*/