import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Text, PhotosList, Loader } from 'components';

console.log('ImageService :>> ', ImageService);
export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    showBtn: false,
    isEmpty: false,
    error: '',
    isLoading: false
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({isLoading: true})
      ImageService.getImages(query, page)
        .then(({ hits, totalHits }) => {
          console.log(hits)
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            photos: [...prevState.photos, ...hits],
            showBtn: page < Math.ceil(totalHits / 15),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(()=>{
          console.log()
          this.setState({isLoading: false})}         
        )
    }
  }

  onSubmit = query => {
    if (this.state.query === query) {
      return alert('Already shown');
    }
    this.setState({
      query,
      page: 1,
      photos: [],
      showBtn: false,
      isEmpty: false,
      error: '',
    });
  };

  handleClick = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    const { photos, showBtn, isEmpty, error, isLoading } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {photos.length > 0 && <PhotosList photos={photos}/>}
        {showBtn && <Button onClick={this.handleClick}>Load more...</Button>}
        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {error && <Text textAlign="center">Sorry. {error} ... 😭</Text>}
        {isLoading && <Loader/>}
      </>
    );
  }
}
