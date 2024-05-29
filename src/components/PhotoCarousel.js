import React from "react";
import "./PhotoCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItems() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          paddingTop: "5px",
          width: "40px",
          height: "30px",
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          width: "50px",
          height: "50px",
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className=" m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[250px] text-black">
              <div className="flex justify-center items-center">
                <img src={d.img} alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 h-60 w-60 rounded-md" />
              </div>
              <div>
                <p>{d.title}</p>
                <button>View Homes</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
const data = [
  {
    title: "Alanata,Ga",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/atlanta/downtown/1935-ga_atl_downtown_82792_048_500x_cfit.jpg",
  },
  {
    title: "Austin,TX",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/tx/austin/rosedale/311-tx_aus_rosedale_275246_0131_500x_cfit.jpg",
  },
  {
    title: "Scottscald,AZ",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/az/scottsdale/north-scottsdale/2746-az_pdx_north_scottsdale_0087_500x_cfit.jpg",
  },
  {
    title: "Oackland,CA",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ca/oakland/longfellow/570-ca_sf_longfellow_268264_0059_500x_cfit.jpg",
  },
  {
    title: "Sandy Springs,Ga",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ga/sandy-springs/north-springs/1881-ga_atl_north_springs_236927_149_500x_cfit.jpg",
  },
  {
    title: "Newton,Ma",
    img: "https://media-cdn.trulia-local.com/neighborhood-media-service-prod/ma/newton/chestnut-hill/1333-ma_bos_chestnut_hill_37857_189_500x_cfit.jpg",
  },
];

export default MultipleItems;
