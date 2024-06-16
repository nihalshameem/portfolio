import styled from "@/app/utils/styled-component-init";

export const ExperienceWrapper = styled.div`
//   margin: 40px 0;
  h4 {
    font-family: "Inter Bold";
    font-size: 30px;
    color: var(--primary-text-color);
    text-align: center;
    margin: 40px;
  }
  .ant-timeline-item-right {
    .timelines {
      h4 {
        text-align: right !important;
      }
      text-align: right !important;
      .ant-list-item {
        justify-content: end;
      }
    }
  }
  .ant-timeline-item-left {
    .timelines {
      h4 {
        text-align: left !important;
      }
      text-align: left !important;
      .ant-list-item {
        justify-content: start;
      }
    }
  }
  .ant-timeline-item-content {
    strong {
      padding: 10px;
    }
  }
  .timelines {
    display: block;
    padding: 10px;
    h4 {
      font-family: "Inter Bold";
      font-size: 20px;
      color: var(--primary-text-color);
      margin: 10px 0;
    }
    h5 {
      font-family: "Inter SemiBold";
      font-size: 18px;
      color: var(--secondary-text-color);
      margin: 10px 0;
    }
    .ant-list-item {
      font-family: "Inter Regular";
      font-size: 15px;
      color: var(--primary-text-color);
      margin: 10px 0;
      border-block-end: none;
    }
  }
`;
