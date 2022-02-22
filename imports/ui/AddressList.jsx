import React, { useState, useRef, useEffect } from 'react';
import { useTracker, withTracker } from 'meteor/react-meteor-data';
import { AddressBook } from '../api/links'
import AddressListItem  from './AddressListItem'
//import { Info } from './Info.jsx';

export const AddressList = () => {
  const[count, setCount] = useState(10)
  let limit = AddressBook.find({}).count();
  const listLoading = (num) => useTracker(() => { 
    const handler = Meteor.subscribe('AddressBookData'); //구독
    let listFinder =  AddressBook.find({}, {limit:num}).fetch()
    return {
      isLoading: !handler.ready(),
      listFinder: listFinder
    }
  });
  
  const {isLoading, listFinder} = listLoading(count);

  const moreAddress = () => {
    if(count >= limit){
      return;
    }
    setCount(count+30)
  }

  return(
    <>
    <div name='addressList'> 
    <table className= 'table table-bordered table-condensed table-striped table-hover'>
        <thead>
          <tr className='info'>
              <th>이름</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>회사</th>
              <th>생일</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
        { 
        isLoading 
        ?
        <tr></tr>
        : 
         listFinder.map( data => 
         <AddressListItem key={data._id} data = {data}/>)
         
        }
        </tbody>
      </table>
    <div align="center">
      <button name="more" className='btn btn-primary' onClick={moreAddress}>
        <i className='glyphicon glyphicon-arrow-down'></i> 더보기
      </button>
    </div>
  </div>
  </>
  )
}

 