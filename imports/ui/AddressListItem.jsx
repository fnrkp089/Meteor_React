import React, { useState } from 'react';
import { AddressBook } from '../api/links.js';
import { check } from 'meteor/check';
import {NotEmptyString, EmailString, PhoneStirng, BirthdayString } from '../api/checkPatterns'

const addressListItem = ({data}) => {
    const [modify, setModify] = useState(true);
    const deleteAddress = (_id) => AddressBook.remove(_id);

    const [userInfo, setUserInfo] = useState({ //기본 값
        name:'',
        phone:'',
        email:'',
        company:'',
        birthday:''
    })

    const handleModify = () => { //수정시, 창 토글, 초기값 세팅
        setModify(modify => !modify);
        setUserInfo({
            name: data.name,
            phone: data.phone,
            email: data.email,
            company: data.company,
            birthday: data.birthday
        })
    }
    
    const handleModifyCancle = () => {//수정 취소시, 창토글, 초기값 비우기
        setModify(modify => !modify);
        setUserInfo({
            name: '',
            phone: '',
            email: '',
            company: '',
            birthday: ''
        })
    }

    const handleModifySave = () => {
        try{
            check(userInfo.name, NotEmptyString);
            check(userInfo.email, EmailString);
            check(userInfo.phone, PhoneStirng);
            check(userInfo.company, NotEmptyString);
            check(userInfo.birthday, BirthdayString);
        } catch(err){
            alert('입력하신 값을 확인해주세요 ERR : ' + err.message);
            return;
        }
        AddressBook.update({_id: data._id} , {$set: userInfo}); //객체에 저장된놈으로 업데이트
        setModify(modify => !modify); //토글 닫아주자
    }
    
    const handleAddChange = (e) => {
        const newUserInfo = {
            ...userInfo,
            [e.target.name] : String(e.target.value)
        }
        setUserInfo(newUserInfo)
    }

   return (
       modify ?
       <tr id = {data._id}>
       <td>{data.name}</td>
       <td>{data.phone}</td>
       <td>{data.email}</td>
       <td>{data.company}</td>
       <td>{data.birthday}</td>
       <td>
       <button className='btn btn-warning btn-sm' name='remove' onClick={() => deleteAddress(data._id)} >
       <i className='glyphicon glyphicon-trash'></i> 삭제</button>
       <button className='btn btn-warning btn-sm' name='modify' onClick={()=>handleModify()}>
       <i className='glyphicon glyphicon-wrench' ></i> 수정</button> {/* 토글을 구현하면 나머지는 일사천리일텐데... */}
       </td>
   </tr>

   :

   <tr>
    <td><input type='text' id='name' name='name' defaultValue={data.name} onChange={handleAddChange}/> </td>
    <td><input type='text' id='phone' name='phone' defaultValue={data.phone} onChange={handleAddChange}/> </td>
    <td><input type='text' id='email' name='email' defaultValue={data.email} onChange={handleAddChange}/> </td>
    <td><input type='text' id='company' name='company' defaultValue={data.company} onChange={handleAddChange}/> </td>
    <td><input type='text' id='birthday' name='birthday' defaultValue={data.birthday} onChange={handleAddChange}/> </td>
   <td>
   <button className='btn btn-warning btn-sm' name='save' onClick={handleModifySave}>
   <i className='glyphicon glyphicon-ok'></i> 저장 </button>
   <button className='btn btn-warning btn-sm' name='cancel' onClick={handleModifyCancle}>
   <i className='glyphicon glyphicon-ok'></i> 취소 </button>
   </td>
</tr> 
      
   )
}
export default addressListItem;