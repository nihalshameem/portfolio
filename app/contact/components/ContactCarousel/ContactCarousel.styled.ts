import styled from "@/app/utils/styled-component-init";

export const ContactCarouselWrapper = styled.div`
  overflow: hidden;
  border-radius: 5px !important;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  .carousel {
    width: 100%;
    height: auto;
    .slick-list {
      border-radius: 5px;
    }

    .carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
  }

  .carousel-item img {
    height: 500px;
    // width: 400px !important;
    object-fit: cover;
    object-position: center;
  }
`;
