import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Spinner, Table, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import SideBar from "./Sidebar";
const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://dev-pricelist-api.websodev.com/api/price-list`
      );
      setData(response.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleEdit = (index) => {
    setEditableRowIndex(index);
  };

  const handleDataChange = (event, index, key) => {
    const updatedData = [...data.data];
    updatedData[index][key] = event.target.value;
    setData({ data: updatedData });
  };

  const handleSave = (item, index) => {
    // Send the updated data to the server
    const updatedItem = { ...item, ...data.data[index] };

    axios
      .put("https://dev-pricelist-api.websodev.com/api/price-list", updatedItem)
      .then(() => setEditableRowIndex(null))
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCancel = () => {
    setEditableRowIndex(null);
    fetchData();
  };

  const handleDelete = (id) => {
    // Delete the data from the server
    axios
      .delete(`https://dev-pricelist-api.websodev.com/api/price-list/${id}`)
      .then(() => fetchData())
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className={styles.spinner}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : data?.data ? (
        <div className={styles.table_wrapper}>
          <Table striped bordered hover size="xxl">
            <thead className={styles.thead}>
              <tr>
                <th>User Id</th>
                <th>Username</th>
                {/* <th>Author Name</th>
                <th>Author Email</th> */}
                <th>Description</th>
                <th>Updated</th>
                <th>Created</th>
                <th>Img</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    {editableRowIndex === index ? (
                      <input
                        type="text"
                        value={item.name}
                        onChange={(event) =>
                          handleDataChange(event, index, "name")
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  {item.author_details ? (
                    <>
                      {/* <td> */}
                        {/* {editableRowIndex === index ? (
                          <input
                            type="text"
                            value={item.author_details.author_name}
                            onChange={(event) =>
                              handleDataChange(
                                event,
                                index,
                                "author_details.author_name"
                              )
                            }
                          />
                        ) : (
                          item.author_details.author_name */}
                        {/* )} */}
                        {/* </td> */}
                        {/* <td>
                        {editableRowIndex === index ? (
                          <input
                            type="text"
                            value={item.author_details.author_email}
                            onChange={(event) =>
                              handleDataChange(
                                event,
                                index,
                                "author_details.author_email"
                              )
                            }
                            onBlur={() => handleSave(item, index)}
                          /> */}
                        {/* ) : (
                          <div onClick={() => handleEdit(index)}>
                            {item.author_details.author_email}
                          </div>
                        )} */}
                      {/* </td> */}
                      <td>{item.description}</td>
                      <td>{item.created_at}</td>
                      <td>{item.updated_at}</td>
                      <td>
                        <img
                          className={styles.img}
                          src="https://www.pngmart.com/files/17/Fresh-Fruits-PNG-Image.png"
                          alt={item.name}
                        />
                      </td>{" "}
                      <td>
                        {editableRowIndex === index ? (
                          <div>
                            <Button
                              variant="success"
                              onClick={() => handleSave(item, index)}
                            >
                              Save
                            </Button>{" "}
                            <Button variant="warning" onClick={handleCancel}>
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Button
                              variant="primary"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        )}
                      </td>
                    </>
                  ) : (
                    <td colSpan="3">No author details found.</td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>Error loading data</div>
      )}
      {/* <div className={styles.sidebar_wrapper}>
        <SideBar />
      
      </div> */}
    </div>
  );
};

export default Details;
