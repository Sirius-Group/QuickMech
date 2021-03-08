'use strict';

const Service = function (name, location, service, time) {

  this.name = name;
  this.location = location;
  this.service = service;
  this.time = time;
  Service.allService.push(this);

};

Service.allService = [];


function populateForm() {

  let serviceArray = ['Car care', 'Cleaning', 'Electrical', 'Mechanical', 'Plumbing', 'Painting', 'Gardening', 'CCTV service'];

  let timeArray =
    ['01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];

  const selectService = document.getElementById('service');
  const selectTime = document.getElementById('serviceTime');

  for (let i in serviceArray) {
    const ServiceOption = document.createElement('option');
    selectService.appendChild(ServiceOption);
    ServiceOption.textContent = `${serviceArray[i]}`;

  }

  for (let i in timeArray) {
    const timeOption = document.createElement('option');
    selectTime.appendChild(timeOption);
    timeOption.textContent = `${timeArray[i]}`;

  }
}

// function renderOrderedServices() {

//   const selectService = document.getElementById('service');
//   const selectTime = document.getElementById('serviceTime');
//   const ordersTable = document.getElementById('orderedSevices');
//   const customerName = document.getElementById('customerName');
//   const customerLocation = document.getElementById('customerlocation');

//   const tableRow = document.createElement('tr');
//   ordersTable.appendChild(tableRow);

//   const customerNameData = document.createElement('td');
//   tableRow.appendChild(customerNameData);
//   customerNameData.textContent = `${customerName.value}`;

//   const customerLocationData = document.createElement('td');
//   tableRow.appendChild(customerLocationData);
//   customerLocationData.textContent = `${customerLocation.value}`;

//   const selectServiceData = document.createElement('td');
//   tableRow.appendChild(selectServiceData);
//   selectServiceData.textContent = `${selectService.value}`;

//   const SelectTimeData = document.createElement('td');
//   tableRow.appendChild(SelectTimeData);
//   SelectTimeData.textContent = `${selectTime.value}`;

// }

function handleSubmit(event) {
  event.preventDefault();
  new Service(
    document.getElementById('customerName').value,
    document.getElementById('customerlocation').value,
    document.getElementById('service').value,
    document.getElementById('serviceTime').value);

  localStorage.setItem('Service', JSON.stringify(Service.allService));

  // renderOrderedServices();

  serviceForm.reset();
  renderOrderedServices();
}

function getBackDataFromLocalstorage()
{
  if(localStorage.Service)
  {
    let temp=JSON.parse(localStorage.getItem('Service'));
    for (let index = 0; index < temp.length; index++) {
      new Service(temp[index].name,temp[index].location,temp[index].service,temp[index].time);
    }
  }
}


getBackDataFromLocalstorage();

populateForm();

let serviceForm = document.getElementById('serviceForm');

serviceForm.addEventListener('submit', handleSubmit);














const ordersTable = document.getElementById('orderedSevices');
function renderOrderedServices() {
  // const selectService = document.getElementById('service');
  // const selectTime = document.getElementById('serviceTime');
  // const customerName = document.getElementById('customerName');
  // const customerLocation = document.getElementById('customerlocation');
  if(localStorage.Service)
  {
    let temp=JSON.parse(localStorage.getItem('Service'));
    for (let index = 0; index < temp.length; index++) {
      // new Service(temp[index].name,temp[index].location,temp[index].service,temp[index].time);
      const tableRow = document.createElement('tr');
      ordersTable.appendChild(tableRow);
      const deleteLink = document.createElement( 'button' );
      deleteLink.textContent = 'X';
      deleteLink.setAttribute( 'type', 'button' );
      deleteLink.setAttribute( 'value', 'delete' );
      deleteLink.setAttribute( 'onClick', 'deleteRow(this)' );
      // deleteLink.id = `Order ${index}`;
      // deleteLink.setAttribute( 'dlt', i );
      tableRow.appendChild(deleteLink);
      const customerNameData = document.createElement('td');
      tableRow.appendChild(customerNameData);
      customerNameData.textContent = `${temp[index].name}`;
      const customerLocationData = document.createElement('td');
      tableRow.appendChild(customerLocationData);
      customerLocationData.textContent = `${temp[index].location}`;
      const selectServiceData = document.createElement('td');
      tableRow.appendChild(selectServiceData);
      selectServiceData.textContent = `${temp[index].service}`;
      const SelectTimeData = document.createElement('td');
      tableRow.appendChild(SelectTimeData);
      SelectTimeData.textContent = `${temp[index].time}`;
    }
  }
}
// eslint-disable-next-line no-unused-vars
function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  ordersTable.deleteRow(i);
  Service.allService.splice(i,1);
  localStorage.setItem('Service',JSON.stringify( Service.allService));
  // localStorage.removeItem('Service');
  // localStorage.setItem('Service', JSON.stringify(Service.allService));
}
renderOrderedServices();


