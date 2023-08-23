import React, { useState } from "react";
export default function Product() {

    const [productQuantity, setproductQuantity] = useState(1);



    
  return (
    <div>
      <div style={{display:"flex"}}>
        <div style={{ margin:10}}>
          <div style={{height:500, width:500}}>
            <img src="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383" alt="" style={{height:"inherit", width:"inherit"}} />
          </div>
          <div></div>
        </div>
        <div style={{margin:10}}>
          <div>
            <h3>Multi Purpose Powder - Blush & Eye</h3>
          </div>
          <div>
            <p>Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries & Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED™ and rated 'CLEAN'in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.</p>
          </div>
          <div>
            <div>Category: Powder </div>
          </div>
          <div><p>MRP: $ 2 inclusive of all taxes</p></div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div><h4>Quantity</h4></div>

          <div className="my-3">
          <button
            className="btn btn-dark mx-3"
            disabled={productQuantity > 1 ? false : true}
            onClick={() => setproductQuantity(productQuantity - 1)}
          >
            -
          </button>
          {productQuantity}
          <button
            className="btn btn-dark mx-3"
            onClick={() => setproductQuantity(productQuantity + 1)}
          >
            +
          </button>
        </div>
          <div><button>Add To Cart</button></div>
        </div>
      </div>
    </div>
  );
}
