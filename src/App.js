// import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Axios from "axios";
import "./App.css"



function App() {
  const [text, setText] = useState("Ketikan judul filmnya") 

  const [movies, setMovies] =useState([])
  

  const changText = (event) => {
    // console.log(event);
    setText(event.target.value)
  }

  
  const getMovies = (e) => {
    e.preventDefault()

    Axios.get(`http://www.omdbapi.com/?s=${text}&apikey=3c3331d6`)
    .then((response)=>{
      console.log(response);
      setMovies(response.data.Search);
    })
  }
  

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={getMovies}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={text}
                onChange={changText}
              />
              <Button variant="outline-success" type="submit" >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container my-3">
        <div className="row">
          {
            movies.map((value, Index) => {
              return(
                <div className="col-4" key={Index}>
                  <div className="card" style={{width: "18rem"}}>
                        <img src={value.Poster} className="card-img-top" alt="" />
                        <div className="card-body">
                          <h2 className="card-title">{value.Title}</h2>
                          <h4 className="card-text">{value.Year}</h4>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export default App;