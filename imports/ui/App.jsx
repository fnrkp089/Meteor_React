import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { InsertAddress } from './InsertAddress';
import { AddressList } from './AddressList';
import { LoginForm } from './LoginForm';

export const App = () => {
  const userLogin = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  console.log('호출되었습니다')
  return(
    <>
        {userLogin ? 
          <>
            <div className="user" onClick={logout}> 
            {userLogin.username} 사용자 이름을 누를시 로그아웃됩니다
            </div>
            <InsertAddress />
            <AddressList/>
          </>
        :
        <LoginForm />
        }
    </>
  )
}

 