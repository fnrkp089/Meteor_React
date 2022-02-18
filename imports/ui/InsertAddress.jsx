import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../api/links.js'
import { check } from 'meteor/check'
import {NotEmptyString, EmailString, PhoneStirng, BirthdayString } from '../api/checkPatterns'
export const InsertAddress = () => {
  const [userAddress, setUserAddress] = useState({
    name:'',
    phone:'',
    email:'',
    company:'',
    birthday:'',
    owner: Meteor.userId()
  });

  const handleOnChange = (e) => {
    const newAddress = {
      ...userAddress,
      [e.target.name] : String(e.target.value)
    }
    setUserAddress(newAddress)
  }

  const InsertUserAddress = () => {
    try{
      check(userAddress.name, NotEmptyString);
      check(userAddress.email, EmailString);
      check(userAddress.phone, PhoneStirng);
      check(userAddress.company, NotEmptyString);
      check(userAddress.birthday, BirthdayString);
  } catch(err){
      alert('입력하신 값을 확인해주세요 ERR : ' + err.message);
      return;
    }
    AddressBook.insert(userAddress);
    setUserAddress({
      name:'',
      phone:'',
      email:'',
      company:'',
      birthday:'',
      owner: Meteor.userId()
    })
  }

  return (
    <div name='addressInput'>
      <div className='well'>
        <div className='form-inline'>
            <div className='form-group'>
              <input type='text' className='form-control' name='name' placeholder='이름' onChange={handleOnChange} value={userAddress.name}/>
              <input type='text' className='form-control' name='phone' placeholder='전화번호' onChange={handleOnChange} value={userAddress.phone}/>
              <input type='text' className='form-control' name='email' placeholder='이메일' onChange={handleOnChange} value={userAddress.email}/>
              <input type='text' className='form-control' name='company' placeholder='회사' onChange={handleOnChange} value={userAddress.company}/>
              <input type='text' className='form-control' name='birthday' placeholder='생일' onChange={handleOnChange} value={userAddress.birthday}/>
              <button className='btn btn-info btn-sm' name='saveAddress' onClick = {InsertUserAddress}>
                <i className='glyphicon glyphicon-ok' ></i> 등록 </button>
            </div>
        </div>
      </div>
    </div>
  );
};
