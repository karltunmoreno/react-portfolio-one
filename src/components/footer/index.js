import React from "react";

function Footer() {
  return (
    <div className="mt-auto">
      <footer className="d-flex justify-content-around p-2">
        <h4 className="my-auto text-center fw-bold">REACH OUT!</h4>
        <ul className="list-inline my-auto text-center">
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://github.com/karltunmoreno">GitHub</a></li>
          <li className="list-inline-item fw-bold"><a className="text-dark" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karltun-moreno-my-vision-is-to-always-excel-empower-and-inspire-0a910a46/">LinkedIn</a></li>
          </ul>
      </footer>
    </div>
  );
}

export default Footer;