import React, { useState } from 'react';
import { AddressBook } from '../api/links.js';

const deleteAddress = ({_id}) => AddressBook.remove(_id);

const addressListItem = ({data}) => {
   return (
       <tr key = {data._id} id = {data._id}>
           <td>{data.name}</td>
           <td>{data.phone}</td>
           <td>{data.email}</td>
           <td>{data.company}</td>
           <td>{data.birthday}</td>
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