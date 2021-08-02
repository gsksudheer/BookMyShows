const settings = {
    autoplay:false,
    infinity: false,
    slidesToShow: 5,
    slidesToScroll:4,
    InitialSlide: 0,
    responsive: [{
      breakpoints: 1024,
      settings:{
        slidesToShow:5,
        slidesToScroll: 2,
        infinite:true,
      },
    },{
      breakpoints: 768,
      settings:{
        slidesToShow:5,
        slidesToScroll: 2,
        InitialSlide: 1,
        infinite:true,
      },
    },{
      breakpoints: 480,
      settings:{
        /* slidesToShow : 3,
        slidesToScroll : 2, */
        infinite:true,
      },
    },
    
    ],
};
export default settings;