//import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NativeBar() {

  useEffect(() => {
    console.log('navigation rendered');
  }, [localStorage.key('username')]);
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          FK FOOD DIARY
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
            {
                localStorage.key("username") === "" || localStorage.key("username") === null ? <>
                    <Link className="nav-link" to="/login">
                    Login
                    </Link>
                    <Link className="nav-link" to="/signup">
                    SignUp
                    </Link>
                </> : <>
                <Link className="nav-link" to="/login" onClick={() => {localStorage.removeItem("username"); console.log(localStorage.key("username"));}}>
                Logout
                </Link></>
            }
            <Link className="cart-button" to="/cart">
              <img
                src="https://www.citypng.com/public/uploads/preview/download-hd-shopping-cart-black-logo-icon-png-11640441685ymd041qjws.png"
                alt="Add to Cart"
                className="cart-icon"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NativeBar;
