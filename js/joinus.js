'use strict';
const Applicant = function (name, role, number, email) {

  this.name = name;
  this.role = role;
  this.number = number;
  this.email = email;
  Applicant.allApplicant.push(this);

};

Applicant.allApplicant = [];

// function renderlistOfApplication() {


//   const parentElement = document.getElementById('output');

//   const listOfApplication = document.createElement('ul');
//   parentElement.appendChild(listOfApplication);

//   const applicantNameData = document.createElement('li');
//   listOfApplication.appendChild(applicantNameData);
//   applicantNameData.textContent = `The Applicant name is: ${ Applicant.allApplicant[0].name}`;

//   const applicantRoleData = document.createElement('li');
//   listOfApplication.appendChild(applicantRoleData);
//   applicantRoleData.textContent = `His/her role is: ${Applicant.allApplicant[0].role}`;

//   const applicantphoneData = document.createElement('li');
//   listOfApplication.appendChild(applicantphoneData);
//   applicantphoneData.textContent = `His/her phone number: ${Applicant.allApplicant[0].number}`;

//   const emailData = document.createElement('li');
//   listOfApplication.appendChild(emailData);
//   emailData.textContent = `His/her phone email: ${Applicant.allApplicant[0].email}`;

// }



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
//   renderlistOfApplication();
}



function getApplication()
{
  const parentElement = document.getElementById('output');
  parentElement.textContent = ('');
  if(localStorage.application)
  {
    let app=JSON.parse(localStorage.getItem('application'));


    for (let i=0; i<app.length; i++) {

      const listOfApplication = document.createElement('ul');
      parentElement.appendChild(listOfApplication);

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
  console.log(Applicant.allApplicant);

}


getApplication();
// renderlistOfApplication();


let joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', handleApply);



function getBackDataFromLocalstorage()
{
  if(localStorage.application)
  {
    let app=JSON.parse(localStorage.getItem('application'));
    for (let index = 0; index < app.length; index++) {
      new Applicant(app[index].name,app[index].role,app[index].number,app[index].email);
    }
  }
}

getBackDataFromLocalstorage();
