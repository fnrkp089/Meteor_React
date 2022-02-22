import { Meteor } from 'meteor/meteor';
import { AddressBook } from '../imports/api/links';
import '../imports/api/links';
import { fixtures } from './fixture.js'
import {Accounts} from 'meteor/accounts-base';
import '../imports/api/listPublication'

Meteor.startup(() => {
});

Meteor.methods({ //회원가입용 미티어 메소드
  insertNewUser: function(newUserData){
    if (!Accounts.findUserByUsername(newUserData.username)) {
      Accounts.createUser(newUserData);
    }
  }
})

Meteor.methods({
	makeFixtureData (userId){
		for(let i = 0 ; i < fixtures.length ; i++){
			fixtures[i]['owner'] = userId;
			AddressBook.insert(fixtures[i])
		}
		return '완료되었습니다'
	}
})

Meteor.methods({
	makeFixtureData2 (userId){
		for(let i = 0 ; i < 10 ; i++){
			fixtures[i]['owner'] = userId;
			AddressBook.insert(fixtures[i])
		}
		return '완료되었습니다'
	}
})


