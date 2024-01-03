import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <div>{navigation.state === "loading" && "loading....."}</div>
      <Footer></Footer>
      <Outlet></Outlet>
    </>
  );
}

export default App;
