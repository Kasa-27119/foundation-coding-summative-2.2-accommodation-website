/* jshint esversion: 6 */

// accommodations array
const accommodations = [
  {
    // hostel #1
    id: 1,
    propertyName: "Kingston Hostel",
    propertyType: "hostel",
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.14796156828785,
    latitude: -44.68833610545848,
    image: "https://images.unsplash.com/photo-1553444859-788c4b385b13?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    // hostel #2
    id: 2,
    propertyName: "Hedditch Cottage",
    propertyType: "hostel",
    minPerson: 1,
    maxPerson: 1,
    minStay: 1,
    maxStay: 10,
    price: 30,
    longitude: 169.14400050370767,
    latitude: -44.69240595726597, 
    image: "https://images.unsplash.com/photo-1535961671600-c244ea895cec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // hotel #1
    id: 3,
    propertyName: "Belmont Lodge",
    propertyType: "hotel",
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.1348656343329,
    latitude: -44.71476276242638,  
    image: "https://images.unsplash.com/photo-1682204803376-1c7dae90db28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    // hotel #2
    id: 4,
    propertyName: "Wanaka Retreat",
    propertyType: "hotel",
    minPerson: 1,
    maxPerson: 2,
    minStay: 1,
    maxStay: 5,
    price: 157,
    longitude: 169.11241468540766,
    latitude: -44.694683102002955,
    image: "https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // motel #1
    id: 5,
    propertyName: "Lismore Motel",
    propertyType: "motel",
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.12749734263406,
    latitude: -44.68476604629336, 
    image: "https://images.unsplash.com/photo-1642552647918-32f6d5401980?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // motel #2
    id: 6,
    propertyName: "Mackay Point",
    propertyType: "motel",
    minPerson: 2,
    maxPerson: 4,
    minStay: 3,
    maxStay: 10,
    price: 90,
    longitude: 169.13630262373874,
    latitude: -44.7110685267468, 
    image: "https://images.unsplash.com/photo-1642552645890-69e371b0a81f?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // house #1
    id: 7,
    propertyName: "Brenner House",
    propertyType: "house",
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.1271424188769,
    latitude: -44.678758443829125,
    image: "https://images.unsplash.com/photo-1599303061483-b93b527dc0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // house #2
    id: 8,
    propertyName: "Beacon Sanctuary",
    propertyType: "house",
    minPerson: 1,
    maxPerson: 4,
    minStay: 2,
    maxStay: 15,
    price: 240,
    longitude: 169.13020125245836,
    latitude: -44.67180474844172,
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

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

// mapbok token
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

// const map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/streets-v12",
//   center: [169.13331678032918, -44.6950477150028],
//   zoom: 12,
// });

// Swiper Init:
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
  
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });

// jquery datepicker initialisation
$(document).ready(function() {
  // start date field
  $("#startDate").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // end date field
  $("#endDate").datepicker({
    dateFormat: "dd/mm/yy"
  });
});