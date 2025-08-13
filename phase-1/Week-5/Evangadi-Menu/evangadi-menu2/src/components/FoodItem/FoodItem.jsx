import React from 'react';
import './FoodItem.css'; // Importing CSS styles for FoodItem



class FoodItem extends React.Component {
  render() {
    const { title, price, image, desc } = this.props;
    return (
      <div className="single-food">
        <div className="img">
          <img src={image} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <div className="food-desc">{desc}</div>

     
      </div>
    );
  }
}

export default FoodItem;