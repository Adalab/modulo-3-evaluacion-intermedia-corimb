import React from 'react';

class Pokemon extends React.Component {
  render() {
    const typesLi = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <div className='poke-item' id={this.props.id}>
        <img src={this.props.url} alt={this.props.name}></img>
        <h2 className='pokemon__title '>{this.props.name}</h2>
        <ul>{typesLi}</ul>
      </div>
    );
  }
}

export default Pokemon;
