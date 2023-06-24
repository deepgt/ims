import React, { useState, useEffect } from "react";
import './ErrorPopup.css'

function ErrorPopup({ errorMessage }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      setShowPopup(true);

      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  return (
    <div className={`error-popup ${showPopup ? "show" : ""}`}>
      <p>{errorMessage}</p>
    </div>
  );
}

export default ErrorPopup;