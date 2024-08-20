import React from 'react';
import Imageslist from '../Imageslist/page.js';
import Edit from '../Edit/[imageurl]/[index].js';
import { useListing } from '../../context/ListingContext';

export default function MainComponent({ listingid }) {
  const { currentView } = useListing();

  return (
    <div>
      {currentView === 'Imageslist' && <Imageslist listingid={listingid} />}
      {currentView === 'Edit' && <Edit />}
    </div>
  );
}
