
import { Component } from 'react'
import './App.css'

// Component No 1

function App() {
  const name = "Manikandan";

  const stories = [
    {
      id: 1,
      title: "React JS",
      url: "https://react.dev/",
      author: "Jordan Walke",
    },
    {
      id: 2,
      title: "Node JS",
      url: "https://nodejs.org/en",
      author: "Ryan Dahl"
    }];
  //list({list:"stories"});
  return (
    <>
      <List list={stories} name={name} />
    </>
  )
}

// Component No 2
// props = {list:stories, name:"Manish"}

function List(props) {
  return (
    <div>
      <Item name={props.name} />
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
          </li>
        ))}
      </ul>
      <span>{props.name}</span>
    </div>
  )
}

// Component No 3

function Item(props) {

  return (
    <div>{props.name}</div>
  )
}

export default App
