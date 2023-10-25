import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Parallax } from "react-parallax";
import {useNavigate} from 'react-router-dom'
import './LanginPage.css'

function LandingPage() {
  const navigateByUrl=useNavigate()
  const navigate=()=>{
    navigateByUrl('/add')
  }
  const navigate1=()=>{
    navigateByUrl('/home')
  }
  return (
    <div style={{ overflowX: "hidden" }}>
      <Parallax
        style={{ height: "65vh" }}
        bgImage="https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?cs=srgb&dl=pexels-lukas-317356.jpg&fm=jpg" // Replace with your background image URL
        strength={500} // Adjust the parallax effect strength as needed
      >
        <Row className="mt-5 mb-5 align-items-center justify-content-between">
          <Col></Col>
          <Col lg={8}>
            <h2 className="mb-3" style={{ textShadow: "2px 2px 2px #FFFFFF" }}>
              Welcome to {" "}
              <span
                style={{ textShadow: "2px 2px 2px #000" }}
                className="text-light"
              >
                 NOTESIN
              </span>
            </h2>
            <p
              className=" fs-5 "
              style={{ color:"black",textAlign: "justify", textShadow: "2px 2px 2px #FFFFFF" }}
            >
              NOTESIN, the app that empowers you to unlock the vast reservoir of
              your thoughts and creativity. Seamlessly capture your ideas,
              musings, and inspirations, one note at a time. With its
              user-friendly interface and intuitive features, it provides the
              perfect platform to organize and cultivate your brilliance,
              ensuring that no spark of genius is ever lost or forgotten.
              Elevate your productivity and creativity with NotesIn.
            </p>
            <button
            onClick={navigate}
              className="btn btn-transparent mt-5 fw-bolder"
              style={{border:"solid 1px", borderRadius: "5px" }}
            >
              Add Notes <i className="fa-solid fa-add text-danger ms-2 "></i>
            </button>
            <button
            onClick={navigate1}
              className="btn btn-transparent mt-5 ms-3 fw-bolder"
              style={{ border:"solid 1px",borderRadius: "5px" }}
            >
              View Notes{" "}
              <i
                className="fa-solid fa-note-sticky ms-2 text-danger"
              
              ></i>
            </button>
          </Col>
          <Col> </Col>
        </Row>
      </Parallax>

      <div className="container-fluid cards d-flex w-100 mt-5 flex-wrap align-items-center justify-content-evenly">
        <Card
          className="p-3 d-flex flex-row"
          style={{ width: "22rem", border: "none" }}
        >
          <i class="fa-regular fa-pen-to-square fa-beat-fade fa-3x"></i>{" "}
          <Card.Body>
            <Card.Title>Create Notes</Card.Title>
          </Card.Body>
        </Card>
        <Card
          className="p-3 d-flex flex-row"
          style={{ width: "22rem", border: "none" }}
        >
          <i class="fa-regular fa-eye fa-beat-fade fa-3x"></i>
          <Card.Body>
            <Card.Title>View&Edit Notes </Card.Title>
          </Card.Body>
        </Card>
        <Card
          className="p-3 d-flex flex-row"
          style={{ width: "22rem", border: "none" }}
        >
          <i class="fa-regular fa-folder-open fa-beat-fade fa-3x"></i>
          <Card.Body>
            <Card.Title>Categorize Your Notes</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
