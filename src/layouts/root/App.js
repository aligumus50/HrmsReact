import "../../App.css";

import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";

import "../../css/footer.css";
import Footer from "../common/Footer";


function App() {
  return (
    <div className="App">
      <Navi></Navi>
      
      <Container className="main">
        
        <Dashboard>
          
        </Dashboard>
      </Container>
      
      <Footer className="footer"></Footer>
      
    </div>
  );
}

export default App;
