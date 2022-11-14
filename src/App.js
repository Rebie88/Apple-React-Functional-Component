import Footer from "./commonResource/Footer/Footer";
import Header from "./commonResource/Header/Header";
import AlertSection from "./commonResource/Main/AlertSection";
import FifthSection from "./commonResource/Main/FifthSection";
import FirstSection from "./commonResource/Main/FirstSection";
import FourthSection from "./commonResource/Main/FourthSection";
import SecondSection from "./commonResource/Main/SecondSection";
import SixthSection from "./commonResource/Main/SixthSection";
import ThirdSection from "./commonResource/Main/ThirdSection";
function App() {
  return (
    <div>
      <Header />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection/>
      <Footer/>
    </div>
  );
}

export default App;
