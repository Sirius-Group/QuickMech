function renderOrderedServices() {
  // const selectService = document.getElementById('service');
// const selectTime = document.getElementById('serviceTime');
// const customerName = document.getElementById('customerName');
  // const customerLocation = document.getElementById('customerlocation');

  const ordersTable = document.getElementById('orderedSevices');

  if(localStorage.Service)
  {
    let temp=JSON.parse(localStorage.getItem('Service'));
    for (let index = 0; index < temp.length; index++) {
    //   new Service(temp[index].name,temp[index].location,temp[index].service,temp[index].time);
      const tableRow = document.createElement('tr');
      ordersTable.appendChild(tableRow);

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

renderOrderedServices();
