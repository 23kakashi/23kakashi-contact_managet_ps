import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { MemoryRouter as Router } from "react-router-dom";

describe.only("contact form", () => {
  let form;

  beforeEach(() => {
    form = render(
      <Router>
        <ContactForm />
      </Router>
    );
  });

  beforeAll(() => {});

  describe("contact form", () => {
    it("should render correctly", () => {
      expect(screen.getByTestId("regForm")).toBeInTheDocument();
    });

    describe("name field", () => {
      it("should have name field rendered correctly", () => {
        expect(screen.getByTestId("name")).toBeInTheDocument();
      });

      it("should only accept alphabets and space", () => {
        //Arrange
        let nameInput = screen.getByTestId("name");
        //Act
        fireEvent.change(nameInput, {
          target: { value: "tapish123@# sharma" },
        });
        // //Assert
        expect(nameInput).toHaveValue("tapish sharma");
      });
    });

    describe("mobile field", () => {
      it("should have mobile field rendered correctly", () => {
        expect(screen.getByTestId("mobile")).toBeInTheDocument();
      });

      it("should only accept numbers", () => {
        //Arrange
        let mobileInput = screen.getByTestId("mobile");
        //Act
        fireEvent.change(mobileInput, { target: { value: "tapish123@ #" } });
        // //Assert
        expect(mobileInput).toHaveValue("123");
      });

      it("should only accept upto 10 digits", () => {
        //Arrange
        let mobileInput = screen.getByTestId("mobile");
        //Act
        fireEvent.change(mobileInput, {
          target: { value: "90012371037348962" },
        });
        // //Assert
        expect(mobileInput).toHaveValue("9001237103");
        expect(mobileInput).toHaveAttribute("maxLength", "10");
      });
    });

    describe("email field", () => {
      it("should have email field rendered correctly", () => {
        expect(screen.getByTestId("email")).toBeInTheDocument();
      });

      it("should have type email", () => {
        //Arrange
        let emailInput = screen.getByTestId("email");
        // //Assert
        expect(emailInput).toHaveAttribute("type", "email");
      });
    });

    describe("submission validation", () => {
      it("should have submit button rendered correctly", () => {
        expect(screen.getByTestId("submit")).toBeInTheDocument();
      });

      it("should not submit until name and mobile fields have proper value", () => {
        //Arrange
        const handleSubmit = jest.fn();
        const form = screen.getByTestId("regForm");
        //Act
        // assigning mockfucntion to form
        form.onsubmit = handleSubmit;
        fireEvent.submit(form)
        //Assert
        expect(handleSubmit).toHaveBeenCalledTimes(0);
      });

      it.only("should not submit until name and mobile fields have proper value", () => {
        //Arrange
        const handleSubmit = jest.fn();
        const nameInput = screen.getByTestId("name");
        const mobileInput = screen.getByTestId("mobile");
        const form = screen.getByTestId("regForm");
        //Act
        fireEvent.change(nameInput, {target: {value: "aniket"}})
        fireEvent.change(mobileInput, {target: {value: "9001237103"}})
        form.onsubmit = handleSubmit;
        fireEvent.submit(form)
        //Assert
        expect(handleSubmit).toHaveBeenCalled();
      });

      
    });
  });
});
