import React, { Component } from 'react';
import { Overlay } from 'components';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
        this.props.handleEscape()
    }
  };

  render() {
    const { url } = this.props;
    return (
      <Overlay>
        <img src={url} alt="" />
      </Overlay>
    );
  }
}