import React, {Component} from 'react';
import axios from 'axios';


class Mymovie extends Component {
  constructor (props) {
    super (props);

      this.state = {
        isLoading: false,
        data:' ',
        id: this.props.match.params._id
      }
  }

     componentDidMount () {
          this.setState({ isLoading: true })
             axios.get(``)
                .then(res =>  {  
                  console.log(res.data);
                  this.setState ({ moviess: res.data.data,
                                   isLoading: false,
                  });
          })
          .catch(error => 
            this.setState ({ error, isLoading:false }));
        }
        
      render () {  
        return (
           this.isLading ?
           (<h1> Laoding p</h1>)
      );
    }
  }

export default Mymovie;