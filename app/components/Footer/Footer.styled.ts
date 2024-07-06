import styled from "@/app/utils/styled-component-init";

export const FooterWrapper = styled.div`
  padding: 10px;
  min-height: 300px;
  background: var(--background-color);
  position: relative;

  .social-media {
    font-family: "Inter Regular";
    font-size: 30px;
    margin-bottom: 30px;
  }
  .social-media-links {
    font-size: 20px;
    font-family: "Inter Regular";
    font-size: 20px;
  }
  .info-section {
    display: block;
    text-align: right;
    margin-bottom: 30px;
    h4 {
      font-family: "Inter SemiBold";
      font-size: 18px;
    }
  }
  .info-section-col {
    justify-content: flex-end;
    display: flex;
  }
  .info-section-details {
    text-align: right;
    a {
      font-family: "Inter Medium";
      font-size: 16px;
      color: var(--secondary-text-color);
    }
  }

  @media (max-width: 575.9px) {
    .social-media {
      h4 {
        text-align: center;
      }
    }
    .social-media-links-col {
      text-align: center;
    }
    .info-section-details {
      text-align: center;
    }
    .info-section-col {
      justify-content: center;
    }
    .info-section {
      display: none;
    }
  }
`;
