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
    if (event.key === 'Escape' || event.target === event.currentTarget) {
        this.props.handleEscape()
    }
  };

  render() {
    const { url } = this.props;
    return (
      <Overlay onClick={this.handleKeyDown}>
        <img src={url} alt="" />
      </Overlay>
    );
  }
}