import React from "react";
import "../../css/footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        &copy; {new Date().getFullYear()} Copyright: hrms.kodlamaio
      </div>
    </div>
  );
}
