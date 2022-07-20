import { SmapleNextArrow } from "./Button"
import { SmaplePrevArrow } from "./Button"


export const Settings={

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow:<SmapleNextArrow/>,
    prevArrow:<SmaplePrevArrow/>,
  responsive: [
    {
        breakpoint: 1500,
        settings: {
          slidesToShow:5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          
        }
      },
    {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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