import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
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
    <SearchbarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          /*value={query}
            onChange={this.handleChange}*/

          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
