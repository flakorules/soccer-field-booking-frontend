import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth.action";

export const Navbar = () => {
  const { userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onHandleSignOutClick = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");

    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href=".">
            Soccer Field Booking APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/myBookings`} className="nav-link">
                  My Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/availableSlots`} className="nav-link">
                  Book Slot
                </Link>
              </li>
            </ul>

            <div className="justify-content-end ">
              <div className="justify-content-evenly">
                <button
                  className="btn btn-danger"
                  onClick={onHandleSignOutClick}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="row bg-secondary text-white">
        <div className="col">
          <h5 className="align-content-center m-3">Bienvenido {userName} </h5>
        </div>
      </div>
    </>
  );
};
