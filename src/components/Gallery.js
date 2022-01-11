import React, { Component } from 'react';
import NoResult from './NoResult';
import Photos from './Photos';

export default class Gallery extends Component {

  render() {
    const results = this.props.data;
    let photoList;
    if (results.length > 0) {
      photoList = results.map(photo =>
        <Photos
          id={photo.id}
          secret={photo.secret}
          server={photo.server} 
          alt={photo.title}
          key={photo.id}
        />);
    } else {
      photoList = <NoResult />
    }

    return(
      <div className='photo-container'>
        <h2>Images of {this.props.tag}</h2>
        <ul>
          {photoList}
        </ul>
      </div>
    );
  }
}