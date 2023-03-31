import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import CharacterDetails from "./[id]";

// Next/router depende do contexto do servidor e cliente. Como os testes rodam no ambiente Node.js, é necessário simular um contexto de roteamento.

describe("CharacterDetails", () => {
  test("Should render CharacterDetails", () => {
    const mockRouter = {
      route: "/character/1",
      query: { id: "1" },
      asPath: "/character/1",
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      isFallback: false,
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };

    render(
      <RouterContext.Provider value={mockRouter as any}>
        <CharacterDetails />
      </RouterContext.Provider>
    );
  });
});
