import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { AddressBook } from '../api/links.js'
import { InsertAddress } from './InsertAddress.jsx';
import { AddressList } from './AddressList.jsx';
//import { Info } from './Info.jsx';
export const App = () => {
  return(
    <>
      <InsertAddress />
      <AddressList />
    </>
  )
}

 