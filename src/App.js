import TopBar from "./Components/TopBar";
import Header from "./Components/Header";
import FirstImage from "./Components/FirstImage";
import WhyUs from "./Components/WhyUs";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Appointment from "./Components/Appointment";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Route component={Header} />
      <Route exact path="/" component={FirstImage} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/WhyUs" component={WhyUs} />
      <Route path="/Gallery" component={Gallery} />
      <Route path="/Services" component={Services} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Appointment" component={Appointment} />
      <Route component={Footer} />
    </div>
    </Router>
  );
}

export default App;
