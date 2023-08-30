import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Product() {
  const { productID } = useParams();
  const [productQuantity, setProductQuantity] = useState(0);
  const [ product, setProduct ] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const url = window.location.origin + "/api/product-by-id/" + productID;
    const response = await axios.get(url);

    console.log("url", url);

    if (response.status == 200) {
      console.log("Product response", response.data.Product[0]);

      setProduct(response.data.Product[0]);
    } else {
      alert(response.data.message);
    }
  }


  return (
    <div>
      {
        product === null ?
        <p>Loading</p> :
        <div style={{ display: "flex" }}>
          <div style={{ margin: 10 }}>
            <div style={{ height: 500, width: 500 }}>
              <img
                src={product.ProductImage}
                alt=""
                style={{ height: "inherit", width: "inherit" }}
              />
            </div>
            <div></div>
          </div>
          <div style={{ margin: 10 }}>
            <div>
              <h3>{product.ProductName}</h3>
            </div>
            <div>
              <p>{product.ProductDescription}
              </p>
            </div>
            <div>
              <div>Category: {product.ProductCategory}</div>
            </div>
            <div>
              <p>Price{product.ProductPrice}</p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4>Quantity</h4>
            </div>

            <div className="my-3">
              <button
                className="btn btn-dark mx-3"
                disabled={productQuantity > 1 ? false : true}
                onClick={() => setProductQuantity(productQuantity - 1)}
              >
                -
              </button>
              {productQuantity}
              <button
                className="btn btn-dark mx-3"
                onClick={() => setProductQuantity(productQuantity + 1)}
              >
                +
              </button>
            </div>
            <div>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
