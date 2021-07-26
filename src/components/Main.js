import axios from "axios";
import React, { Component } from "react";
import AddFav from "./AddFav";
import { Card } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      url: process.env.REACT_APP_SERVER_URL,
      showData: false,
    };
  }

  componentDidMount = async () => {
    axios.get(`${this.state.url}/api`).then((res) => {
      this.setState({
        listData: res.data,
        showData: true,
      });
    });
  };
  render() {
    return (
      <>
        {this.state.showData &&
          this.state.listData.map((item, indx) => {
            return (
              <>
                <Card
                  style={{
                    width: "18rem",
                    margin: "1.5rem",
                    display: "inline-block",
                  }}
                >
                  <Card.Img variant="top" src={item.strDrinkThumb} alt="" />
                  <Card.Body>
                    <Card.Title>{item.strDrink}</Card.Title>
                    <Card.Text>{item.idDrink}</Card.Text>
                    <AddFav
                      strDrink={item.strDrink}
                      strDrinkThumb={item.strDrinkThumb}
                      idDrink={item.idDrink}
                    />
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </>
    );
  }
}

export default Main;
