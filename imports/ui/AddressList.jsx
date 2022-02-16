import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { AddressBook } from '../api/links.js'
import { AddressListItem } from './AddressListItem.jsx'
//import { Info } from './Info.jsx';
export const AddressList = () => {
  let Listfinder = useTracker(() => AddressBook.find({}, {limit:10, sort:{name:1}}).fetch())

  const deleteAddress = ({_id}) => AddressBook.remove(_id);
  const [hideInput, setHideInput] = useState(false);
  const [defaultAdd, setDefaultAdd] = useState({
      name:'',
      phone:'',
      email:'',
      company:'',
      birthday:''
  })

  

  const modifyAddItem = (target) => {
    <tr>
        <td><input type='text' style='width: 100%;' name='modiName' value=''/></td>
        <td><input type='text' style='width: 100%;' name='modiPhone' value=''/></td>
        <td><input type='text' style='width: 100%;' name='modiEmail' value=''/></td>
        <td><input type='text' style='width: 100%;' name='modiCompany' value=''/></td>
        <td><input type='text' style='width: 100%;' name='modiBirthday' value=''/></td>
        <td>
        <button class='btn btn-warning btn-sm' name='save'>
        <i class='glyphicon glyphicon-ok'></i> 저장 </button>
        <button class='btn btn-warning btn-sm' name='cancel'>
        <i class='glyphicon glyphicon-ok'></i> 취소 </button>
        </td>
    </tr>
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
        {Listfinder.map((data,index) => 
           <AddressListItem data={'data'}/>
        )}
        </tbody>
      </table>
    <div align="center">
      <button name="more" className='btn btn-primary'>
        <i className='glyphicon glyphicon-arrow-down'></i> 더보기
      </button>
    </div>
  </div>
  </>
  )
}

 