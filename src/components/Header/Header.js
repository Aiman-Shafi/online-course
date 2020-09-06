import React from 'react';
import logo from '../../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, FormControl, Container, Jumbotron } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className='d-flex flex-row align-items-center font font-weight-bold'>
                <img
                    alt=""
                    src={logo}
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                />{' '}
                ReactDemy
                </Navbar.Brand>
                <Form inline className='ml-auto'>
                    <FormControl type="text" placeholder="Search Courses" className=" mr-sm-2" />
                    <Button type="submit">Search</Button>
                </Form>
            </Navbar>
            <Jumbotron fluid>
                <Container className='text-center'>
                    <h1 className='font-weight-bold mb-4'>Welcome to ReactDemy</h1>
                    <h5 className='font-weight-normal'>
                    ReactDemy Provides you the best Online courses within your cost! :)
                    Get free & premium courses with 55% discount :D  
                    </h5>
                    <Button className='mt-5 btn-danger font-weight-bold'>Get Course's</Button>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;