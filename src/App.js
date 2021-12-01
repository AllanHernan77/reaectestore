import './App.css';
import React from 'react'
import logo from "./img/logo.jpg"
import elogo from "./img/elogo.png"
import axios from 'axios'



class App extends React.Component {

  state = {
    products :[],
    searchWord: "",
    Price : 0
  }

  componentDidMount() {
    axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
      .then(response => {
        const products = response.data;
        this.setState({ products });
      })
  }

   updateAdd(data){

  }
  render(){

    
  


      return (

        
        <div className="App">
          
          <div className = "navbar">
            <div className = "navblocks">
              <img src ={logo} alt = "logo" className =  "logo"></img>
              <a href = "/#"> <h1 className = "navElement">Start</h1> </a>
              <a href = "/#"><h1 className = "navElement">Sell</h1></a>
              <a href = "/#"><h1 className = "navElement">Market</h1></a>
              <a href = "/#"><h1 className = "navElement">Manage</h1></a>
            </div>
            <div className = "navblocks">
            <a href = "/#"><h1 className = "navElement">Pricing</h1></a>
            <a href = "/#"><h1 className = "navElement">Learn</h1></a>
            <a href = "/#"><h1 className = "navElement">Log In</h1></a>
            <a href = "/#"><h1 className = "navElement test">Cart {this.state.Price}$</h1></a>
            </div>
          </div>


          <div className = "landingPage">

            <div className = "landingLHS">
              <h1 className = "landingHeader">The "Real" Fake <br/>Commerce Platform </h1>
              <p className = "landingP">AmazOff is the second most used ecommerce platform. <br/>Millions of users are registered and you can shop here <br/>for the hottest brands on the market! </p>
            </div>

            <div className = "landingRHS">
              <img src ={elogo} alt = "logo" className =  "landingLogo"></img>
            </div>

          </div>

          <div className = "storePage">
            
            <input type = "text" placeholder = "Search Here" className = "searchbar" onChange= {event => {this.setState({searchWord : event.target.value})}}/>
            <ul className = "products">

              {this.state.products.filter(products => {if(this.state.searchWord == ""){
                return products.name}
                else if (products.name.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                   return products.name} })
                   .map(products => <li className = "productGrid">{products.name}  
              <img src = {products.image_link} alt= "thumbnail" className = "productImg"></img> 
              {products.price + "$"}
              {" rating " + products.rating}
              <button onClick = { () => {this.updateAdd(products.price)} }>Add to Cart</button>
              <button>Buy Now</button>
                </li>)}
            </ul>

          </div>


        </div>
      );
    }
}

export default App;
