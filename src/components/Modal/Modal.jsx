import {Component} from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc)
  }
componentWillUnmount() {
  window.removeEventListener('keydown', this.onCloseByEsc)
}
onCloseByEsc = (e) => {
if(e.code === "Escape") {
  this.props.onClose()
}
}
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