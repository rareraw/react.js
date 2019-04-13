import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '정인섭',
  'birthday' : '930423',
  'gender' : '남자',
  'job' : '모빌씨앤씨'
},{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '황윤성',
  'birthday' : '911222',
  'gender' : '남자',
  'job' : 'LS글로벌'
},{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '이준규',
  'birthday' : '910915',
  'gender' : '남자',
  'job' : '???'
}]

class App extends Component {
  render() {
    return (
      <div>
        {  
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />  
            );
          })
        }
      </div>
    );
  }
}

export default App;
