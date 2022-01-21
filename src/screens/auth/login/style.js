import styled from "styled-components";
export const Style = styled.section`
  overflow: hidden;
  .col-right {
    margin-top: 60px;
    .login-form-forgot {
      color: black;
      display: block;
      text-align: center;
    }
  }

  .col-left {
    background: #3bd3d3f0;
    height: 100vh;
    position: relative;
    .col-left-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .col-left-text1 {
        text-transform: capitalize;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
      }
      .col-left-text2 {
        text-transform: uppercase;
        font-size: 10px;
        color: #ffffff;
      }
    }
  }
`;
export default Style;
