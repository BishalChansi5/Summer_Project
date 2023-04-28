import React from 'react'
//import './main.css';
import img from '../../images/img(1).jpg'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Data =[
    {
        id:1,
        imgSrc: img,
        foodTitle: 'Chocolate',
        grade:'Add to cart',
        price: 'Rs.100',
        ingredient: "Sugar, Full Cream Milk Powder, Cocoa Mass, Cocoa Butter, Vegetable Fats [Palm Fruit, Sunflower Seed, Shea Nut, Illipe Seed, Sal Seed (Soya)(Citric Acid) (Tocopherol)], Whey Permeate (Cow's Milk),Emulsifiers (E442, E476),Flavourings. Milk Solids 20 % Min. Cocoa Solids 20 % Min."

    },
]

const Main = () => {
  return (
    <section className='main container section'>
        <div className="secTitle">
            <h3 className="title">
                Most sold items
            </h3>
        </div>
        <div className="secContent grid">
          {
            Data.map(({id, imgSrc, foodTitle, price,grade,ingredient})=>{
                return(
                     <div key={id} className="singleitem">
                        <div className="imageDiv">
                           <img src={imgSrc} alt={foodTitle}/>
                        </div>
                        <div className="cardInfo">
                            <h4 className="foodTitle">{foodTitle}</h4>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{price}</h5>
                                </div>
                            </div>
                        <div className="desc">
                            <p>{ingredient}</p>
                        </div>
                        <button className='btn flex'>
                            Add<AiOutlineShoppingCart className='icon'/>
                        </button>
                        </div>
                     </div>
                )
            })
          }
        </div>
    </section>
  )
}

export default Main