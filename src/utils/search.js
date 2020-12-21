//react
import React, { Component } from 'react';

//components

//style
import css from '../styles/utils.css';
import searchIcon from '../assets/icons/search.svg';
import filterIcon from '../assets/icons/filter.svg';

class Search extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
  

  render() {
    return (
      <div className = "whole-bar">
      <form className="sideways" style={css}>
        <div className="search">
          <div className="popup-form">
            <img src={this.props.imgsrc || searchIcon} alt="search icon" />
            <input
              className="input"
              placeholder={this.props.placeholder || "Search..."} 
              ref={input => this.search = input}
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        {
          this.props.filter ?
            <div className="greencircle">
              <img src={filterIcon} alt="filter" />
            </div>
            :
            <div></div>
        }
      </form>
      </div>
    )
  }
}

export default Search;
