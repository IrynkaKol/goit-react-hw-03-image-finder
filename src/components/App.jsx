import { Component } from "react"
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import { Modal } from "./Modal/Modal"
import { Button } from "./Button/Button"


export class App extends Component {
  state = {
    query: ''
  }
handleSubmit = query => {
this.setState({query})
};

  render () {
  return (
    <div className="App">
      <Searchbar onSubmit="this.handleSubmit"/>
      <ImageGallery />
      <Modal />
      <Button />
    </div>
  );
    }
};
