import styled from "@/app/utils/styled-component-init";

export const CircledImageWrapper = styled.div`
  .circle-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 0;
    margin: 0 auto;

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
  @media (max-width: 768px) {
    .circle-container {
      margin: 0 auto;
    }
  }
`;
