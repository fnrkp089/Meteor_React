import { Meteor } from 'meteor/meteor';
import { AddressBook } from '/imports/api/links';
import { fixtures } from './fixture.js'

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (AddressBook.find().count() === 0) {
    console.log('데이터 없음, fixture데이터 삽입.');
    for(let i = 0 ; i < 10 ; i++){
      AddressBook.insert(fixtures[i]);
    }
  }
});
