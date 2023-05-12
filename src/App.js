import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import Popup from "./pages/popup";
import NavBar from "./pages/navBar";
import Footer from "./pages/Footer";
import DocsPage from "./pages/DocsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/SignupPage";
import "./App.css";

function App() {
  const [connected, setConnected] = useState(false);
  const [check, setcheck] = useState(false);
  useEffect(() => {
    // check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      // check if MetaMask is connected
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setConnected(true);
          }
          setcheck(true);
        })
        .catch((error) => {
          console.log(error);
          setcheck(true);
        });
    }
  }, []);
  return (
    <div className="app-container">
      <Helmet>
        <style>{"body { background-color: #101012; }"}</style>
      </Helmet>
      {check && (
        <div>
          {!connected && (
            <Popup
              handelConnect={() => {
                setConnected(true);
              }}
            ></Popup>
          )}
          {connected && (
            <div>
              <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/dashbord" element={<Dashboard />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
