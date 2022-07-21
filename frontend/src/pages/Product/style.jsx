import styled from "styled-components";

export default styled.section`
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 5rem;
    margin-top: 10vh;
    text-align: center;
  }
  .containInput {
    display: flex;
    margin-top: 3rem;
    input {
      width: 40vw;
      height: 3rem;
      margin: auto;
    }
    select {
      width: 40vw;
      height: 3rem;
      margin: auto;
    }
  }
  .containerTable {
    margin-top: 3rem;
    table {
      width: 80vw;
      margin: auto;
      thead {
        background-color: #333;

        color: #fff;
        th {
          height: 2rem;
          width: 25rem;
          font-size: 1.5rem;
          border: #ffffff solid 1px;
        }
      }
    }
    .productList {
      margin: 0;
      width: 80vw;
      margin: auto;
      tbody {
        background-color: #ffffffd5;
        border: #333 solid 1px;
        color: #333;
      }
      td {
        height: 2rem;
        width: 25rem;
        text-align: center;
        font-size: 1.5rem;
      }

      td {
        border: 1px solid #333;
      }
    }
  }
  @media screen and (max-width: 760px) {
  }
`;
