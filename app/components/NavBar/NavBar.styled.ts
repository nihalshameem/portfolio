import styled from "styled-components";

export const NavBarWrapper = styled.div`
  background-color: var(--background-color);
  padding: 0 15px;

  h5 {
    font-size: 22px;
    font-family: "Inter Light";
    font-weight: normal;
    a {
      color: var(--text-color);
    }
  }

  .nav-elements {
    font-size: 15px;
    a {
      color: var(--text-color);
    }
    .ant-btn:hover,
    .ant-btn:focus {
      background: transparent !important;
    }
  }
`;
