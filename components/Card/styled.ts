import styled from "@emotion/styled";

export const Style = styled.div`
  .card {
    width: 175px;
    font-size: 12px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .card--image {
    width: 100%;
    border-radius: 9px;
  }

  .gray {
    color: #918e9b;
  }

  .bold {
    font-weight: bold;
  }

  .card--title {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card--stats {
    display: flex;
    align-items: center;
  }

  .card--star {
    height: 14px;
  }

  .card--price {
    margin-top: auto;
  }

  .card--badge {
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: white;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
    z-index: 2;
  }
`;
export default Style;
