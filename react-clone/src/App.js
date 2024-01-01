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
      const newArray = [...currentArray, toDo]//상태 변화 함수는 어떤 함수에 인자로 무언가를 입력하면 현재 상태가 반환됨
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
      <hr />
      <ol>
        {toDos.reverse().map((items, index) => <li key={index}>{items}</li>)}
      </ol>
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

map 함수는 Array.map() 형식으로 작성하고 첫번째 인자로 배열의 내용을 조정할 수 있는 함수를 작성
=> 만약에 인자의 항목들을 그대로 보여주고 싶다면 Array.map((items)=>items)처럼 작성해주면 됨
두번째 인자는 map 함수가 Array의 값들을 한번씩 돌면서 해당 값의 index값을 반환해줌
key는 고유한 값으로 사용해야하기 때문에 index값을 key로 설정해주면 좋음
*/