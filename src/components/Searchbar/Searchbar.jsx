import React from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit}) => {
 /* state = {
    query: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };*/
  const handleSubmit = e => {
    e.preventDefault();
    
    onSubmit(e.currentTarget.elements.query.value);
  };

   
    
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="query"
            /*value={query}
            onChange={this.handleChange}*/
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}