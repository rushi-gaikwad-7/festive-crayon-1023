import styled from "styled-components";

export const NavDiv = styled.nav`
  background: #f7f8f7;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  z-index: 100;
  position: relative;

  .navbarCategory {
    flex: 0.2;
  }

  .navbarCategory,
  .navbarRegister {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      text-align: center;
      padding: 1rem 0;
      width: 100%;
      font-weight: 600;
      cursor: pointer;

      .dropdown {
        position: absolute;
        top: 90%;
        left: 0;
        display: none;
        justify-content: center;
        flex-direction: column;
        background: #fff;
        width: 100%;
        align-items: flex-start;
      }
    }
    & :hover {
      background: #fff;
    }
  }

  .link:hover .dropdown {
    display: flex;
  }

  .serachDiv {
    border-radius: 25px;
    background: #ecedeb;
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0.75rem;

    input {
      border-radius: 25px;
      background: #ecedeb;
      padding: 0.25rem;
      width: 100%;
      outline: none;
      border: none;
      padding-left: 0.751rem;
    }
  }

  .navbarRegister {
    flex: 0.3;
    display: flex;

    .link {
      flex: 0.5;
    }
    .link:nth-child(2) {
      flex: 1;
    }
  }
`;