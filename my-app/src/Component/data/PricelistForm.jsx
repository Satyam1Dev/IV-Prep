import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PricelistData from './PricelistData';
import "./styles.css";
import axios from 'axios';
import Row from 'react-bootstrap/Row';


const PricelistForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [yourName, setYourName] = useState("");
  const [refreshData, setRefreshData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      window.alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post(`https://dev-pricelist-api.websodev.com/api/price-list`, {
        name: name,
        description: description
      });
      console.log(response.data);
      setName('');
      setDescription('');
      setYourName('');
      setRefreshData(!refreshData); // toggle refreshData state variable
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className='wrapper'>
      <div id='form-wrapper'>
        <Row>
          <img  className='img' src="https://pricelist.websodev.com/assets/sukanfood-logo.png" />
          <Form.Text id='price-Heading'>
            Create Price List
          </Form.Text>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Price List Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupYourName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" value={yourName} onChange={(e) => setYourName(e.target.value)} />
          </Form.Group>
          <Button type="submit">+Start</Button>
        </Form>
      </div>
      <div id='price-list-data'>
        <PricelistData refreshData={refreshData} setRefreshData={setRefreshData} />
      </div>
    </div>
  );
};

export default PricelistForm;
