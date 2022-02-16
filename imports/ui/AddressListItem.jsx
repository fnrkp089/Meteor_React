import React, { useState } from 'react';
import { AddressBook } from '../api/links.js';

const deleteAddress = ({_id}) => AddressBook.remove(_id);

const addressListItem = (props) => {
   return (
       <tr key = {props.data._id} id = {props.data._id}>
           <td>{props.data.name}</td>
           <td>{props.data.phone}</td>
           <td>{props.data.email}</td>
           <td>{props.data.company}</td>
           <td>{props.data.birthday}</td>
           <td>
           <button className='btn btn-warning btn-sm' name='remove' >
           <i className='glyphicon glyphicon-trash'></i> 삭제</button>
           <button className='btn btn-warning btn-sm' name='modify'>
           <i className='glyphicon glyphicon-wrench'></i> 수정</button> {/* 토글을 구현하면 나머지는 일사천리일텐데... */}
           </td>
       </tr>
   )
}
export default addressListItem;