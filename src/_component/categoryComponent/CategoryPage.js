import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer';
import CategoryView from './CategoryView'

const CategoryPage =() => 
{
   return(<div>
       <Header/>
       <CategoryView/>
       <Footer/>
   </div>)
}

export default CategoryPage;