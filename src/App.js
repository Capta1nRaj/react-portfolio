import NavBar from "./components/NavBarComponent/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar
          // Left/Image Section
          navBarImageWidth="48px"
          navBarImage={require("./images/navigation-bar-images/logo.png")}
          // Right Section
          navBarFontFamily="Mabook"
          rightSectionFontSize="24px"
          navBarOption1="Home"
          navBarOption2="About"
          navBarOption3="Services"
          navBarOption4="Pricing"
          navBarOption5="Projects"
          navBarOption6="Contact"
        />
        <Routes>
          <Route exact path="/" key={0} element={
            <>
            </>
          }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
