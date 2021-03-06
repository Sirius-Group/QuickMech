'use strict';

let serviceArray = ['Car care', 'Cleaning', 'Electrical', 'Mechanical', 'Plumbing', 'Painting', 'Gardening', 'CCTV service'];

let timeArray =
  ['01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 AM'];

// console.log(serviceArray);
// console.log(timeArray);

const Service = function (name, location, service, time) {

  this.name = name;
  this.location = location;
  this.service = service;
  this.time = time;
  Service.allService.push(this);

};

Service.allService = [];


function populateForm() {

  const selectService = document.getElementById('service');
  const selectTime = document.getElementById('serviceTime');
  // const service = new Service(name);

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


function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.value);
  new Service(
    document.getElementById('customerName').value,
    document.getElementById('customerlocation').value,
    document.getElementById('service').value,
    document.getElementById('serviceTime').value);
  // services.name = event.target.name.value;
  // services.location = event.target.location.value;
  // services.time = event.target.serviceTime.value;
  // services.service = event.target.service.value;


  localStorage.setItem('Service', JSON.stringify(Service.allService));

}


populateForm();

let serviceForm = document.getElementById('serviceForm');
serviceForm.addEventListener('submit', handleSubmit);

// console.log(popular);

