import { Carousel } from "flowbite-react";

export function Carrusel() {
  return (
    <div className="w-11/12" style={{ height: "800px" }}>
      <Carousel>
        <img src="images/carousel-home-page/img1.jpeg"/>
        <img src="images/carousel-home-page/img2.jpeg"/>
        <img src="images/carousel-home-page/img3.jpeg"/>
        <img src="images/carousel-home-page/img4.jpeg"/>
        <img src="images/carousel-home-page/img5.jpeg"/>
        <img src="images/carousel-home-page/img6.jpeg"/>
      </Carousel>
    </div>
  );
}
