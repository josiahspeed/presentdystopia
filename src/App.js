import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavBar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Downloads from './components/Downloads';
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNavBar />
      <Portfolio />
      {/* <Header />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Downloads />
      <Contacts /> */}
      <Footer />
    </>
  );
}

export default App;
