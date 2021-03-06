import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  text,
  
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr className="divider-line"></hr>
        
        {/* <div className="header-bar-box" style={{ position: "relative" }}> */}
    <div className="header-bar-logo">
      <div>
        <svg style={{ cursor: "pointer" }}
          width="98"
          height="40"
          viewBox="0 0 98 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path fill="#FFF" d="M0 40h98V0H0z" />
            <path
              fill="#005EB8"
              d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"
            />
          </g>
        </svg>
      {/* </div> */}
    </div>
    </div>
   
      <text className="text-white header-bar-title"/>
    

      </header>


      <body id="body1">
        <Card style={{ color: "#000" }}>
          <CardImg />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is example of bootstrap cards</Card.Text>
            <section className="container">
              <Button className="card-main-button">Demographic</Button>
              <Button className="card-main-button">Episode</Button>
              <Button className="card-main-button">Screening</Button>
              <Button className="card-main-button">Diagnostic</Button>
              <Button className="card-main-button">Kit Status</Button>
              <Button className="card-main-button">Surveillance</Button>
            </section>
          </Card.Body>
        </Card>
   
      </body>
    </div>
  );
}

export default App;
