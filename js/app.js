'use strict';

let serviceArray = ['Car care', 'Cleaning', 'Electrical', 'Mechanical', 'Plumbing', 'Painting', 'Gardening', 'CCTV service'];

let timeArray =
  ['01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'];

console.log(serviceArray);
console.log(timeArray);

const Service = function (name) {

  this.name = name;
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
    const ServiceOption = document.createElement('option');
    selectTime.appendChild(ServiceOption);
    ServiceOption.textContent = `${timeArray[i]}`;
    // ServiceOption.value = i;
  }
}

populateForm();
