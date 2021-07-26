import axios from 'axios';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

 class AddFav extends Component {
    constructor(props){
        super(props);
        this.state={
            listData:[],
            url:process.env.REACT_APP_SERVER_URL,
            showData:false
        }
    }
    addToFav=async()=>{
        const reqBody={
            strDrink:this.props.strDrink,
            strDrinkThumb:this.props.strDrinkThumb,
            idDrink:this.props.idDrink,
        }

        axios.post(`${this.state.url}/fav`,reqBody).then(res=>{
            this.setState({
                listData:res.data,
                showData:true
            })
        })
    }

    render() {
        return (
            <>
                
                <Button variant="success" onClick={()=>{this.addToFav()}}>add to fav</Button>
            </>
        )
    }
}

export default AddFav
