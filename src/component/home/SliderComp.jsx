import React from "react";
import Slider from "react-slick";

function SliderComp() {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-slate-100 p-7">
          <div>
          <div className="text-5xl font-bold mb-4 ">Ne baktın ayakkabı var bağcık var</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore veniam voluptates. Dolore, placeat laboriosam.</div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 mt-16 flex items-center justify-center bg-slate-300 ">bence incele...</div>
          </div>
        <img className="w-1/2" src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress" alt="img" />

        </div>
        <div className="!flex items-center bg-slate-100 p-7">
        <div>
          <div className="text-5xl font-bold mb-4 ">Ne baktın ayakkabı var bağcık var</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore veniam voluptates. Dolore, placeat laboriosam.</div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 mt-16 flex items-center justify-center bg-slate-300 ">bence incele...</div>
          </div>
        <img className="w-1/2" src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress" alt="img"/>
        </div>
        <div className="!flex items-center bg-slate-100 p-7">
        <div>
          <div className="text-5xl font-bold mb-4 ">Ne baktın ayakkabı var bağcık var</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore veniam voluptates. Dolore, placeat laboriosam.</div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 mt-16 flex items-center justify-center bg-slate-300 ">bence incele...</div>
          </div>
        <img className="w-1/2" src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress" alt="img"/>
        </div>
       
      </Slider>
    </div>
  );
}


export default SliderComp;
