'use strict';
const Applicant = function (name, role, number, email) {

  this.name = name;
  this.role = role;
  this.number = number;
  this.email = email;
  Applicant.allApplicant.push(this);

};

Applicant.allApplicant = [];


function handleApply(event) {
  event.preventDefault();
  new Applicant(
    document.getElementById('applicantName').value,
    document.getElementById('applicantRole').value,
    document.getElementById('applicantphone').value,
    document.getElementById('email').value);

  localStorage.setItem('application', JSON.stringify(Applicant.allApplicant));

  joinForm.reset();
  getApplication();

}

let parentElement = document.getElementById('output');
const listOfApplication= document.createElement('ul');

function getApplication()
{

  listOfApplication.textContent='';

  if(localStorage.application)
  {

    let app=JSON.parse(localStorage.getItem('application'));

    for (let i=0; i<app.length; i++) {

      // const listOfApplication = document.createElement('ul');
      // parentElement.appendChild(listOfApplication);
      const deleteLink = document.createElement( 'button' );
      parentElement.appendChild(listOfApplication);

      deleteLink.textContent = 'X';
      deleteLink.setAttribute( 'type', 'button' );
      deleteLink.setAttribute( 'value', 'delete' );
      deleteLink.setAttribute( 'onClick', `deleteRow(${i})`);
      listOfApplication.appendChild(deleteLink);
      const applicantNameData = document.createElement('li');
      listOfApplication.appendChild(applicantNameData);
      applicantNameData.textContent = `The Applicant name is: ${ app[i].name}`;

      const applicantRoleData = document.createElement('li');
      listOfApplication.appendChild(applicantRoleData);
      applicantRoleData.textContent = `His/her role is: ${app[i].role}`;

      const applicantphoneData = document.createElement('li');
      listOfApplication.appendChild(applicantphoneData);
      applicantphoneData.textContent = `His/her phone number: ${app[i].number}`;

      const emailData = document.createElement('li');
      listOfApplication.appendChild(emailData);
      emailData.textContent = `His/her phone email: ${app[i].email}`;

    }
  }
}





let joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', handleApply);



function getBackDataFromLocalstorage()
{
  if(localStorage.application)
  {
    let app=JSON.parse(localStorage.getItem('application'));
    for (let i = 0; i < app.length; i++) {
      new Applicant(app[i].name,app[i].role,app[i].number,app[i].email);
    }
  }
}

getBackDataFromLocalstorage();
getApplication();



function deleteRow(list) {

  Applicant.allApplicant.splice(list,1);
  localStorage.setItem('application',JSON.stringify(Applicant.allApplicant));
  getApplication();
}
