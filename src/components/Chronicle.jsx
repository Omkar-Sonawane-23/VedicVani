import React from 'react'
import './chronicle.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Chronicle = () => {
  const imageList = [
    { src: "./img/download (5).jpeg", alt: "Image 3" },
    { src: "./img/9 Times Krishna Showed How He Is The Real Boss In Mahabharata.jpeg", alt: "Image 1"},
    { src: "./img/An Italian Painter Studied Mahabharat & Made These Breathtaking Paintings In A Span Of 12 Years - ScoopWhoop (1).jpeg", alt: "Image 2" },
    { src: "./img/An Italian Painter Studied Mahabharat & Made These Breathtaking Paintings In A Span Of 12 Years - ScoopWhoop.jpeg", alt: "Image 3" },
    { src: "./img/download (1).jpeg", alt: "Image 3" },
    { src: "./img/download (2).jpeg", alt: "Image 3" },
    { src: "./img/download (3).jpeg", alt: "Image 3" },
    { src: "./img/Draupadi's greatest regret after the Mahabharata war.jpeg", alt: "Image 3" },
    { src: "./img/Indian Mythology, An Inspiration for International Artists.jpeg", alt: "Image 3" },
    { src: "./img/the-geeta-1-chandresh-patel.jpg", alt: "Image 3" },
    { src: "./img/Lord Krishna and Arjuna on chariot in Mahabharata.jpeg", alt: "Image 3" },
    { src: "./img/Lord Krishna showing his Universal form to Arjuna.jpeg", alt: "Image 3" },
    { src: "./img/Abhimanyu-and-the-Chakravyuha-Padmavyuha-Mahabharta.jpg", alt: "Image 3" },
    { src: "./img/1_RxrAEthB92moDcYZRpzk5g.jpg", alt: "Image 3" },
    { src: "./img/83565e03ff74ee06cbc690bd3f144377.jpg", alt: "Image 3" },
    { src: "./img/DraupadiHumiliatedInKauravaCourt-RajaRaviVarma-VintageIndianMahabharatPainting_f281c45b-5f23-45cf-9070-e331d6f2f937.jpg", alt: "Image 3" },
    { src: "./img/mahabharata-bhishma-pitamah.jpg", alt: "Image 3" },
    { src: "./img/dhritrashtra-and-gandhari.webp", alt: "Image 3" },
    { src: "./img/wp2765079.jpg", alt: "Image 3" },
   


    /*{ src: "", alt: "Image 4" },*/
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    appendDots: (dots) => (
      <div>
        <ul style={{  padding: "0", margin :"0" }}>{dots}</ul>
      </div>
    ),
  
  };
  
  return (
    <>
    
    <div className="Carousel" style={{margin:"0", padding:"0",backgroundAttachment:'fixed'}}>
    
    <div style={{maxWidth: "700px", margin: "0 auto",marginTop: "50px",objectFit:"cover",backgroundColor:"#2a2a2a"}}>
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} style={{ margin: "0 0px" }}>
            <div
              className="box"
              style={{
                margin:"50px",
                padding:0,
                height:'400px',
                maxWidth: "700px",
                background: "#FFA559",
                overflow: "hidden",
                color: "",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "80%",
                  height: "90%",
                  
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};


export default Chronicle
