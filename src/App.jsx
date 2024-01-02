import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <div>{navigation.state === "loading" && "loading....."}</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
