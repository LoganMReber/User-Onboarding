import React, {useState} from 'react';
import UserForm from './form';
import UserCard from './userCard';
function App() {
  const [users,setUsers] = useState([{Username:'John_Doe',Email:'johndoe@email.com',Password:'Password',id:0}]);
  const addUser = user => {
    setUsers([...users,user])
  }
  return (
    <div className="App">
      <UserForm addUser={addUser}/>
      <div className= "userList">
        {users.map(user=> <UserCard
                            key={user.id}
                            userId={user.id}
                            name={user.Username} 
                            pass={user.Password.length}
                            email={user.Email}
        />)}
      </div>
    </div>
  );
}
export default App;
