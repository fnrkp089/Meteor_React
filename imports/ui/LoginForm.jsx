import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
//import { registerUser } from '../../server/main'

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [regiUser, setRegiUser] = useState({
      username: '',
      password: '',
  }) 

  const submit = e => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
  };

  const registUser = () => {
    Meteor.call('insertNewUser', regiUser); //회원가입 위해서 서버 메소드를 부른다
    Meteor.loginWithPassword(regiUser.username, regiUser.password); //그 뒤 로그인
  };
  
  const handleRegiChange = (e) => {
    const newRegiUser = {
        ...regiUser,
        [e.target.name] : String(e.target.value)
    }
    setRegiUser(newRegiUser)
  }
  return (
      <>
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" name="username" required onChange={e => setUsername(e.target.value)}/>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" name="password" required onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Log In</button>
    </form>

    <div>
    <label htmlFor="username">Username</label>
    <input type="text" placeholder="Username" name="username" onChange={handleRegiChange} required />
    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" name="password" onChange={handleRegiChange} required />
    <button onClick={registUser}>REGISTER</button>
    </div>
    </>
  );
};