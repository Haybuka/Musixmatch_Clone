let bodyWidth = document.querySelector('body').clientWidth;

    $('.customer--stories').slick(slickers());

function slickers(){
  console.log(bodyWidth)
  if (bodyWidth <= 1002){
    return {
      centerMode: false,
      centerPadding: '20px',
      slidesToShow: 2,
      breakpoint : 1000,
      arrows:false,
      autoplay:true,
      responsive: [
        {
          breakpoint: 670,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2,
            autoplaySpeed:1500,
            cssEase:'ease-out'
          }
        },
        {
          breakpoint: 554,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1,
            autoplaySpeed:1500,
            cssEase:'ease-out',
            autoplay:false
          }
        }
      ]
    }
  }else{
    return 'unslick'
  }
}