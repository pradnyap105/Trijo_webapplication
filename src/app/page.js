import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Caraslied from "./components/Caraslied";
import Navbar from "./components/Navbar";
import Freefeature from "./components/freefeature";
import AvailableRoutes from "./components/AvailableRoutes";
import Plan from "./components/Plan";
import Registerpage from "./components/Registerpage";
import Features from "./components/Tranding";
import Userlogin from "./components/Userlogin";
import Blog from "./Blog/page";
export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      {/* <Freefeature />
      <AvailableRoutes />
      <Plan /> 
      <Userlogin />*/}
      <Registerpage />
      {/* <Blog />
      <Features />
      <Caraslied /> */}
    </>
  );
}
