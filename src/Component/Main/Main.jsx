import React from 'react'
import './main.scss'
import img from '../../images/img(1).jpg'
import img2 from '../../images/img(2).png'
import img3 from '../../images/img(3).webp'
import img4 from '../../images/img(4).jpg'
import img5 from '../../images/img(5).jpg'
import img6 from '../../images/img(6).jpeg'
import img7 from '../../images/img(7).jpeg'
import img8 from '../../images/img(8).jpg'
import img9 from '../../images/img(9).jpg'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Data =[
    {
        id:1,
        imgSrc: img,
        foodTitle: 'Diary Milk',
        grade:'Add to cart',
        price: 'Rs.80',
        ingredient: "Sugar, Full Cream Milk Powder, Cocoa Mass, Cocoa Butter, Vegetable Fats [Palm Fruit, Sunflower Seed, Shea Nut, Illipe Seed, Sal Seed (Soya)(Citric Acid) (Tocopherol)], Whey Permeate (Cow's Milk),Emulsifiers (E442, E476),Flavourings. Milk Solids 20 % Min. Cocoa Solids 20 % Min."

    },

    {
        id:2,
        imgSrc: img2,
        foodTitle: 'Wai WAi',
        grade:'Add to cart',
        price: 'Rs.20',
        ingredient: "Wheat , Vegetable oil, Palm Oil, Soya Souce , Onion, Black Papper, Anti Caking Agent,Chilli Powder, Musturd Celery."

    },
    {
        id:3,
        imgSrc: img3,
        foodTitle: 'Oreo',
        grade:'Add to cart',
        price: 'Rs.350',
        ingredient: "SUGAR, UNBLEACHED ENRICHED FLOUR (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE {VITAMIN B1}, RIBOFLAVIN {VITAMIN B2}, FOLIC ACID), PALM AND/OR CANOLA OIL, COCOA (PROCESSED WITH ALKALI), HIGH FRUCTOSE CORN SYRUP, LEAVENING (BAKING SODA AND/OR CALCIUM PHOSPHATE), SALT, SOY LECITHIN, CHOCOLATE, ARTIFICIAL FLAVOR."

    },
    {
        id:4,
        imgSrc: img4,
        foodTitle: 'Ramen Spicy Noddle',
        grade:'Add to cart',
        price: 'Rs.180',
        ingredient: "wheat flour, salt, water,sodium carbonate and usually potassium carbonate, and a small amount of phosphoric acid."

    },
    {
        id:5,
        imgSrc: img5,
        foodTitle: 'Chicken Sausage',
        grade:'Add to cart',
        price: 'Rs.320',
        ingredient: "meat, fat, binding agents and water."

    },
    {
        id:6,
        imgSrc: img6,
        foodTitle: 'Cotton-Candy Ice Cream',
        grade:'Add to cart',
        price: 'Rs.400',
        ingredient: "Milk, Cream, Sugar, Nonfat Dry Milk, Corn Syrup, Mono & Diglycerides, Cellulose Gum, Guar Gum, Carrageenan, Water, Propylene Glycol, Xanthan Gum, Gum Arabic, FD&C, Red 40."

    },
    {
        id:7,
        imgSrc: img7,
        foodTitle: 'Amul Butter',
        grade:'Add to cart',
        price: 'Rs.350',
        ingredient: "Butter, Common Salt(approx 2.5%), Milk Fat 80%, Milk Solids Non Fat 1.2% maximum, Moisture 16% maximum, contains permitted natural colour(Annatto E160B)."

    },
    {
        id:8,
        imgSrc: img8,
        foodTitle: 'Kimchi',
        grade:'Add to cart',
        price: 'Rs.180',
        ingredient: "Chinese cabbages (Brassica pekinensis) and radish, but other ingredients such as garlic, green onion, ginger, red pepper, mustard, parsley, and carrot."

    },
    {
        id:9,
        imgSrc: img9,
        foodTitle: 'Soft Drinks',
        grade:'Add to cart',
        price: 'Rs.80 - Rs.260',
        ingredient: "CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, PHOSPHORIC ACID, NATURAL FLAVORS, CAFFEINE."

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
        <div className="secContent grid">{
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
                        <button className='btn flex'> Add
                        <AiOutlineShoppingCart className='icon'/>
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