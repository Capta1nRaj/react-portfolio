import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact="exact" path="/" key={0} element={<> < Home /> </>}></Route>
                    <Route exact="exact" path="/skills" key={1} element={<> < Skills /> </>}></Route>
                    <Route exact="exact" path="/services" key={2} element={<> < Services /> </>}></Route>
                    <Route exact="exact" path="/pricing" key={3} element={<> < Pricing /> </>}></Route>
                    <Route exact="exact" path="/projects" key={4} element={<> < Projects /> </>}></Route>
                    <Route exact="exact" path="/contact-us" key={5} element={<> < ContactUs /> </>}></Route>
                    <Route exact="exact" path="/react-portfolio" key={6} element={<> < Home /> </>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
