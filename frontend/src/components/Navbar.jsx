import React from "react";
import styled from "styled-components";
function Navbar() {
  return (
    <>
      <NavContainer>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              TFI-GRUPO 4
            </a>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
              <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="#" aria-current="page">
                    Home <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    QUIENES SOMOS
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CATEGORIAS
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="#">
                      AVES
                    </a>
                    <a class="dropdown-item" href="#">
                      MAMIFEROS
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  nav {
    background-color: aqua;
  }
`;
