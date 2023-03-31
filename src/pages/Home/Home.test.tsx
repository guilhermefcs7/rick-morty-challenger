import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "./Home";

function makeSut() {
  render(<Home />);
}

describe("Home", () => {
  test("should title to be in the document", () => {
    makeSut();

    const title = screen.getByText("Rick And Morty Challenger");

    expect(title).toBeInTheDocument();
  });

  test("Should description to be in the document", () => {
    makeSut();

    const description = screen.getByText(
      "Discover more about the universe of rick and morty"
    );

    expect(description).toBeInTheDocument();
  });

  test("Should filter input to be in the document", () => {
    makeSut();

    const input = screen.getByPlaceholderText("Search for your character");
    expect(input).toBeInTheDocument();
  });

  test("Should search button to be in the document", () => {
    makeSut();

    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
  });

  test("Should select input to be in the document", () => {
    makeSut();

    const select = screen.getByLabelText("Search by status:");

    expect(select).toBeInTheDocument();
  });

  test("Should ensure the input select contains your given values", () => {
    makeSut();

    const select = screen.getByLabelText("Search by status:");

    expect(select).toHaveValue("");

    const options = screen.getAllByRole("option");

    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent("Status");

    expect(options[1]).toHaveTextContent("Alive");

    expect(options[2]).toHaveTextContent("Dead");

    expect(options[3]).toHaveTextContent("Unknown");
  });

  test("Should ensure the loadMoreButton in the document", async () => {
    makeSut();

    const isLoading = false;

    if (isLoading) {
      const loadMoreButton = await waitFor(() =>
        screen.getByRole("button", {
          name: "Load More",
        })
      );

      expect(loadMoreButton).toBeInTheDocument();
    }
  });
});
