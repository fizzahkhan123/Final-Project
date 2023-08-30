import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230528/original/pngtree-variety-of-indian-food-is-served-on-a-table-picture-image_2778395.jpg"
          alt="First slide" height={500}
        />
        <Carousel.Caption>
          <h5><b>FK FOOD DIARY</b></h5>
          <p>We Will Provide You A Vast Variety And Variations In Fast Foods</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d2liqplnt17rh6.cloudfront.net/coverImages/cover_b8c68dce-599a-4cea-af6e-777ee789889b-115.jpeg"
          alt="Second slide" height={500}
        />
        <Carousel.Caption>
          <h5>FK FOOD DIARY</h5>
          <p>Providing Desi delights for your Apetite,Bringing You The Taste Of tradition</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg"
          alt="Third slide"height={500}
        />
        <Carousel.Caption>
          <h5>FK FOOD DIARY</h5>
          <p>
          We Will Provide You A Vast Variety And Variations In Fast Foods.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;