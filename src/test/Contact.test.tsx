import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/Dashboard";
import ContactForm from "../components/ContactForm";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// test("renders learn react link", () => {
//   render(<Contact />);
//   const heading = screen.getByText(/Contact/);
//   expect(heading).toBeInTheDocument();
// });

describe.only("contact form", () => {
  render(
    <Router>
      <ContactForm />
    </Router>
  );
  beforeEach(() => {
    // form =
  });

  beforeAll(() => {});
  describe("registration form", () => {
    // it("should have username field rendered correctly", () => {
    //   expect(screen.getByTestId("name")).toBeInTheDocument();
    // });
    // it.only("Shouldnot allow numeric fields",()=>{
    //     //Arrange
    //     const inputField= screen.getByTestId("name")
    //     //Act
    //   userEvent.type(inputField,{target
    //     :{value:10}})
    //     //Assertion
    //     expect(inputField).toHaveValue(null);
    // });

    // it('should have a password field', () => {
    //     //Assertion
    //     expect('').toBeTruthy();
    // });

    // it('should have atleast 1 special character', () => {

    // });

    // it('should have min length of 10 chars', () => {

    // })

    // it('should submit', ()=> {
    // //Arrange
    // const form = screen.getByTestId("regForm")
    // //Act
    // form.
    // //Assert
    
    // })
  });
});
