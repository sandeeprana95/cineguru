import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    // <div>
      <BrowserRouter>
       <Layout/>
      </BrowserRouter>
    // </div>
  );
}

export default App;
