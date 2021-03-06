/* eslint-disable no-unused-vars */
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
  let timeArray = ['01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];
  // this line to push array in list
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
//this function to git data from form
function handleSubmit(event) {
  event.preventDefault();
  new Service(
    document.getElementById('customerName').value,
    document.getElementById('customerlocation').value,
    document.getElementById('service').value,
    document.getElementById('serviceTime').value);
  //this line to set data in local storig
  localStorage.setItem('Service', JSON.stringify(Service.allService));

  serviceForm.reset();
  renderOrderedServices();
}
// this function to get data from local storig and push in new array
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
//EventListener buttom submit push all data to local storage
let serviceForm = document.getElementById('serviceForm');
serviceForm.addEventListener('submit', handleSubmit);


const ordersTable = document.getElementById('orderedSevices');
function renderOrderedServices() {
  ordersTable.textContent='';
  if(localStorage.Service)
  {
    let temp=JSON.parse(localStorage.getItem('Service'));
    for (let index = 0; index < temp.length; index++) {
      const tableRow = document.createElement('tr');
      ordersTable.appendChild(tableRow);
      const deleteLink = document.createElement( 'button' );
      deleteLink.textContent = 'X';
      deleteLink.setAttribute( 'type', 'button' );
      deleteLink.setAttribute( 'value', 'delete' );
      deleteLink.setAttribute( 'onClick', 'deleteRow(this)' );
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
function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  ordersTable.deleteRow(i);
  Service.allService.splice(i,1);
  localStorage.setItem('Service',JSON.stringify( Service.allService));

}
renderOrderedServices();


