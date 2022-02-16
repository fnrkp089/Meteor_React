import React, { useState } from 'react';
import { AddressBook } from '../api/links.js'

export const InsertAddress = () => {
  // const [userAddress, setUserAddress] = useState({
  //   name:'',
  //   phone:'',
  //   email:'',
  //   company:'',
  //   birthday:''
  // });

  // const handleOnChange = (e) => {
  //   const newAddress = {
  //     ...userAddress,
  //     [e.target.name] : String(e.target.value)
  //   }
  //   setUserAddress(newAddress)
  // }

  const userAddress = () => {
    //let userName = document.getElementsByName('name')[0].value.trim()
    document.getElementsByName('name')[0].value.trim()
    userAddInfo = {
      name: document.getElementsByName('name')[0].value.trim(),
      phone: document.getElementsByName('phone')[0].value.trim(),
      email: document.getElementsByName('email')[0].value.trim(),
      company: document.getElementsByName('company')[0].value.trim(),
      birthday: document.getElementsByName('birthday')[0].value.trim()
    }
    if(userAddInfo.name != '' && userAddInfo.phone != '' && userAddInfo.email != '' && userAddInfo.company != '' && userAddInfo.birthday != ''){
      AddressBook.insert(userAddInfo)
    } else {
      alert('비어있는 값이 존재합니다.')
    }
  }

  const handleClickAdd = () => {
    AddressBook.insert(userAddress)
  }

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div name='addressInput'>
      <div className='well'>
        <div className='form-inline'>
            <div className='form-group'>
              <input type='text' className='form-control' name='name' placeholder='이름'/>
              <input type='text' className='form-control' name='phone' placeholder='전화번호'/>
              <input type='text' className='form-control' name='email' placeholder='이메일'/>
              <input type='text' className='form-control' name='company' placeholder='회사'/>
              <input type='text' className='form-control' name='birthday' placeholder='생일'/>
              <button className='btn btn-info btn-sm' name='saveAddress' onClick = {userAddress}>
                <i className='glyphicon glyphicon-ok' ></i> 등록 </button>
            </div>
        </div>
      </div>
    </div>
  );
};
