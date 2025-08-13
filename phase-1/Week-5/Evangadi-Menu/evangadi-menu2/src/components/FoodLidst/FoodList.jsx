import React from 'react';
import './FoodList.css'; // Importing CSS styles for FoodList
import FoodItem from '../FoodItem/FoodItem';
import foods from '../../commonResource/data'; // Importing food data
// Importing FoodItem component
 // Make sure path is correct

class FoodList extends React.Component {
  render() {
    // const foods = [
    //   {
    //     title: "TIMATIM SELAXA (ቲማቲም ሰላጣ)",
    //     price: "$5.99",
    //     image:
    //       "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp",
    //     description:
    //       "Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice.",
    //   },
    //   {
    //     title: "TIBS (ጥብስ)",
    //     price: "$22.99",
    //     image:
    //       "https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280",
    //     description:
    //       "Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs is one of the most popular dishes among Ethiopians. It comes in a variety of forms, varying in type, size or shape of the cuts of meat used, and can range from hot to mild or contain...",
    //   },
    //   {
    //     title: "KITFO (ክትፎ)",
    //     price: "$25.99",
    //     image:
    //       "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp",
    //     description:
    //       "Made from the leanest meat, kitfo is viewed as a big treat by ordinary Ethiopians, while its nutritional powers are also praised. Similar to French steak tartare, the meat is minced and warmed in a pan with a little butter, mitmita (a stronger version of berbere)...",
    //   },



    // ];

    return (
      <div className="foods-container">
        {foods.map((foods, index) => (
          <FoodItem
            key={index}
            title={foods.title}
            price={foods.price}
            image={foods.img}
            desc={foods.desc}
          />
        ))}

       
      </div>
    );
  }
}

export default FoodList;