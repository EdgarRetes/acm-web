import { Carousel } from "flowbite-react";

export function Carrusel() {
  return (
    <div className="w-11/12" style={{ height: "300px" }}>
      <Carousel>
        <img src="images/projects-icpc/carousel_icpc_01.jpg"/>
        <img src="images/projects-icpc/carousel_icpc_02.png"/>
        <img src="images/projects-icpc/carousel_icpc_03.jpg"/>
        <img src="images/projects-icpc/carousel_icpc_04.jpg"/>
        <img src="images/projects-icpc/carousel_icpc_05.jpg"/>
        <img src="images/projects-icpc/carousel_icpc_06.jpg"/>
        <img src="images/projects-icpc/carousel_icpc_07.jpg"/>
      </Carousel>
    </div>
  );
}
