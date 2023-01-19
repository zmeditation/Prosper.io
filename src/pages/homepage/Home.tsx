import React from 'react';
import { StyledHome } from './HomeStyle';
import { BannerContainer } from './banner/BannerContainer';
import { Learnprosper } from './learnprosper/LearnProsper';
import { Compensation } from './compensation/Compensation';
import { Products } from './products/Products';
import { Footer } from '../../components/footer/Footer';

export default function Home() {
  return (
    <StyledHome>
      <BannerContainer/>
      <Learnprosper />
      <Compensation />
      <Products />
      <Footer />
    </StyledHome>
  )
}