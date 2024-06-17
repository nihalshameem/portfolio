import styled from "styled-components";

export const ShortIntroWrapper = styled.div`
  height: calc(100vh - 100px);
  padding: 10px 50px;
  align-items: center;
  display: flex;
  background-color: var(--background-color);
  .intro-pic {
    width: 100px;
    height: auto;
  }
  .intro {
    width: 50%;
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
  .circle-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    // overflow: hidden;
    z-index: 0;

    .circle {
      width: 200px;
      height: 200px;
      background-color: var(--secondary-background-color);
      z-index: 1;
      position: absolute;
      border-radius: 50%;
      overflow: hidden;
    }

    .circle-image {
      position: absolute;
      z-index: 2;
      top: -32px;
      width: 216px;
      height: 145px;
      object-fit: cover;
      object-position: top;

      &.innner {
        height: 235px;
      }
    }
  }
`;
