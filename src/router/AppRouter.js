import React from "react";
import { Navbar } from "../components/ui/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MyBookings } from "../pages/private/MyBookings";
import { AvailableSlots } from "../pages/private/AvailableSlots";
import { Login } from "../pages/public/Login";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";
import Modal from "react-modal";

export const AppRouter = () => {
  const { userId } = useSelector((state) => state.auth);
  const { showLoading } = useSelector((state) => state.ui);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Router>
      <Modal isOpen={showLoading} style={customStyles}>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </Modal>

      {!!userId && <Navbar />}
      <div className="container">
        <Switch>
          <PrivateRoute
            exact
            path="/myBookings"
            component={MyBookings}
            isAuthenticated={!!userId}
          />

          <PrivateRoute
            exact
            path="/availableSlots"
            component={AvailableSlots}
            isAuthenticated={!!userId}
          />

          <Route path="/availableSlots" component={AvailableSlots} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
