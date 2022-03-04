import React, { useState } from 'react';
import './Dropdown.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup'
import Feedback from 'react-bootstrap/Feedback'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Dropdown = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

      <div>

        <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>

          <Row className="student-father">

            <Form as={Col} className='StudentName' controlId="validationCustom01">
              <Form.Label>Student Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Student Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form>

            <Form as={Col} className='FatherName' controlId="validationCustom02">
            <Form.Label>Father Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Father Name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form>

          </Row>
  
            <Row className="gender">

          <Form>
            <Form.Label>Gender</Form.Label>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} className="gender">
                 <Form.Check
                 inline
                 label="Male"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
                 />
                 <Form.Check
                 inline
                 label="Female"
                 name="group1"
                 type={type}
                 id={`inline-${type}-2`}
                 />
                 <Form.Check
                 inline
                 label="Other"
                 name="group1"
                 type={type}
                 id={`inline-${type}-3`}
                 />
                </div>
              ))}
          </Form>
          </Row>

          <Form.Group as={Col} className='dob' controlId="formGridState">
        <Form.Label>Date Of Birth</Form.Label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </Form.Group>
            
          
          <Row className="city-course">

          <Form.Group as={Col} className='city' controlId="formGridState">
            <Form.Label>Select City</Form.Label>
            <Form.Select defaultValue="Select City">
              <option>Karachi</option>
              <option>Multan</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} className='course' controlId="formGridCourse">
            <Form.Label>Select Course</Form.Label>
            <Form.Select defaultValue="Select Course">
              <option>Graphic Designing</option>
              <option>Web & Mobile Application Development</option>
              <option>Cyber Security</option>
              <option>MS Software Training</option>
            </Form.Select>
          </Form.Group>
          
          </Row>

          <Row className="email-number">
          
          <Form.Group as={Col} className='email' controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} className='number' controlId="formGridContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="cnic" placeholder="03xx-xxxxxxx" />
          </Form.Group>
          
          </Row>

          <Row className="cnic">
          
          <Form.Group as={Col} className='student-cnic' controlId="formGridCNIC">
            <Form.Label>Student CNIC</Form.Label>
            <Form.Control type="cnic" placeholder="Enter Student CNIC" />
          </Form.Group>

          <Form.Group as={Col} className='father-cnic' controlId="formGridContactCNIC">
            <Form.Label>Enter Father CNIC</Form.Label>
            <Form.Control type="cnic" placeholder="Enter Father CNIC" />
          </Form.Group>
          
          </Row>

          <Form.Group className="address" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
          </Form.Group>
          
          <Form className="qualification">
          <Form.Label>Last Qualification</Form.Label>
          {['radio'].map((type) => (
          <div key={`inline-${type}`} >
            <Form.Check
            inline
            label="Matric"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
            />
            <Form.Check
            inline
            label="Intermediate"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            />
            <Form.Check
            inline
            label="Graduate"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
            />
            <Form.Check
            inline
            label="Undergraduate"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
            />
            <Form.Check
            inline
            label="Masters"
            name="group1"
            type={type}
            id={`inline-${type}-5`}
            />
            <Form.Check
            inline
            label="PHD"
            name="group1"
            type={type}
            id={`inline-${type}-6`}
            />
          </div>
          ))}
          </Form>

          <Form.Group controlId="formFileLg" className="filechoose">
            <Form.Label>Passport Size Profile Image</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            />
          </Form.Group> 

          <Button type="submit">Submit form</Button>
          
        </Form>
      </div>
  );
}

export default Dropdown;