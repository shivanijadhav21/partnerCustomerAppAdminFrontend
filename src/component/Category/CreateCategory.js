import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import "../PartnerCustomerAdmin.css";
function CreateCategory(){

   const {handleSubmit}=useForm();
   
    const initialCategoryState={
        id:null,
        category:""
    };

    const [categoryState, setCategoryState]=useState(initialCategoryState);

    const handleInputChange=(event)=>{
        const {name, value}=event.target;
        setCategoryState({...categoryState,[name]:value});
    }

    const onSubmit = data => {
        saveCategory(data);
      
    }

    const saveCategory=(data)=>{
        console.log(data)
    }


  return (
  <div>
      <Container>
          <Row>
          <Col md={4} xs={12}></Col>

              <Col md={4} xs={12} className='formSection'>
                  <h4>Add category</h4>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                  <Form.Label>Category:</Form.Label>
                  <Form.Control type="text" name="category" onChange={handleInputChange} required></Form.Control>
                  </Form.Group>

                  <Form.Group className='buttonSection'>
                      <Button type="submit"  className="btn btn-primary btn-block">Add category</Button>
                  </Form.Group>
              </Form>

              </Col>
              <Col md={4} xs={12}></Col>

          </Row>
      </Container>

  </div>);
}

export default CreateCategory;
