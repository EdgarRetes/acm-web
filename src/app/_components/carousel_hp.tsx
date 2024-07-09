import { Carousel } from "flowbite-react";
import Image from 'next/image';

export function Carrusel() {
  return (
    <div className="w-11/12" style={{ height: "800px" }}>
      <Carousel>
        <Image src="images/carousel-home-page/img1.jpeg" alt="img1"/>
        <Image src="images/carousel-home-page/img2.jpeg" alt="img2"/>
        <Image src="images/carousel-home-page/img3.jpeg" alt="img3"/>
        <Image src="images/carousel-home-page/img4.jpeg" alt="img4"/>
        <Image src="images/carousel-home-page/img5.jpeg" alt="img5"/>
        <Image src="images/carousel-home-page/img6.jpeg" alt="img6"/>
      </Carousel>
    </div>
  );
}
