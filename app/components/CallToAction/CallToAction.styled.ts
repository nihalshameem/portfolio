import { Space } from "antd";
import styled from "styled-components";

export const CallToActionWrapper = styled(Space)`
  padding: 10px 50px;
  min-height: 500px;
  h4 {
    font-family: "Inter SemiBold";
    font-size: 30px;
    margin: 10px 0;
    width: 100%;
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
`;
