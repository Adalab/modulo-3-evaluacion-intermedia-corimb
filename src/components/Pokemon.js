import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const typesLi = this.props.types.map((type, index) => {
      return <li className="type" key={index}>{type}</li>;
    });
    return (
      <div className='poke-item' id={this.props.id}>
        <img src={this.props.url} alt={this.props.name}></img>
        <h2 className='pokemon__title'>{this.props.name}</h2>
        <ul>{typesLi}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Pokemon;
