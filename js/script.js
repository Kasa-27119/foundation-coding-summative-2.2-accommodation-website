/* jshint esversion: 6 */

// accommodations array
const accommodations = [{
    // hostel #1
    id: 1,
    propertyName: "Kingston Hostel",
    propertyType: "Hostel",
    address: "33 Dunmore St.",
    rating: 3,
    drinks: false,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.13618468201614,
    latitude: -44.69307027796208,
    image: ["https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 3-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,
  },
  {
    // hostel #2
    id: 2,
    propertyName: "Hedditch Cottage",
    propertyType: "Hostel",
    address: "76 Hedditch St.",
    rating: 3,
    drinks: false,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.14760760393548,
    latitude: -44.691159389348286,
    image: ["https://images.unsplash.com/photo-1535961671600-c244ea895cec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1535961671600-c244ea895cec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 10-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,
  },
  {
    // hotel #1
    id: 3,
    propertyName: "Belmont Lodge",
    propertyType: "Hotel",
    address: "120 Browston St.",
    rating: 4.5,
    drinks: true,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.1348656343329,
    latitude: -44.71476276242638,
    image: ["https://images.unsplash.com/photo-1682204803376-1c7dae90db28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1682204803376-1c7dae90db28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 10-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,

  },
  {
    // hotel #2
    id: 4,
    propertyName: "Wanaka Retreat",
    propertyType: "Hotel",
    address: "65  Little St.",
    rating: 4.5,
    drinks: true,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.11241468540766,
    latitude: -44.694683102002955,
    image: ["https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `A cozy and luxurious lodge nestled in the alpine hills overlooking the great Wanaka lake, Belmont Lodge provides its visitors a breathtaking and rejuvenating getaway from the city hustle and bustle. Located just a 3 mins. walk away from Milford Sound Tours, you can assure to never miss a great adventure into the South Islands most picturesque landscapes.`,
  },
  {
    // motel #1
    id: 5,
    propertyName: "Lismore Motel",
    propertyType: "Motel",
    address: "10 Lismore St.",
    rating: 3.5,
    drinks: false,
    meals: true,
    wifi: true,
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.13625139036435,
    latitude: -44.69560231920775,
    image: ["https://images.unsplash.com/photo-1642552647918-32f6d5401980?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1642552647918-32f6d5401980?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Lismore Motel is a comfortable and spacious motel located near the Wanaka waterfront, for our guests convenience to enjoy the culinary and shopping center of our humble and picturesque town. All of our guests can take a sunny morning stroll along the lake promenade and even visit the Information Center, where they can get more tourist info on the Lake Wanaka and greater region.`,
  },
  {
    // motel #2
    id: 6,
    propertyName: "Mackay Point",
    propertyType: "Motel",
    address: "59 Helwick St.",
    rating: 3.5,
    drinks: false,
    meals: true,
    wifi: true,
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.13630262373874,
    latitude: -44.7110685267468,
    image: ["https://images.unsplash.com/photo-1642552645890-69e371b0a81f?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1642552645890-69e371b0a81f?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 10-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,
  },
  {
    // house #1
    id: 7,
    propertyName: "Brenner House",
    propertyType: "House",
    address: "25 Hunter Cres.",
    rating: 5,
    drinks: true,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.1271424188769,
    latitude: -44.678758443829125,
    image: ["https://images.unsplash.com/photo-1599303061483-b93b527dc0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1599303061483-b93b527dc0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 10-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,
  },
  {
    // house #2
    id: 8,
    propertyName: "Beacon Sanctuary",
    propertyType: "House",
    address: "5 Beacon Point Rd.",
    rating: 5,
    drinks: true,
    meals: true,
    wifi: true,
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.13020125245836,
    latitude: -44.67180474844172,
    image: ["https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    description: `Beside the calming  and grand lake Wanaka, and a 10-min walk from the lakeside central business district, Kingston Hostel offers a comfortable and humble experience to its guests. The ground level of the hostel hosts an award-winning cafe, The Caffeine Fix, and a gift-shop, where its visitors can browse and buy hand-made and local trinkets and novelty gifts hand-crafted by our community.`,
  }
];

// global selectedAccommodationId variable
let selectedAccommodationId = null;

$(document).ready(function() {
  // Fullpage Init:
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    fixedElements: ".navbar, #accommodationModal",
  });

  // mapbox initialisation
  function initialiseMapbox(longitude, latitude) {
    // mapbok token
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

    // initialise map
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: 13,
    });

    // set marker at the location point
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }

  // Swiper Init:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
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
  $("#findAccommodationsButton").click(function(event) {
    event.preventDefault();

    // move to next slide
    fullpage_api.moveTo(1, 1);
  });

  // prevent "find accommodations" button default & validate (slide 2)
  $("#findAccommodationsSubmitButton").click(function(event) {
    event.preventDefault();

    // validates form inputs & move to slide 3
    if (validateFilters()) {
      // move to next slide
      fullpage_api.moveTo(1, 2);
      // run filter and populate function
      filterAndPopulateAccommodations();
    }
  });

  // prevent "go to booking details" button default & go to next slide
  $("#accommMealsSubmitButton").click(function(event) {
    event.preventDefault();

    // check if an accommodation has been selected
    if (selectedAccommodationId !== null) {
      populateBookingDetails(selectedAccommodationId);
      fullpage_api.moveTo(1, 4);
    } else {
      alert("Please select an accommodation first");
    }
  });

  // initial accommodation population
  function populateAccommodationResults(accommodations) {
    // get div from html
    const accommodationResults = $("#accommodation-results");

    // clear results of elements
    accommodationResults.html("");

    // populate results div with cards for each array object
    for (i = 0; i < $(accommodations).length; i++) {
      const accommodation = accommodations[i];
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

      // initialise modal on click function
      openModalOnClick();
    }

    // re-initialise swiper
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
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
  }

  // initial population callback
  populateAccommodationResults();

  // accommodation filters on the form page (2nd slide)
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
    const numberOfGuests = parseInt($("#numberOfGuests").val());
    const minPrice = parseFloat($("#minPrice").val().replace("$", ""));
    const maxPrice = parseFloat($("#maxPrice").val().replace("$", ""));
    const diffDays = calculateDaysOfStay();

    // filter over accommodation objects and return as filteredAccommodations
    const filteredAccommodations = accommodations.filter(accommodation => {
      return (
        (accommodationType === "any" || accommodation.propertyType === accommodationType) &&
        (accommodation.minPerson <= numberOfGuests) &&
        (accommodation.maxPerson >= numberOfGuests) &&
        (accommodation.price >= minPrice) &&
        (accommodation.price <= maxPrice) &&
        (accommodation.minStay <= diffDays) &&
        (accommodation.maxStay >= diffDays)
      );
    });

    populateAccommodationResults(filteredAccommodations);
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

  // open modal on click
  function openModalOnClick() {
    // get dialog modal from html $ swiper images
    const accommModalContainer = $("#accommodationModal")[0];
    const accomSwiperImages = $(".accommodation-item-image");

    // open modal on click - for all accommodation swiper images
    accomSwiperImages.on("click", function (event) {
      accommModalContainer.showModal();
      document.body.classList.add("opened-modal");

      // get accommodation swiper image id & populate on click
      const accommodationId = event.target.getAttribute("data-id");
      // keep opened accommodation id
      selectedAccommodationId = accommodationId;
      populateModal(accommodationId);
    });

    // added close function
    closeAccommodationModal();
  }

  // close modal function
  function closeAccommodationModal() {
    // get the modal close button & modal container
    const closeModalButton = $("#closeModal");

    // remove existing event listener (if needed)
    closeModalButton.off("click", closeModalHandler);

    // apply click event on close
    closeModalButton.on("click", closeModalHandler);
  }

  // close modal handler function
  function closeModalHandler() {
    const accommModalContainer = $("#accommodationModal");
    accommModalContainer[0].close();
    document.body.classList.remove("opened-modal");
  }

  // populate modal function
  function populateModal(accommodationId) {
    // get modal from html & accommodation objects
    const accommModalContent = $(".modalContent");
    const accommodation = accommodations.find(a => a.id == accommodationId);
    
    // initialise map & set long lat
    const longitude = accommodation.longitude;
    const latitude = accommodation.latitude;

    // add modal content
    accommModalContent.html(`
    <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="${accommodation.image[0]}" alt="${accommodation.propertyName} image1" class="accommodation-item-image" data-id="${accommodation.id}"></div>
          <div class="swiper-slide"><img src="${accommodation.image[1]}" alt="${accommodation.propertyName} image2" class="accommodation-item-image" data-id="${accommodation.id}"></div>
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
      <div class="accommodation-info">
        <p class="black-body-text">${accommodation.description}</p>
        <div class="accomm-ammenities">
          <h3 class="blue-header">Ammenities: </h3>
            <i class="fa-solid fa-wine-glass-empty blue-icon"></i>
            <i class="fa-solid fa-utensils blue-icon"></i>
            <i class="fa-solid fa-wifi blue-icon"></i>
        </div>
        <div id="map"></div>
      </div>
      <div class="book-accomm-btn-container">
        <button class="book-accomm-submit-btn" id="bookAccommButton">Book Accommodation</button>
      </div>
    </div>
    `);

    // re-initialise swiper for modal
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // initialise mapbox
    initialiseMapbox(longitude, latitude);

    // bookAccommButton on click
    $("#bookAccommButton").on("click", function(event) {
      // prevent default
      event.preventDefault();

      // close accommodation modal
      closeModalHandler();

      // move to meals options slide
      fullpage_api.moveTo(1, 3);
    });
  }

  // calculate total booking fee
  function calculateBookingFee() {
    // get opened accommodation id
    const accommodation = accommodations.find(a => a.id == selectedAccommodationId);

    // get days of stay
    const numberOfDays = calculateDaysOfStay();

    // get chosen accommodation price
    const accommodationPrice = accommodation.price;

    // get selected meal option
    const mealsOption = $('input[name="mealsOption"]:checked').val();
    const mealsPrice = parseFloat(mealsOption);
    // const mealOptionValue = mealsOption[selectedMealOption];

    // calculate the total booking fee
    const totalFee = (accommodationPrice * numberOfDays) + mealsPrice;

    // return the total fee
    return totalFee;
  }

  // populate booking details page function 
  function populateBookingDetails(accommodationId) {
    // get opened accommodation id
    const accommodation = accommodations.find(a => a.id == accommodationId);

    // get form input values
    const numberOfGuests = $("#numberOfGuests").val();
    const startDate = $("#startDate").datepicker("getDate");
    const endDate = $("#endDate").datepicker("getDate");
    const numberOfDays = calculateDaysOfStay();

    // get total booking fee
    const totalFee = calculateBookingFee();

    // format start and end dates to dd/mm/yy
    const formattedStartDate = $.datepicker.formatDate("dd/mm/yy", startDate);
    const formattedEndDate = $.datepicker.formatDate("dd/mm/yy", endDate);

    // get output main container
    const outputBookingDetails = $("#outputBookingDetails");

    // output container population
    const outputBookingHtml = `
      <div class="booking-details-left-container">
        <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="${accommodation.image[0]}" alt="${accommodation.propertyName} image1" class="accommodation-item-image" data-id="${accommodation.id}"></div>
              <div class="swiper-slide"><img src="${accommodation.image[1]}" alt="${accommodation.propertyName} image2" class="accommodation-item-image" data-id="${accommodation.id}"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div id="map"></div>
        <button class="form-submit-btn">Confirm Booking</button>
      </div>
                    
    <div class="booking-details-right-container">
        <div class="booking-info-main-container">
            <h3 class="green-header">Booking Details</h3>

            <div class="booking-info-text-container">
                <h4 class="blue-booking-header">Accommodation Name</h4>
                <div class="booking-info-body-container">
                    <p class="black-body-text-large">${accommodation.propertyName}</p>
                </div>

                <h4 class="blue-booking-header">Location Address</h4>
                <div class="booking-info-body-container">
                    <p class="black-body-text-large">${accommodation.address}</p>
                </div>

                <h4 class="blue-booking-header">Total Booking Fee</h4>
                <div class="booking-info-body-container">
                    <p class="black-body-text-large">$${totalFee} (Total Booking & Meals Fee)</p>
                </div>

                <h4 class="blue-booking-header">Number of Guests</h4>
                <div class="booking-info-body-container">
                    <p class="black-body-text-large">${numberOfGuests} guests</p>
                </div>

                <h4 class="blue-booking-header">Check In & Out Date</h4>
                <div class="booking-info-body-container">
                    <p class="black-body-text-large">Check In: ${formattedStartDate}</p>
                    <p class="black-body-text-large">Check Out: ${formattedEndDate}</p>
                    <p class="black-body-text-large">Number of Nights: ${numberOfDays}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    const longitude = accommodation.longitude;
    const latitude = accommodation.latitude;

    // empty output booking details container
    outputBookingDetails.empty();
    outputBookingDetails.append(outputBookingHtml);
    initialiseMapbox(longitude, latitude);

    // re-initialise swiper
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});