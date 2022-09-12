import NavBar from "./components/NavBarComponent/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact="exact" path="/" key={0} element={
            <>
              <HomePage />
            </>
          }
          ></Route>
          <Route exact="exact" path="/about" key={1} element={
            <>
              <AboutUs />
            </>
          }
          ></Route>
          <Route exact="exact" path="/services" key={2} element={
            <>
              <NavBar navBarOption3TextDecoration="underline" navBarImageWidth="48px" navBarImage={require("./images/navigation-bar-component-images/logo.png")} navBarFontFamily="Mabook" rightSectionFontSize="24px" navBarOption1="home" navBarOption2="about" navBarOption3="services" navBarOption4="pricing" navBarOption5="projects" navBarOption6="contact" />
            </>
          }
          ></Route>
          <Route exact="exact" path="/pricing" key={3} element={
            <>
              <NavBar navBarOption4TextDecoration="underline" navBarImageWidth="48px" navBarImage={require("./images/navigation-bar-component-images/logo.png")} navBarFontFamily="Mabook" rightSectionFontSize="24px" navBarOption1="home" navBarOption2="about" navBarOption3="services" navBarOption4="pricing" navBarOption5="projects" navBarOption6="contact" />
            </>
          }
          ></Route>
          <Route exact="exact" path="/projects" key={4} element={
            <>
              <NavBar navBarOption5TextDecoration="underline" navBarImageWidth="48px" navBarImage={require("./images/navigation-bar-component-images/logo.png")} navBarFontFamily="Mabook" rightSectionFontSize="24px" navBarOption1="home" navBarOption2="about" navBarOption3="services" navBarOption4="pricing" navBarOption5="projects" navBarOption6="contact" />
            </>
          }
          ></Route>
          <Route exact="exact" path="/contact" key={5} element={
            <>
              <NavBar navBarOption6TextDecoration="underline" navBarImageWidth="48px" navBarImage={require("./images/navigation-bar-component-images/logo.png")} navBarFontFamily="Mabook" rightSectionFontSize="24px" navBarOption1="home" navBarOption2="about" navBarOption3="services" navBarOption4="pricing" navBarOption5="projects" navBarOption6="contact" />
            </>
          }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
