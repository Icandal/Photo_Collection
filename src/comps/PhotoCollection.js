import React, { useState } from 'react';
import './Photos.css';
import img_1B from './photos/ColB/1.jpg';
import img_2B from './photos/ColB/2.jpg';
import img_3B from './photos/ColB/3.jpg';
import img_4B from './photos/ColB/4.jpg';
import img_1G from './photos/ColG/1.jpg';
import img_2G from './photos/ColG/2.jpg';
import img_3G from './photos/ColG/3.jpg';
import img_4G from './photos/ColG/4.jpg';
import img_1R from './photos/ColR/1.jpg';
import img_2R from './photos/ColR/2.jpg';
import img_3R from './photos/ColR/3.jpg';
import img_4R from './photos/ColR/4.jpg';
import img_1P from './photos/ColP/1.jpg';
import img_2P from './photos/ColP/2.jpg';
import img_3P from './photos/ColP/3.jpg';
import img_4P from './photos/ColP/4.jpg';
import img_1O from './photos/ColO/1.jpg';
import img_2O from './photos/ColO/2.jpg';
import img_3O from './photos/ColO/3.jpg';
import img_4O from './photos/ColO/4.jpg';

const Collection_Names = {
  Collection_B: 'Collection_B',
  Collection_G: 'Collection_G',
  Collection_O: 'Collection_O',
  Collection_P: 'Collection_P',
  Collection_R: 'Collection_R',
  }

const Collection_Data = {
  [Collection_Names.Collection_B] : [
    img_1B,
    img_2B,
    img_3B,
    img_4B],   

  [Collection_Names.Collection_G] : [
    img_1G,
    img_2G,
    img_3G,
    img_4G],

  [Collection_Names.Collection_O] : [
    img_1O,
    img_2O,
    img_3O,
    img_4O],

  [Collection_Names.Collection_P] : [
    img_1P,
    img_2P,
    img_3P,
    img_4P],

  [Collection_Names.Collection_R] : [
    img_1R,
    img_2R,
    img_3R,
    img_4R]
}

const PhotoCollection = () => {
  let [collection, setCollection] = useState([])
  let [showCollection, setShowCollection] = useState(false);
  
  const handleCollectionChange = (e) => {
    setCollection(Collection_Data[e.target.value]);
  };


  const handleShow = () => {
      setShowCollection(true);
  }

  const handleHide = () => {
      setShowCollection(false);
  }



  return (
    <center>
      <header> 
                <h1 style={{ color: "green" }}>My_Collection</h1> 
                <h2>React Image list</h2> 
      </header> 
      <main>
        <select name='CollectionVariant' onChange={handleCollectionChange}>
          <option value={Collection_Names.Collection_B}>Collection_B</option>
          <option value={Collection_Names.Collection_G}>Collection_G</option>
          <option value={Collection_Names.Collection_O}>Collection_O</option>
          <option value={Collection_Names.Collection_P}>Collection_P</option>
          <option value={Collection_Names.Collection_R}>Collection_R</option>
        </select>
        <button onClick={handleShow}>Show</button>
        <button onClick={handleHide}>Hide</button>
          <div class='photo'>
        {showCollection && (collection.map((item, index) => (
            <img src={item} key={index} alt={`${index}`}/>
        )))}
          </div>
      </main>
    </center>
  )
}

  export default PhotoCollection;