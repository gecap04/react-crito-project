import React from 'react'
import img_brand1 from '../../assets/images/brand1.svg';
import img_brand2 from '../../assets/images/brand2.svg';
import img_brand3 from '../../assets/images/brand3.svg';
import img_brand4 from '../../assets/images/brand4.svg';
import img_brand5 from '../../assets/images/brand5.svg';

const BrandSecction = () => {
  return (
    <section className="brands">
        <div className="container">
            <img src={img_brand1} alt="brand1" />
            <img src={img_brand2} alt="brand2" />
            <img src={img_brand3} alt="brand3" />
            <img src={img_brand4} alt="brand4" />
            <img src={img_brand5} alt="brand5" />
        </div>
    </section>
  )
}

export default BrandSecction