import {Component} from 'react';

export class Modal extends Component {
  render () {
    const {largeImg, onClose} = this.props;
   return (
      <div onClick={onClose} className="Overlay">
  <div className="Modal">
    <img src={largeImg} alt="" />
  </div>
</div>
   ) 
  }
}