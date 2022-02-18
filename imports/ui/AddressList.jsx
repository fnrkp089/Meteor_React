import React, { useState, useRef, useEffect } from 'react';
import { useTracker, withTracker } from 'meteor/react-meteor-data';
import { AddressBook } from '../api/links'
import AddressListItem  from './AddressListItem'
//import { Info } from './Info.jsx';

export const AddressList = () => {
  const[count, setCount] = useState(10)
  const listLoading = (num) => useTracker(() => {
    const handler = Meteor.subscribe('AddressBookData', num); //구독
    let listFinder =  AddressBook.find().fetch()
    console.log(listFinder)
    return {
      isLoading: !handler.ready(),
      listFinder: listFinder
    }
  });
  
  const {isLoading, listFinder} = listLoading(count);
  let datalimit = AddressBook.find().count()

  // $(window).scroll(function(){
  //   let scrollHeight = $(window).scrollTop()+$(window).height();
  //   let documentHeight = $(document).height();
  //   if(scrollHeight + 200 >= documentHeight){
  //     setCount(count => count + 30)
  //   }
  // })

  const infinityScroll = () => {
    let scrollHeight = Math.max(//스크롤 시키지 않았을때의 전체 높이를 구한다.
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(//스크롤을 올리면 화면에 보이지 않는 부분 (scrollTop) , 스크롤되어 올라간 만큼의 높이를 구한다.
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;//스크롤바의 공간을 제외한 부분 (clientHeight), 눈에 보이는 만큼의 높이를 구한다.

    if (scrollTop + clientHeight == scrollHeight) {
      setCount(count => count + 30)
      console.log(count)
    }
  }
  // const targetSector = document.getElementsByName('more');
  // const observer = new IntersectionObserver(entries => {
  //   console.log(entries)
  // })
  // observer.observe(targetSector)

  const moreAddress = () => {
    if(count >= 300){
      return;
    }
    setCount(count => count+30)
  }

  return(
    <>
    <div name='addressList' onScroll={infinityScroll}> 
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

 