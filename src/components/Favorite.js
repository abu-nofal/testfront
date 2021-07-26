import React, { Component } from "react";
import axios from "axios";
import UpdateFav from "./UpdateFav";
import { Card,Button } from "react-bootstrap";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      url: process.env.REACT_APP_SERVER_URL,
      showData: false,
    };
  }

  componentDidMount = async () => {
    axios.get(`${this.state.url}/fav`).then((res) => {
      this.setState({
        listData: res.data,
        showData: true,
      });
    });
  };

  deleteFav = async (item) => {
    const id = item._id;

    axios.delete(`${this.state.url}/fav/${id}`).then((res) => {
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
                    <UpdateFav
                      strDrink={item.strDrink}
                      strDrinkThumb={item.strDrinkThumb}
                      idDrink={item.idDrink}
                      id={item._id}
                      listData={this.state.listData}
                    />
                   
                    <Button variant="danger"onClick={() => {
                        this.deleteFav(item);
                      }} >delete</Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </>
    );
  }
}

export default Favorite;
