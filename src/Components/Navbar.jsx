import React from "react";
import Logo from "../Images/notesin-low-resolution-logo-color-on-transparent-background.png";
import Logo1 from "../Images/logo-light.png";
import { Link } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { darkmode } from "../Redux/darkmodeSlice";
import './Navbar.css'
function Navbar() {
  const dispatch = useDispatch();

  const mode=useSelector((state)=>state.darkmode.modestatus)
  console.log("the mode is",mode);

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to={"/"}>
            <img width={"185px"} src={!mode?Logo:Logo1} className="img-fluid" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor04"
            aria-controls="navbarColor04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor04">
            <ul className="navbar-nav ms-auto pe-5">
              <li className="btn border rounded ">
                <Link
                  to={"/add"}
                  className="d-flex align-items-center"
                  style={{
                    textDecoration: "none",
                    color:!mode ? "black" : "white",
                    fontWeight: "bold",
                  }}
                >
                 
                  Add Notes
                  <i className="fa-solid fa-add text-danger ms-2 "></i>
                </Link>
              </li>

              <li className="btn border rounded ms-3">
                <Link
                  to={"/home"}
                  className="d-flex align-items-center"
                  style={{
                    textDecoration: "none",
                    color: !mode ? "black" : "white",
                    fontWeight: "bold",
                  }}
                >
                 
                 View Notes <i
                    className="fa-solid fa-note-sticky ms-2"
                    style={{ color: "#f5ee2e" }}
                  ></i>
                </Link>
              </li>
            </ul>
            <i id="icon" onClick={()=>dispatch(darkmode())} className= {mode?'fa-solid fa-sun text-light me-2' : 'fa-solid fa-moon text-dark me-2'}></i>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
