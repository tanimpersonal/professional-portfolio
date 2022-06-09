import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <div className="header-home px-16">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<ContactForm></ContactForm>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
