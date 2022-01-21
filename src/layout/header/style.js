import styled from "styled-components";
export const Style = styled.section`
  background: #3bd3d3f0;
  height: 49px;
  .col-left {
    margin-top: 10px;
    text-transform: capitalize;
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
  }
  .col-center {
    /* margin-top: 15px; */
    /* text-align: center; */
    font-size: 10px;
    color: #ffffff;
    & span {
      text-transform: uppercase;
      padding: 0 14px;
    }
  }
  .col-right {
    margin-top: 10px;
    text-transform: capitalize;
    font-size: 20px;
    color: #ffffff;
  }
  .site-card-wrapper {
    padding: 50px;
  }
`;
export default Style;
