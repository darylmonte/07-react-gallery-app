import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// Flickr API
import apiKey from '../config';

// Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Gallery from './Gallery';
import NotFound from './NotFound';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      winter: [],
      spring: [],
      summer: [],
      autumn: [],
      tag: '',
      loading: true
    }
  }

  componentDidMount() {
    const defaultTags = ['winter', 'spring', 'summer', 'autumn'];
    defaultTags.map( tag => this.performSearch(tag, true) );
  }

  performSearch = (query, isMenuItem) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        isMenuItem
          ? this.setState({
            [query]: response.data.photos.photo,
            loading: false
          })
          : this.setState({
            photos: response.data.photos.photo,
            tag: query,
            loading: false
          })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <h1>Don't Search Up...</h1>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {
            (this.state.loading)
              ? <p>Loading...</p> :
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/winter" />} />
                <Route path="/winter" render={() => <Gallery data={this.state.winter} tag='winter' />} />
                <Route path="/spring" render={() => <Gallery data={this.state.spring} tag='spring' />} />
                <Route path="/summer" render={() => <Gallery data={this.state.summer} tag='summer' />} />
                <Route path="/autumn" render={() => <Gallery data={this.state.autumn} tag='autumn' />} />
                <Route path={"/search/:query"} render= {() => <Gallery data={this.state.photos} tag={this.state.tag} />}/>
                <Route component={NotFound} />
              </Switch>
              
          }
      </div>
      </BrowserRouter>
    );
  }

}
