import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";

export default function Dropdown({ header, children }) {
  const [isDrop, setIsDrop] = useState(false);
  const dropdownRef = useRef(null);

  const togglePopup = () => {
    setIsDrop(!isDrop);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <div onClick={togglePopup} className="dropdown__header">
        {header}
      </div>

      {isDrop && <div onClick={togglePopup} className="dropdown__body">{children}</div>}
    </div>
  );
}
