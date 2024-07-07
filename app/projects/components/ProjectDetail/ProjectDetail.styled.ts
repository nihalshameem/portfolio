import styled from "@/app/utils/styled-component-init";

export const ProjectDetailWrapper = styled.div`
  font-family: "Inter Regular";
  font-size: 18px;
  color: var(--primary-text-color);
  h4 {
    font-family: "Inter Bold";
    font-size: 22px;
    color: var(--primary-text-color);
    margin: 20px 0;
  }
  h5 {
    font-size: 18px;
    color: var(--secondary-text-color);
    margin: 20px 0;
    span {
      font-family: "Inter SemiBold";
    }
  }
  .overview {
    font-size: 15px;
    font-weight: normal;
    span {
      font-family: "Inter SemiBold";
    }
    li {
      margin: 20px 0;
    }
  }
  .main-img {
    border-radius: 10px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
  }
  .content {
    font-family: "Inter Regular";
    font-size: 18px;
    color: var(--primary-text-color);
    margin-top: 20px;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    // max-height: 300px;
    margin: 40px 0;
    transition: 0.2s;
    &:hover {
      transform: scale(1.05);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%; /* Start outside the left edge */
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transition: left 0.3s ease-in-out;
    }
    &:hover::after {
      left: 100%; /* Move to outside the right edge */
    }
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`;
