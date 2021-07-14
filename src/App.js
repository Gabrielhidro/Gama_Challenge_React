
import { ToastContainer } from "react-toastify";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer/>
      <Header />
      <MainContent />
      <CardsSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default App;
