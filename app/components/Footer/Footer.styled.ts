import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 30px 50px;
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
    text-align: right;
    margin-bottom: 30px;
    h4 {
      font-family: "Inter SemiBold";
      font-size: 18px;
    }
  }
  .info-section-details {
    text-align: right;
    a {
      font-family: "Inter Medium";
      font-size: 16px;
      color: var(--secondary-text-color);
    }
  }
`;
