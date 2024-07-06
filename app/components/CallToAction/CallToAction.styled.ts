import { Space } from "antd";

import styled from "@/app/utils/styled-component-init";

export const CallToActionWrapper = styled(Space)`
  padding: 10px;
  min-height: 100px;
  width: 100%;
  div {
    width: 91.5%;
    margin: 0 auto;
  }
  h4 {
    font-family: "Inter SemiBold";
    font-size: 30px;
    margin: 10px 0;
    display: block;
  }
  p {
    margin: 40px 0;
    font-family: "Inter SemiBold";
    font-size: 30px;
    color: var(--secondary-text-color);
    a {
      color: #007bff;
    }
  }
  @media (max-width: 991.9px) {
    div {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    div {
      width: 100%;
    }
  }
`;
