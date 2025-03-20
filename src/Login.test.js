import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Login } from "../Login";

describe("Login Component", () => {
  test("Renderelés ellenőrzése", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText(/Karácsonyi Bejelentkezés/i)).toBeInTheDocument();
  });

  test("Űrlap elemek kirajzolásának ellenőrzése", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Felhasználónév:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Jelszó:/i)).toBeInTheDocument();
    
    expect(screen.getByRole("button", { name: /Bejelentkezés/i })).toBeInTheDocument();
  });

  test("Felhasználónév és jelszó beírása", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = screen.getByPlaceholderText(/felhasználónév/i);
    const passwordInput = screen.getByPlaceholderText(/jelszó/i);

    await userEvent.type(usernameInput, "tesztfelhasználó");
    await userEvent.type(passwordInput, "tesztjelszó");

    expect(usernameInput).toHaveValue("tesztfelhasználó");
    expect(passwordInput).toHaveValue("tesztjelszó");
  });
});