import React, { useState } from 'react';
import data from '../fake.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap'
import './Course.css'
import Cart from '../Cart/Cart.js'

const Course = () => {
    const courseData = data.slice(0,12);
    const [courses, setCourses] = useState(courseData);

    const [cart, setCart] = useState([])
    const enrollBtn = (enroll) => {
        
        setCart([...cart, enroll]);
        console.log(enroll);
    }
    return (
        <div className='d-flex'>
           <div className='course-section d-flex flex-wrap'>
                {
                    courses.map(allCourse => <CourseSection enrollBtn={enrollBtn} key={Math.random()} course={allCourse}></CourseSection>)
                }
           </div>
           <div className='cart'>
                <h2><Cart cart={cart}></Cart></h2>
           </div>
           <div className="bg-dar">
               <h6 className="text-center text-white">@Developed By Aiman Shafi</h6>
           </div>
        </div>
        
    );
};

const CourseSection = (props) => {
    const {name,img,description,rating,price,hours,lectures} = props.course;
    return (
        <div>
            <Card style={{ width: '18rem' , margin:'10px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <h6>{hours} hours<span className='float-right'>Lectures: <span>$</span>{lectures}</span></h6>
                    <h6>Rating: {rating}<span className='float-right'>Price: <span>$</span>{price}</span></h6>
                    
                    <Button onClick={()=> props.enrollBtn(props.course) }>Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Course;