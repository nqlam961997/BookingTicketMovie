import React from "react";
import Carousel from 'react-elastic-carousel';
import {Card} from '../assets/styledComponents/Card'

export default function TrangChu(props) {

  const breakPoint = [
    {width:1,itemToShow:1},
  ]

  return <section className="Moviecarousel">
    <Carousel breakPoints={breakPoint}>
      <Card number='1'/>
      <Card number='2'/>
      <Card number='3'/>
      <Card number='4'/>
      <Card number='5'/>
    </Carousel>
  </section>;
}
