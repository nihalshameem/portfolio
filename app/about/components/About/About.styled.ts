import styled from "@/app/utils/styled-component-init";

export const AboutWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .about {
    max-width: 75%;
    padding: 10px 20px;
    h4.title {
      font-family: "Inter Bold";
      font-size: 50px;
      color: var(--primary-text-color);
    }
    p.sub-title {
      margin-top: 10px;
      font-family: "Inter Regular";
      font-size: 20px;
      color: var(--secondary-text-color);
    }
    p.content {
      margin-top: 10px;
      font-family: "Inter Medium";
      font-size: 15px;
      color: var(--primary-text-color);
      // max-width: 80%;
    }
  }
  img.about-img {
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  .image-section {
    justify-content: center;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 991.9px) {
    .about {
      max-width: 100%;
    }
  }
`;
