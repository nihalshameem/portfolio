import styled from "@/app/utils/styled-component-init";

export const ContactMeWrapper = styled.div`
  padding: 20px;

  .form-div {
    max-width: 500px;
    margin: 0 auto;

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

    input {
      height: 35px;
    }

    .contact-form {
      .ant-form-item {
        margin-bottom: 15px;
      }

      .submitBtn {
        width: 100%;
        background-color: var(--inverse-background-color);
        color: var(--inverse-text-color);
        border-color: var(--inverse-background-color);
        margin-top: 30px;
        height: 40px;

        &:hover {
          background-color: #40a9ff;
        }
      }
    }
  }

  .carousel-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    .form-div,
    .carousel-col {
      max-width: 100%;
      margin: 0 auto;
      padding: 10px;
    }

    .carousel-col {
      margin-top: 20px;
    }
  }
`;
