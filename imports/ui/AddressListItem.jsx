import React, { useState } from 'react';
import { AddressBook } from '../api/links.js';

const addressListItem = ({data}) => {
    const [modify, setModify] = useState(true);

    const handleModify = () => {
    setModify(modify => !modify);
    }

    const deleteAddress = ({_id}) => AddressBook.remove(_id);

    const [userInfo, setUserInfo] = useState({
        name:'',
        phone:'',
        email:'',
        company:'',
        birthday:''
    })

   return (
       modify ?
       <tr id = {data._id}>
       <td>{data.name}</td>
       <td>{data.phone}</td>
       <td>{data.email}</td>
       <td>{data.company}</td>
       <td>{data.birthday}</td>
       <td>
       <button className='btn btn-warning btn-sm' name='remove' onClick={() => deleteAddress(data)} >
       <i className='glyphicon glyphicon-trash'></i> 삭제</button>
       <button className='btn btn-warning btn-sm' name='modify' onClick={()=>handleModify()}>
       <i className='glyphicon glyphicon-wrench' ></i> 수정</button> {/* 토글을 구현하면 나머지는 일사천리일텐데... */}
       </td>
   </tr>

   :

   <tr>
    <td><input type='text' name='modiName' defaultValue={data.name}/> </td>
    <td><input type='text' name='modiPhone' defaultValue={data.phone}/> </td>
    <td><input type='text' name='modiEmail' defaultValue={data.email}/> </td>
    <td><input type='text' name='modiCompany' defaultValue={data.company}/> </td>
    <td><input type='text' name='modiBirthday' defaultValue={data.birthday}/> </td>
   <td>
   <button className='btn btn-warning btn-sm' name='save'>
   <i className='glyphicon glyphicon-ok'></i> 저장 </button>
   <button className='btn btn-warning btn-sm' name='cancel' onClick={()=>handleModify()}>
   <i className='glyphicon glyphicon-ok'></i> 취소 </button>
   </td>
</tr> 
      
   )
}
export default addressListItem;