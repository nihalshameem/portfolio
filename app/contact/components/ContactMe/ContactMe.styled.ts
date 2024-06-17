import styled from "styled-components";

export const ContactMeWrapper = styled.div`
  min-height: calc(100vh - 140px);
  margin: 40px;

  .form-div {
    // width: 80%;
    padding: 0 40px;

    h4 {
      font-family: "Inter Bold";
      font-size: 40px;
      color: var(--primary-text-color);
      margin-bottom: 5px;
      padding-top: 0;
    }

    h5 {
      font-family: "Inter SemiBold";
      font-size: 18px;
      color: var(--secondary-text-color);
      margin: 10px 0;
      margin-bottom: 10px;
    }

    form {
      // width: 90%;
    }

    input {
      height: 35px;
    }

    button {
      width: 100%;
      background-color: var(--inverse-background-color);
      color: var(--inverse-text-color);
      border-color: var(--inverse-background-color);
      margin-top: 30px;
      height: 40px;
    }
  }

  .carousel {
    border-radius: 5px !important;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 400px !important;

    .slick-list {
      border-radius: 5px;
    }

    img {
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      height: 500px;
      width: 400px !important;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;
