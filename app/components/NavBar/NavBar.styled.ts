import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: relative;
  display: block;
  h5 {
    padding: 20px;
    font-size: 22px;
    font-family: "Inter Light";
    font-weight: normal;
    a {
      color: var(--text-color);
    }
  }

  .desktop-menu {
    display: block;
  }

  .mobile-menu {
    display: none;
  }
  .ant-menu {
    background-color: var(--background-color) !important;
  }

  .nav-elements {
    font-size: 15px;
    margin-right: 10px;
    a {
      color: var(--text-color);
      padding: 0 20px;
    }
    .ant-btn:hover,
    .ant-btn:focus {
      background: transparent !important;
    }
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
  @media (max-width: 768px) {
    padding: 20px;
    .desktop-menu {
      display: none;
    }

    .mobile-menu {
      display: block;
    }
    .logo {
      padding: 0;
    }
  }
`;
