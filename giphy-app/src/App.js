import React, {Component} from 'react';
import './App.css';
import GifList from './GifList';
import SearchBar from './SearchBar';
import request from 'superagent';

class App extends Component {
  constructor(){
    super();
    this.state ={
      gifs: []
    }
  }


  handleTermChange = (term)=> {

    const url = `https://api.giphy.com/v1/gifs/trending?q=${term}&api_key=uy6A9rqKrPhH9I1vwvyXt5hzWR4YJOYM&limit=10&rating=G`;

    request.get(url, (err, res) => {
        this.setState({ gifs: res.body.data})
    })
  }

  render() {
    return(
      <div>
      <SearchBar onTermChange={this.handleTermChange}/>
      <GifList gifs= {this.state.gifs}/>
      </div>
      )
  }
}




export default App;


//   getGifs= async () => {
//     try{
//       const gifs= await fetch('https://api.giphy.com/v1/gifs/trending?api_key=uy6A9rqKrPhH9I1vwvyXt5hzWR4YJOYM&limit=10&rating=G');
//       const gifsJson= await gifs.json();
//       return gifsJson;
//     } catch(err) {
//       console.log('getGifs err: ', err)
//       return err;
//     }
//   }

  
//   componentDidMount () {
//     this.getGifs()
//     .then((data) => {
//       console.log('data: ', data)
//       this.setState({
//         gifs: data.data
//       })
//     })
//   } 

//   render() {

//   return (
//       // <GifsList gifs={this.state.gifs}/>
//       <ul>
//       {gifs.map(gifs => (
//         <li key={this.state.id}>
//         <img src={this.state.url}/>
//         </li>
//         ))}
//       </ul>
//   );
// }

// }
// export default App;
