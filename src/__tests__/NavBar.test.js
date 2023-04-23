import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  expect(container.querySelectorAll("a")).toHaveLength(3);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i)).toHaveTextContent("Home");
  expect(screen.queryByText(/about/i)).toHaveTextContent("About");
  expect(screen.queryByText(/projects/i)).toHaveTextContent("Projects");
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.getByText(/home/i)).toHaveAttribute("href", "#home");
  expect(screen.getByText(/about/i)).toHaveAttribute("href", "#about");
  expect(screen.getByText(/projects/i)).toHaveAttribute("href", "#projects");
});
