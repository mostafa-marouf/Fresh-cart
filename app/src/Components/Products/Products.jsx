import React from 'react';
import style from './Products.module.css';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import { Helmet } from 'react-helmet';

export default function Products() {


  return <>
  <Helmet>
  <meta charSet="utf-8" />
  <title> products</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
   <FeaturedProducts />
  </>
}
