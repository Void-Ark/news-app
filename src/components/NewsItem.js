import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    const {title, description, author, publishedAt, url, urlToImage} = this.props;
    return (
<div className='col-md-4'>
<div className="card my-3 mx-3" style={{width: "20rem"}}>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{author}</li>
    <li className="list-group-item">{publishedAt}</li>
  </ul>
  <div className="card-body">
    <a href={url} className="card-link">for more details</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem


