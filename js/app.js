'use strict';

let serviceArray = ['Car care', 'Cleaning', 'Electrical', 'Mechanical', 'Plumbing', 'Painting', 'Gardening', 'CCTV service'];

let timeArray =
  ['01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];

const ordersTable = document.getElementById('orderedSevices');

const Service = function (name, location, service, time) {

  this.name = name;
  this.location = location;
  this.service = service;
  this.time = time;
  Service.allService.push(this);

};

const customerName = document.getElementById('customerName');
const customerLocation = document.getElementById('customerlocation');
const selectService = document.getElementById('service');
const selectTime = document.getElementById('serviceTime');


Service.allService = [];


function populateForm() {
  for (let i in serviceArray) {
    const ServiceOption = document.createElement('option');
    selectService.appendChild(ServiceOption);
    ServiceOption.textContent = `${serviceArray[i]}`;
    //   ServiceOption.value = i;
  }

  for (let i in timeArray) {
    const timeOption = document.createElement('option');
    selectTime.appendChild(timeOption);
    timeOption.textContent = `${timeArray[i]}`;
    // ServiceOption.value = i;
  }
}

function renderOrderedServices() {

  const tableRow = document.createElement('tr');
  ordersTable.appendChild(tableRow);

  const customerNameData = document.createElement('td');
  tableRow.appendChild(customerNameData);
  customerNameData.textContent = `${customerName.value}`;

  const customerLocationData = document.createElement('td');
  tableRow.appendChild(customerLocationData);
  customerLocationData.textContent = `${customerLocation.value}`;

  const selectServiceData = document.createElement('td');
  tableRow.appendChild(selectServiceData);
  selectServiceData.textContent = `${selectService.value}`;

  const SelectTimeData = document.createElement('td');
  tableRow.appendChild(SelectTimeData);
  SelectTimeData.textContent = `${selectTime.value}`;

}

function handleSubmit(event) {
  event.preventDefault();
  new Service(
    customerName.value,
    customerLocation.value,
    selectService.value,
    selectTime.value);

  // document.getElementById('customerName').value,
  // document.getElementById('customerlocation').value,
  // document.getElementById('service').value,
  // document.getElementById('serviceTime').value);

  localStorage.setItem('Service', JSON.stringify(Service.allService));

  renderOrderedServices();

  serviceForm.reset();
}

populateForm();

let serviceForm = document.getElementById('serviceForm');
serviceForm.addEventListener('submit', handleSubmit);








let table = document.getElementById( 'orderedSevices' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  let cartItems = JSON.parse( localStorage.getItem( 'Service' ) ) || [];
  cart = new Service( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clear = document.getElementsByTagName( 'tbody' )[0];
  console.log( clear );
  clear.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart



function showCart() {
  let tbody = document.getElementsByTagName( 'tbody' )[0];

  for ( let i = 0; i < cart.items.length; i++ ) {
    let tr = document.createElement( 'tr' );
    let deleteLink = document.createElement( 'a' );
    let quantity = document.createElement( 'td' );
    let itemElement = document.createElement( 'td' );
    let deletedLink = document.createElement( 'td' );
    let ltimg = document.createElement( 'td' );
    // delete link is just an "x" with an anchor tag around it
    // quanitity comes from this.quantity = quantity;
    // item comes from this.name = name;
    deleteLink.textContent = 'X';
    deleteLink.setAttribute( 'href', '#' );
    deleteLink.setAttribute( 'dlt', i );
    quantity.textContent = cart.items[i].quantity;
    itemElement.textContent = cart.items[i].product.name;
    quantity.textContent = cart.items[i].quantity;
    ltimg.innerHTML = `<img src='${cart.items[i].product.filePath}'/>`;
    console.log( cart.items[i] );
    deletedLink.appendChild( deleteLink );
    tr.appendChild( deletedLink );
    tr.appendChild( quantity );
    tr.appendChild( itemElement );
    tr.appendChild( ltimg );
    tbody.appendChild( tr );

  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart( event ) {
  console.log( event.target.getAttribute( 'dlt' ) );
  if( event.target.getAttribute( 'dlt' ) ){
    let index2 = event.target.getAttribute( 'dlt' );

    cart.removeItem( Number( index2 ) );
    cart.saveToLocalStorage();
    renderCart();
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();


