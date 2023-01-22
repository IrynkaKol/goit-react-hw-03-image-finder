import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from 'service/fetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query === query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
        }));
        //console.log(resp)
      });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };
handleLoadMore = () => {
this.setState(({page}) => ({page: page + 1}))
}

  render() {
    return (
      <div 
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        
        {!!this.state.images.length && <Button onClick={this.handleLoadMore} />}
        
      </div>
    );
  }
}
