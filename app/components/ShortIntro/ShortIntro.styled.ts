import styled from "@/app/utils/styled-component-init";

export const ShortIntroWrapper = styled.div`
  min-height: 90vh;
  margin: 0 auto;
  padding: 10px;
  align-items: center;
  display: flex;
  background-color: var(--background-color);
  .intro-pic {
    width: 100px;
    height: auto;
  }
  .intro {
    h4 {
      font-size: 40px;
      font-family: "Inter SemiBold";
      margin-top: 0;
    }
    p {
      font-size: 15px;
      font-family: "Inter SemiBold";
      color: var(--secondary-text-color);
    }
  }

  @media (max-width: 768px) {
    .intro-row {
      flex-direction: column-reverse;
    }
    min-height: 110vh;
    padding: 10px;
  }
`;
