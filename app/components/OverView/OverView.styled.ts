import styled from "styled-components";

export const OverViewWrapper = styled.div`
  background: var(--background-color);
  position: relative;
  padding: 10px 50px;
  h4 {
    font-family: "Inter SemiBold";
    font-size: 30px;
    margin: 10px 0;
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
`;
