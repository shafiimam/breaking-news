import "./App.css";
import { Button } from "react-bootstrap";
import News from "./Components/News/News";
import Header from "./Components/Header/Header";
import TopHeadline from "./Components/TopHeadline/TopHeadline";
import Fragment from './Components/Fragment/Fragment';
function App() {
  return (
    <div>
      <h2>Breaking News</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>

    </div>
  );
}

export default App;
