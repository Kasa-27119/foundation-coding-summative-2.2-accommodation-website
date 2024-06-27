/* jshint esversion: 6 */

// accommodations array
const accommodations = [{
    // hostel #1
    id: 1,
    propertyName: "Kingston Hostel",
    propertyType: "hostel",
    address: "33 Dunmore St.",
    rating: 3,
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.14796156828785,
    latitude: -44.68833610545848,
    image: ["https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

  },
  {
    // hostel #2
    id: 2,
    propertyName: "Hedditch Cottage",
    propertyType: "hostel",
    address: "76 Hedditch St.",
    rating: 3,
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.14400050370767,
    latitude: -44.69240595726597,
    image: ["https://images.unsplash.com/photo-1535961671600-c244ea895cec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1535961671600-c244ea895cec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  },
  {
    // hotel #1
    id: 3,
    propertyName: "Belmont Lodge",
    propertyType: "hotel",
    address: "120 Browston St.",
    rating: 4.5,
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.1348656343329,
    latitude: -44.71476276242638,
    image: ["https://images.unsplash.com/photo-1682204803376-1c7dae90db28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1682204803376-1c7dae90db28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

  },
  {
    // hotel #2
    id: 4,
    propertyName: "Wanaka Retreat",
    propertyType: "hotel",
    address: "65  Little St.",
    rating: 4.5,
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.11241468540766,
    latitude: -44.694683102002955,
    image: ["https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  },
  {
    // motel #1
    id: 5,
    propertyName: "Lismore Motel",
    propertyType: "motel",
    address: "10 Lismore St.",
    rating: 3.5,
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.12749734263406,
    latitude: -44.68476604629336,
    image: ["https://images.unsplash.com/photo-1642552647918-32f6d5401980?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1642552647918-32f6d5401980?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  },
  {
    // motel #2
    id: 6,
    propertyName: "Mackay Point",
    propertyType: "motel",
    address: "59 Helwick St.",
    rating: 3.5,
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.13630262373874,
    latitude: -44.7110685267468,
    image: ["https://images.unsplash.com/photo-1642552645890-69e371b0a81f?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1642552645890-69e371b0a81f?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  },
  {
    // house #1
    id: 7,
    propertyName: "Brenner House",
    propertyType: "house",
    address: "25 Hunter Cres.",
    rating: 5,
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.1271424188769,
    latitude: -44.678758443829125,
    image: ["https://images.unsplash.com/photo-1599303061483-b93b527dc0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1599303061483-b93b527dc0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  },
  {
    // house #2
    id: 8,
    propertyName: "Beacon Sanctuary",
    propertyType: "house",
    address: "5 Beacon Point Rd.",
    rating: 5,
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.13020125245836,
    latitude: -44.67180474844172,
    image: ["https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  }
];

$(document).ready(function () {
  // Fullpage Init:
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: true,
    fixedElements: ".navbar",
  });

  // Prevent scroll of sections and slides:
  // fullpage_api.setAllowScrolling(false);

  // mapbox initialisation

  // DISABLE MAPBOX WHEN PAGE INSPECT IS NOT LOADING

  // mapbok token
  // mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  // const map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/mapbox/streets-v12",
  //   center: [169.13331678032918, -44.6950477150028],
  //   zoom: 12,
  // });

  // Swiper Init:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // jquery datepicker initialisation
  // start date field
  $("#startDate").datepicker({
    dateFormat: "dd/mm/yy",
  });

  // end date field
  $("#endDate").datepicker({
    dateFormat: "dd/mm/yy",
  });

  // prevent "find accommodations now" button default (slide 1)
  $("#findAccommodationsButton").click(function (event) {
    event.preventDefault();

    // move to next slide
    fullpage_api.moveTo(1, 1);

  });

  // prevent "find acccommodations" button default & validate (slide 2)
  $("#findAccommodationsSubmitButton").click(function (event) {
    event.preventDefault();

    // validates form inputs & move to slide 3
    if (validateFilters()) {
      // move to next slide
      fullpage_api.moveTo(1, 2);
    }

  });

  // initial accommodation population
  function populateAccommodationResults() {

    // get div from html
    const accommodationResults = $("#accommodation-results");

    // clear results of elements
    accommodationResults.html = ("");

    // populate results div with cards for each array object
    accommodations.forEach(accommodation => {
      const accommodationCard = `
      <div class="accommodation-card">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="${accommodation.image[0]}" alt="${accommodation.propertyName} image 1" class="accommodation-item-image" data-id="${accommodation.id}"></div>
            <div class="swiper-slide"><img src="${accommodation.image[1]}" alt="${accommodation.propertyName} image 2" class="accommodation-item-image" data-id="${accommodation.id}"></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="accommodation-details">
          <div class="accomm-details-top-container">
            <div class="accomm-details-header-container">
              <h3 class="green-header">${accommodation.propertyName}</h3>
              <h4 class="green-header">${accommodation.address}</h4>
            </div>
            <div class="accomm-details-ratings">
              <h3 class="accomm-ratings">${accommodation.rating}</h3>
              <i class="fa-solid fa-award"></i>
            </div>
          </div>
          <div class="accomm-details-bottom-container">
            <h3 class="black-label">$${accommodation.price}/night</h3>
            <h3 class="black-label">${accommodation.minPerson}-${accommodation.maxPerson} guests</h3>
          </div>
        </div>
      </div>
      `;

      // append accommodation card to results grid
      accommodationResults.append(accommodationCard);

      // re-initialise swiper
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
    });
  }

  // initial population callback
  populateAccommodationResults();

  // accommmodation filters on the form page (2nd slide)
  // validate filters (before filtering)

  function validateFilters() {
    // variables
    let validValue = true;
    let errorMessage = "";

    // check if filters are empty
    // if empty, then display the error message
    if ($("#accommodationType").val() === "") {
      validValue = false;
      errorMessage += "Please select an accommodation type<br>";
    }

    if ($("#numberOfGuests").val() === "") {
      validValue = false;
      errorMessage += "Please select the number of guests<br>";
    }

    if ($("#minPrice").val() === "") {
      validValue = false;
      errorMessage += "Please select a minimum price<br>";
    }

    if ($("#maxPrice").val() === "") {
      validValue = false;
      errorMessage += "Please select a maximum price<br>";
    }

    if ($("#startDate").val() === "") {
      validValue = false;
      errorMessage += "Please select a start date<br>";
    }

    if ($("#endDate").val() === "") {
      validValue = false;
      errorMessage += "Please select an end date<br>";
    }

    // if the form/input has a value = is valid
    if (!validValue) {
      $("#errorMessageContainer").html(errorMessage).show();
    } else {
      $("#errorMessage").hide();

    }

    // return passed objects as true
    return validValue;
    
  }

  // filter accommodations
  function filterAndPopulateAccommodations() {

    // get form inputs values
    const accommodationType = $("#accommodationType").val();
    const numberOfGuests = $("#numberOfGuests").val();
    const minPrice = $("#minPrice").val();
    const maxPrice = $("#maxPrice").val();
    const startDate = $("#startDate").val();
  }

  // calculate days of stay
  function calculateDaysOfStay() {

    // get date values from datepicker
    const startDate = $("#startDate").datepicker("getDate");
    const endDate = $("#endDate").datepicker("getDate");

    // calculate number of days
    if (startDate && endDate) {

      // calculate end date from start date
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

      // convert timeDiff to days
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    } else {
      return 0;
    }

  }

});