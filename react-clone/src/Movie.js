import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function Movie() {
    return <Router>
        <Routes>
            <Route path="/Movie/:id" element={<Detail />}></Route>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
}
export default Movie;

/*Routes 컴포넌트 안에는 Route 컴포넌트만 존재해야함
=> element 속성 안에 컴포넌트를 넣어줘야됨
*/