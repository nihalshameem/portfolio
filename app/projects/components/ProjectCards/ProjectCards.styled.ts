import styled from "@/app/utils/styled-component-init";

export const ProjectCardsWrapper = styled.div`
  transition: 0.5s;
  margin-bottom: 40px;
  &:hover {
    transform: scale(1.03);
    transition: 0.5s;
    background: var(--card-gradient);
    backdrop-filter: blur(1px);
    border-radius: 10px;
    box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.2);
    img {
      box-shadow: none;
    }
  }
  max-width: 500px;
  padding: 20px;
  .title {
    font-family: "Inter Medium";
    font-size: 18px;
    color: var(--primary-text-color);
    padding: 10px 0;
    margin: 10px 0;
    text-transform: capitalize;
    &:hover {
      color: var(--primary-text-color);
    }
  }
  .sub-title {
    font-family: "Inter Regular";
    font-size: 15px;
    color: var(--secondary-text-color);
    margin: 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 3em; /* 2 lines * line-height (1.5em in this case) */
    line-height: 1.5em;
    text-transform: capitalize;
  }
  img {
    width: inherit;
    max-height: 300px;
    border-radius: 10px;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    object-position: center;
    transition: 0.5s;
  }
`;
