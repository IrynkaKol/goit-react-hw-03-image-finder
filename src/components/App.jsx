import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from 'service/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query === query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
        }));
      })
      .finally(() => this.setState({isLoading: false}));
    }
  }

  handleSubmit = query => {
    this.setState({ query, isLoading: true });
  };
  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1, isLoading: true }));
  };

  render() {
    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />

        {this.state.isLoading ? <Loader /> : !!this.state.images.length && <Button onClick={this.handleLoadMore} />}
        
      </div>
    );
  }
}
