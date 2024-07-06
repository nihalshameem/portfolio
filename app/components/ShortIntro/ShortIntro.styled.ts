import styled from "@/app/utils/styled-component-init";

export const ShortIntroWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px 50px;
  align-items: center;
  display: flex;
  background-color: var(--background-color);
  .small-d {
    display: none;
  }
  .not-small-d {
    display: block;
  }
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
    padding: 10px;
  }

  @media (max-width: 500px) {
    .small-d {
      display: block;
    }
    .not-small-d {
      display: none;
    }
  }
`;
