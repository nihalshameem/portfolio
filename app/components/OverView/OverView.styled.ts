import styled from "@/app/utils/styled-component-init";

export const OverViewWrapper = styled.div`
  background: var(--background-color);
  position: relative;
  padding: 10px;
  min-height: 50vh;
  .marginalble-col {
    margin-top: 50px;
  }
  h4 {
    font-family: "Inter SemiBold";
    font-size: 30px;
    margin-bottom: 30px;
  }
  .card {
    margin: 10px 0;
    .icons {
      font-size: 20px;
    }
    .title {
      font-family: "Inter Regular";
      font-size: 20px;
      margin: 10px 0;
    }
    .content {
      font-family: "Inter Medium";
      font-size: 15px;
      color: var(--secondary-text-color);
    }
  }
  @media (max-width: 767.9px) {
    .marginalble-col {
      margin-top: 0;
    }
  }
`;
