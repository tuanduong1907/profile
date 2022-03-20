import "./App.css";
import Footer from "./components/footer/Footer";
import Introduce from "./components/introduce/Introduce";
import MyProject from "./components/myProject/MyProject";
import MySkill from "./components/mySkill/MySkill";
import Partner from "./components/partner/Partner";

function App() {
  return (
    <div className="w-full lg:w-[1284px] mx-auto px-4 sm:px-10">
      <Introduce></Introduce>
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Partner></Partner>
      <Footer></Footer>
    </div>
  );
}

export default App;
