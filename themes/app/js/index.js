/**
 * code for navbar HNAZMUL__NAVBAR__NWLSBM;
 * it has used in every per page
 */
const HNAZMUL__NAVBAR__NWLSBM_sitebarContent = document.querySelector(
  'nav#HNAZMUL_Navbar_NWLSBM .HNAZMUL_Navbar_NWLSBM-container .HNAZMUL_Navbar_NWLSBM-sitebar-content'
);
const HNAZMUL__NAVBAR__NWLSBM_toggler = document.querySelector(
  'nav#HNAZMUL_Navbar_NWLSBM .HNAZMUL_Navbar_NWLSBM-container .HNAZMUL_Navbar_NWLSBM-content .navbar-items-wrapper .nav-item .nav-link.toggler-icon'
);

if (HNAZMUL__NAVBAR__NWLSBM_sitebarContent) {
  HNAZMUL__NAVBAR__NWLSBM_toggler.addEventListener('click', () => {
    HNAZMUL__NAVBAR__NWLSBM_sitebarContent.classList.add('show');

    HNAZMUL__NAVBAR__NWLSBM_sitebarContent.onclick = (event) => {
      event.target.classList.remove('show');
    };
  });
}

/** Faq pages script here */
const theButton = document.querySelectorAll(
  '#FAQ-page-css .arrow-btn .button '
);
const allDescripton = document.querySelectorAll(
  '#FAQ-page-css .faqs-section .faq-boxes .faq-box .description'
);

if (theButton) {
  let toogled = null;
  theButton.forEach(function (x, index) {
    x.addEventListener('click', function () {
      if (toogled !== index) {
        allDescripton.forEach((desc) => {
          desc.classList.add('d-nai');
        });
      }
      allDescripton[index].classList.toggle('d-nai');
      toogled = index;
    });
  });
}

// info button

const popoverTriggerList = []?.slice?.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
const popoverList = popoverTriggerList?.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

// serach button popover
const popoverFunction = () => {
  console.log('object');
  $('[data-toggle="popover"]').popover();
};

//underscore under floating menu
document.getElementById('trending').style.borderBottom = '5px solid black';

const secondaryTrendDesign = () => {
  document.getElementById('latest').style.borderBottom = '';
  document.getElementById('keywords').style.borderBottom = '';
  document.getElementById('trending').style.borderBottom = '5px solid black';
};

const secondaryLatestDesign = () => {
  document.getElementById('keywords').style.borderBottom = '';
  document.getElementById('trending').style.borderBottom = '';
  document.getElementById('latest').style.borderBottom = '5px solid black';
};

const secondaryKeywordsDesign = () => {
  document.getElementById('trending').style.borderBottom = '';
  document.getElementById('latest').style.borderBottom = '';
  document.getElementById('keywords').style.borderBottom = '5px solid black';
};

// dynamic counter

var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById('dynamic-counter').innerHTML =
    '<h1>' + hours + ':' + minutes + ':' + seconds + '</h1>';

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('dynamic-counter').innerHTML = 'EXPIRED';
  }
}, 1000);

// Collapsable

const Collapse = () => {
  var content = document.querySelector('.Collapsecontent');
  if (content.style.height === '40px') {
    content.style.opacity = '0';
    content.style.height = '0px';
    document.querySelector('#keywords').style.display = 'none';
  } else {
    content.style.opacity = '1';
    content.style.height = '40px';
    document.querySelector('#keywords').style.display = 'block';
  }
};

//filterbar collapse
const filterBarCollapse = () => {
  var filterBarcontent = document.querySelector('#container-mobile');
  if (filterBarcontent.style.display === 'block') {
    filterBarcontent.style.display = 'none';
  } else {
    filterBarcontent.style.display = 'block';
  }
};

const callME = () => {
  console.log('call me');
};

// var popover = new bootstrap.Popover(document.querySelector("#myPopover"), {
//     trigger: "focus",
// });

/*  */
try {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
  });
} catch (err) {
  console.log(err);
}
