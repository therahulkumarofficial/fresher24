import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"; // Import Router and related components
import Nav from "./components/Nav"; // Adjust the path as necessary
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS CSS
import 'material-icons/iconfont/material-icons.css'; // Import Material Icons CSS
import EventScheduleScreen from "./components/EventScheduleScreen"; // Import your EventScheduleScreen
import EventRegisterScreen from "./components/EventRegisterScreen"; // Import your EventRegisterScreen
import Header from "./components/Header";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-[#1e1e2e] text-white">
        <Nav />
        <main className="relative isolate px-6 lg:px-8 flex justify-center items-center m-auto min-h-screen bg-[#040024]">
          {/* Background Gradient */}
          <div
            className="absolute inset-x-0 px-20 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl"
            aria-hidden="true"
          >
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[64%] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#a8abce] to-[#a9afde] opacity-10" />
          </div>

          {/* Routing Setup */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="mx-auto max-w-2xl pt-40 pb-20 overflow-hidden" data-aos="fade-in">
                  {/* Link Button */}
                  <div className="flex justify-center text-center mb-9">
                    <a
                      href="https://nalandacollege.ac.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="link-button inline-flex items-center text-gray-300 px-4 py-3 rounded-full border border-white/10 hover:border-white/20 transition font-medium"
                    >
                      Nalanda College, Biharsharif, Nalanda
                      <span className="material-icons ml-2">open_in_new</span>
                    </a>
                  </div>

                  {/* Heading and Description */}
                  <div className="text-center mb-8">
                    <h1 className="text-6xl md:text-6xl font-bold tracking-tight text-lime-50">
                      Fresher's 2024
                    </h1>
                    <p className="font-medium text-lg  leading-8 text-gray-400 mt-1 md:mt-3 mb-4">
                      Multiple Universes, One Extravaganza.
                    </p>
                    <NavLink
                      to="/event/register"
                      className="register-button inline-flex items-center justify-center px-6 py-2 bg-white text-black tracking-wide font-bold text-lg rounded-lg shadow-lg border border-gray-400 hover:bg-gray-100 transition"
                    >
                      <span className="material-icons mr-2">app_registration</span>
                      Register for Events
                    </NavLink>
                  </div>

                  {/* Image */}
                  <div className="image-container mt-8">
                    <img
                      src="/rahul.png" // Ensure this path is correct
                      alt="Fresher's 2024 Main Image"
                      className="rounded-xl mx-auto max-w-full"
                      width={720}
                      height={720}
                    />
                  </div>
                </div>
              }
            />
            <Route path="/event/schedule" element={<EventScheduleScreen />} />
            <Route path="/event/register" element={<EventRegisterScreen />} />
            <Route path="/" element={<App />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
