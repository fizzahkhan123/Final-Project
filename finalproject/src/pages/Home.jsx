import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import FooterBar from "../Components/FooterBar";
import Product from "./Product1";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const initialItems = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLZyvjCldzINxJb2qxQelVjmPWs-nNejlIg&usqp=CAU",
      title: "Burger",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/29/54/8f/29548f4bd0b32b4919bd22ffe0723aca.jpg",
      title: "BBQ",
    },
    {
      imageUrl:
        "https://img.taste.com.au/VJhS0VEj/taste/2017/04/mocha-misu-cups-125928-1.jpg",
      title: "Desserts",
    },
  ];

  const additionalItems = [
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLZyvjCldzINxJb2qxQelVjmPWs-nNejlIg&usqp=CAU",
      title: "Burger",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/29/54/8f/29548f4bd0b32b4919bd22ffe0723aca.jpg",
      title: "BBQ",
    },
    {
      imageUrl:
        "https://img.taste.com.au/VJhS0VEj/taste/2017/04/mocha-misu-cups-125928-1.jpg",
      title: "Desserts",
    },
    {
      imageUrl:
        "https://alkhan.com.pk/wp-content/uploads/2022/11/Mellow-01.jpg",
      title: "Platters",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "Pasta And Noodles",
    },
    {
      imageUrl: "https://i.pinimg.com/736x/b9/7d/cf/b97dcfd89426a8992852d1bf54d94c83.jpg",
      title: "Sandwich",
    },
    {
      imageUrl:
        "https://cdn-food.tribune.com.pk/gallery/0Texvcqo500mya1lcLJiBtYjJOJ6awFofCRFnxGh.jpeg",
      title: "Handi",
    },
    {
      imageUrl:
        "https://butteroverbae.com/wp-content/uploads/2022/11/chicken-karahi-final.jpg",
      title: "Karahi",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIHWaiPAIWQzCwTeILzMS-NcOXlo2-TtgfhBLxSRTz7vMxu8npShYrtNSm3EUhc2vfjM&usqp=CAU",
      title: "Chinese",
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Log", localStorage.key('username'));
    if (localStorage.key('username') === null) {
      navigate('/login');      
      alert('Kindly log in');
    }
  }, [])
  

  const handleShowMore = () => {
    setShowMore(true);
  };

  const itemsToShow = showMore ? additionalItems : initialItems;

  return (
    <div className="main">
      {/* Banner or Slider Image */}
      <Slider />

      <div>
        <div className="row1">
          <div className="header">
            <h1>
              <b>Category Name</b>
            </h1>
          </div>
        </div>
        <div className="row2">
          {itemsToShow.map((item, index) => (
            <div key={index} className="internalCard">
              <img src={item.imageUrl} alt="" height={250} width={250} />
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        {!showMore && (
          <div className="show-more-button">
            <button onClick={handleShowMore}>Show More</button>
          </div>
        )}
        <div className="lining">
          <hr />
        </div>
        <div className="footer">
          <FooterBar />
        </div>
      </div>
    </div>
  );
}
