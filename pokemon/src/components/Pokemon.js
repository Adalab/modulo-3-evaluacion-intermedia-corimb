import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        <img src={this.props.url} alt={this.props.name}></img>
        <h2 className='pokemon__title '>{this.props.name}</h2>
        <span>{this.props.types}</span>
      </div>
    );
  }
}

export default Pokemon;
