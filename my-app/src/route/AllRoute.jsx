import { Routes, Route, Link } from "react-router-dom";
import Details from "../Component/detailinfo/Details";
import PricelistForm from "../Component/data/PricelistForm";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const AllRoute = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Pricelist App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<PricelistForm />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default AllRoute;
