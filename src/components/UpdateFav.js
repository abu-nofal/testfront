import axios from "axios";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class UpdateFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: this.props.listData,
      url: process.env.REACT_APP_SERVER_URL,
      show: false,
      strDrink:"",
      strDrinkThumb:"",
      idDrink:""

    };
  }
  showModel=()=>{
      this.setState({
          show:!this.state.show
      })
  }
  inputName=(e)=>{
    this.setState({
        strDrink:e.target.value
    })
  }
  inputImg=(e)=>{
    this.setState({
        strDrinkThumb:e.target.value
    })
  }
  inputDec=(e)=>{
    this.setState({
        idDrink:e.target.value
    })
  }

  updateFav=async(e)=>{
    //   e.preventDefault();
     const reqBody={
        strDrink:this.state.strDrink,
        strDrinkThumb:this.state.strDrinkThumb,
        idDrink:this.state.idDrink,
      }
      axios.put(`${this.state.url}/fav/${this.props.id}`,reqBody).then(res=>{
        this.setState({
            listData:res.data,
            show:false
        })
      })
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={()=>{this.showModel()}}>
          update
        </Button>

        <Modal show={this.state.show} onHide={()=>{this.showModel()}}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(e)=>{this.updateFav(e)}}>

                <input type="text" onChange={(e)=>{this.inputName(e)} } placeholder={this.props.strDrink} required/>

                <br/>
                <br/>
                <input type="text" onChange={(e)=>{this.inputImg(e)} } placeholder={this.props.strDrinkThumb} required/>
                <br/>
                <br/>
                <input type="text" onChange={(e)=>{this.inputDec(e)} } placeholder={this.props.idDrink} required/>
                <br/>
                <br/>
                <Button variant="primary" type="submit">
            Save Changes
          </Button>
            </form>

          </Modal.Body>

          <Modal.Footer>
            
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateFav;
