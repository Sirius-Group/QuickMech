'use strict';

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
  // localStorage.removeItem('Service');
  // localStorage.setItem('Service', JSON.stringify(Service.allService));

}

renderOrderedServices();

