import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { MemoryRouter as Router } from "react-router-dom";
import App from "../App";

// describe("Should render navbar", () => {
//   it("Should render Navbar component", () => {
//     render(
//       <Router>
//         <Navbar />
//       </Router>
//     );
//   });

//   it("Should have Contact Manager, add and contact button", () => {
//     render(
//       <Router>
//         <Navbar />
//       </Router>
//     );
//     expect(screen.getByTestId("contactManager")).toBeInTheDocument();
//     expect(screen.getByTestId("add")).toBeInTheDocument();
//     expect(screen.getByTestId("contacts")).toBeInTheDocument();
//   });

//   it("Should have navbar on all routes", () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//     expect(screen.getByTestId("navbar")).toBeInTheDocument();
//     fireEvent.click(screen.getByTestId("add"));
//     expect(screen.getByTestId("navbar")).toBeInTheDocument();
//     fireEvent.click(screen.getByTestId("contacts"));
//     expect(screen.getByTestId("navbar")).toBeInTheDocument();
//   });
// });

// describe("Routing should work for add and contacts link", () => {
//   it("Add button Should redirect to add_contact route", () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//     fireEvent.click(screen.getByTestId("add"));
//     expect(screen.getByTestId("submit")).toBeInTheDocument();
//   });

//   it("contact button Should redirect to dashboard('/') route", () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//     fireEvent.click(screen.getByTestId("add"));
//     fireEvent.click(screen.getByTestId("contacts"));
//     expect(screen.getByTestId("dashboardContainer")).toBeInTheDocument();
//   });
// });
