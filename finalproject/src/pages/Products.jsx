import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';


export default function Products() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get(`/api/products`)
      .then((json) => {
        setProducts(json.data.products);
        console.log(json.data);
      })
      .catch((e) => {
        console.log("Error getting products", e);
      });
  }

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>Products</h1>
        <p className="text-secondary">
          These are the products of your required category
        </p>
        <div className="spinner-grow text-info">
        <Spinner animation="border" variant="warning" />
        </div>
      </div>
      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-3 my-3" key={key}>
            <Link className="text-decoration-none" to={`/products/${val._id}`}>
              <Card style={{ width: 250 }}>
                <Card.Img
                  variant="top"
                  src={val.ProductImage}
                  height={200}
                />
                <Card.Body>
                  <Card.Title className="card-heading">{val.ProductName}</Card.Title>
                  <Card.Text className="price-tag">{val.ProductPrice}$</Card.Text>
                  <Card.Text className="price-tag">{val.ProductCategory}</Card.Text>
                  <Card.Text title={val.ProductDescription} className="card-text">
                    {val.ProductDescription}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
