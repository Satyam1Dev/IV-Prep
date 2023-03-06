import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import "./styles.css";
import axios from "axios"

function PricelistData({ refreshData }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const newCardRef = useRef(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await axios.get("https://dev-pricelist-api.websodev.com/api/price-list");
      setData(response.data.data); // set the retrieved data
    } catch (error) {
      console.error(error); // log any errors
      // handle the error here
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [refreshData]);
  useEffect(() => {
    if (newCardRef.current) {
      setIsLoading(false);
    }
  }, [data]);
  const handleNewCardLoad = () => {
    setIsLoading(false);
  }
  return (
    <div className='data-wrapper'>
      <h3 price-Heading> Lists Name</h3>
      <div className='container'>
        {data.map((item, index) => (
          <Card key={index}>
            <Card.Body>
              <Card.Text>Name: {item.name}</Card.Text>
              {item.price &&
                <Card.Text>Price: {item.price}</Card.Text>
              }
            </Card.Body>
            <Card.Body>
            <Link to={`/details/${item.id}`}>
  <Button variant="outline-dark">Go to Details</Button>
</Link>
            </Card.Body>
          </Card>
        ))}
        <div ref={newCardRef}>
          {isLoading &&
            <div className='spinner-wrapper'>
              <Spinner animation='border' variant='primary' />
            </div>
          }
          <Card onLoad={handleNewCardLoad} style={{ display: 'none' }}>
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default PricelistData;
