import { SmapleNextArrow } from "./Button"
import { SmaplePrevArrow } from "./Button"
import "./button.css"

export const Settings={

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow:<SmapleNextArrow/>,
    prevArrow:<SmaplePrevArrow/>,
  responsive: [
    {
        breakpoint: 1500,
        settings: {
          slidesToShow:4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          
        }
      },
    {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite:false,
            dots: false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialslide:2
        
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

}