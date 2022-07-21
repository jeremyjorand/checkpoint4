import styled from "styled-components";

export default styled.section`
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 5rem;
    margin-top: 10vh;
    text-align: center;
  }
  .mainProductManagement {
    display: flex;
    justify-content: space-evenly;

    .left {
      margin-top: 2rem;
      height: 20rem;
      width: 25vw;
      border-radius: 1rem;
      border: solid 2px white;
      background-color: #333333ba;
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 12rem;
        input {
          width: 90%;
          margin: 0.5rem;
          height: 2rem;
        }
        .buttonLeft {
          background-color: #333;
          color: #fff;
          cursor: pointer;
          border: #fff solid 1px;
          font-size: 1rem;
        }
      }
    }
    .center {
      margin-top: 2rem;
      height: 20rem;
      border-radius: 1rem;
      border: solid 2px white;
      background-color: #333333ba;
      width: 25vw;
      section {
        height: 12rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        select {
          width: 90%;
          margin: 0.5rem;
          height: 2rem;
        }
        input {
          width: 90%;
          margin: 0.5rem;
          height: 2rem;
        }
        .buttonCenter {
          background-color: #333;
          color: #fff;
          cursor: pointer;
          border: #fff solid 1px;
          font-size: 1rem;
        }
      }
    }
    .right {
      margin-top: 2rem;
      height: 20rem;
      width: 25vw;
      border-radius: 1rem;
      border: solid 2px white;
      background-color: #333333ba;
    }
    h3 {
      font-size: 2rem;
      margin: 4vh 0;
      text-align: center;

      padding: 0 5rem;
    }
  }

  .containerTable {
    width: 81vw;
    height: 12rem;
    overflow: scroll;
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
    h2 {
      font-size: 3rem;
      margin-top: 10vh;
      text-align: center;
    }
    .containerTable {
      width: 93vw;
      margin: auto;
      height: 12rem;
      overflow: scroll;
      margin-top: 3rem;
      table {
        width: 90vw;
        margin: auto;
        thead {
          background-color: #333;

          color: #fff;
          th {
            height: 2rem;
            width: 50%;
            font-size: 1.5rem;
            border: #ffffff solid 1px;
          }
        }
      }
      .productList {
        margin: 0;
        width: 90vw;
        margin: auto;
        tbody {
          background-color: #ffffffd5;
          border: #333 solid 1px;
          color: #333;
        }
        td {
          height: 2rem;
          width: 50%;
          text-align: center;
          font-size: 1.5rem;
        }

        td {
          border: 1px solid #333;
        }
      }
    }
    .mainProductManagement {
      display: flex;
      flex-direction: column;
      align-items: center;
      .left {
        margin-top: 2rem;
        height: 15rem;
        width: 80vw;
        border-radius: 1rem;
        border: solid 2px white;
        background-color: #333333ba;
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 12rem;
          input {
            width: 90%;
            margin: 0.5rem;
            height: 2rem;
          }
          .buttonLeft {
            background-color: #333;
            color: #fff;
            cursor: pointer;
            border: #fff solid 1px;
            font-size: 1rem;
          }
        }
      }
      .center {
        margin-top: 2rem;
        height: 20rem;
        border-radius: 1rem;
        border: solid 2px white;
        background-color: #333333ba;
        width: 80vw;
        section {
          height: 12rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          select {
            width: 90%;
            margin: 0.5rem;
            height: 2rem;
          }
          input {
            width: 90%;
            margin: 0.5rem;
            height: 2rem;
          }
          .buttonCenter {
            background-color: #333;
            color: #fff;
            cursor: pointer;
            border: #fff solid 1px;
            font-size: 1rem;
          }
        }
      }
      .right {
        margin-top: 2rem;
        height: 20rem;
        width: 80vw;
        border-radius: 1rem;
        border: solid 2px white;
        background-color: #333333ba;
        margin-bottom: 2rem;
      }
      h3 {
        font-size: 2rem;
        margin: 4vh 0;
        text-align: center;

        padding: 0 2rem;
      }
    }
  }
`;
