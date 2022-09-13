import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact="exact" path="/" key={0} element={<> < HomePage /> </>}></Route>
                    <Route exact="exact" path="/skills" key={1} element={<> < Skills /> </>}></Route>
                    <Route exact="exact" path="/services" key={2} element={<> < Services /> </>}></Route>
                    <Route exact="exact" path="/pricing" key={3} element={<> < Pricing /> </>}></Route>
                    <Route exact="exact" path="/projects" key={4} element={<> < Skills /> </>}></Route>
                    <Route exact="exact" path="/contact" key={5} element={<> < Skills /> </>}></Route>
                    <Route
                        exact="exact"
                        path="/react-portfolio"
                        key={5}
                        element={<> < HomePage /> </>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
