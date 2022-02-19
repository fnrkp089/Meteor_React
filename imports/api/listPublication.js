import { Meteor } from 'meteor/meteor';
import {AddressBook} from './links';

if(Meteor.isServer){
  Meteor.publish('AddressBookData', function() {
    const userId = this.userId; //현재 로그인한 사용자 아이디에 접근하기.
    if(userId){
      return AddressBook.find({owner:userId}, {sort: {name:1}});
    }
  });
}