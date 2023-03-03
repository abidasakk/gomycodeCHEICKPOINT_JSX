import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import NavBar from "./components/NavBar";
import NavBarClass from "./components/NavBarClass";

function App() {

  const handleClick = () => {
    alert("hello world !")
  }


  let description = "Please let us know how we did with your support";


  return (
    <div className="App">
     
      <div className="cadre">
        <NavBar title="How did we do ?" description={description} handleClick={handleClick} />
        <NavBarClass />
        <div>
          <button type="submit" className="boutton">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
