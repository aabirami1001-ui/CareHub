/* ==========================================================
CAREHUB DATABASE VERSION
========================================================== */

const DATA_VERSION = 10;

let database = JSON.parse(
localStorage.getItem("carehubData") || "null"
);

/*
IMPORTANT:
Old broken database will be replaced automatically.
*/

if(!database || database.version !== DATA_VERSION){

database = createFreshDatabase();

saveDatabase();

}


/* ==========================================================
CREATE 50 DOCTORS + 20 PATIENTS
========================================================== */

function createFreshDatabase(){

const doctorsData = [

["Arun Kumar","Cardiologist","Apollo Hospitals","Chennai"],
["Priya Shankar","Dermatologist","Kauvery Hospital","Chennai"],
["Vignesh Raj","Orthopedic","MIOT International","Chennai"],
["Meena Devi","Pediatrician","Rainbow Children's Hospital","Chennai"],
["Suresh Babu","Neurologist","SIMS Hospital","Chennai"],
["Lakshmi Priya","Gynecologist","Fortis Malar Hospital","Chennai"],
["Karthik Raj","ENT Specialist","Vijaya Hospital","Chennai"],
["Divya Mohan","General Physician","Government General Hospital","Chennai"],
["Ramesh Kumar","Gastroenterologist","Gleneagles Global Hospital","Chennai"],
["Anitha Rao","Ophthalmologist","Sankara Nethralaya","Chennai"],

["Sanjay Kumar","Cardiologist","KMCH","Coimbatore"],
["Nandhini Devi","Pediatrician","PSG Hospitals","Coimbatore"],
["Prakash M","Orthopedic","Ganga Hospital","Coimbatore"],
["Swetha R","Dermatologist","Kovai Medical Center","Coimbatore"],
["Hari Prasad","Neurologist","Royal Care Hospital","Coimbatore"],
["Keerthana S","Gynecologist","PSG Hospitals","Coimbatore"],
["Manoj Kumar","ENT Specialist","KMCH","Coimbatore"],
["Aishwarya R","General Physician","Sri Ramakrishna Hospital","Coimbatore"],
["Pradeep Mohan","Ophthalmologist","Aravind Eye Hospital","Coimbatore"],
["Nithya Devi","General Surgeon","Ganga Hospital","Coimbatore"],

["Ashwin Raj","Cardiologist","Kauvery Hospital","Trichy"],
["Ramya Krishnan","General Physician","Apollo Speciality Hospital","Trichy"],
["Surya Prakash","Orthopedic","Kauvery Hospital","Trichy"],
["Janani M","Pediatrician","KMC Speciality Hospital","Trichy"],
["Balaji S","Neurologist","Kauvery Hospital","Trichy"],
["Deepa R","Dermatologist","Apollo Speciality Hospital","Trichy"],
["Mohanraj K","ENT Specialist","KMC Speciality Hospital","Trichy"],
["Shalini Devi","Gynecologist","Kauvery Hospital","Trichy"],
["Arun Prabhu","Ophthalmologist","Vasan Eye Care","Trichy"],
["Lavanya S","General Physician","Apollo Speciality Hospital","Trichy"],

["Vijay Anand","Cardiologist","Meenakshi Mission Hospital","Madurai"],
["Revathi K","General Physician","Apollo Speciality Hospital","Madurai"],
["Hariharan R","Orthopedic","Vadamalayan Hospital","Madurai"],
["Sangeetha M","Pediatrician","Meenakshi Mission Hospital","Madurai"],
["Gokul Raj","Neurologist","Velammal Medical College","Madurai"],
["Nandhini P","Dermatologist","Apollo Speciality Hospital","Madurai"],
["Prakash S","ENT Specialist","Vadamalayan Hospital","Madurai"],
["Gayathri V","Gynecologist","Meenakshi Mission Hospital","Madurai"],
["Lokesh Kumar","Ophthalmologist","Aravind Eye Hospital","Madurai"],
["Monisha R","General Surgeon","Apollo Speciality Hospital","Madurai"],

["Siva Kumar","Cardiologist","Tirunelveli Medical College","Tirunelveli"],
["Abinaya S","General Physician","Apollo Speciality Hospital","Tirunelveli"],
["Muthukumar P","Orthopedic","Shifa Hospital","Tirunelveli"],
["Dharani R","Pediatrician","Sudharshan Hospital","Tirunelveli"],
["Balakrishnan V","Neurologist","Tirunelveli Medical College","Tirunelveli"],
["Swathi K","Dermatologist","Shifa Hospital","Tirunelveli"],
["Naveena S","Gynecologist","Sudharshan Hospital","Tirunelveli"],
["Saravanan M","ENT Specialist","Apollo Speciality Hospital","Tirunelveli"],
["Keerthi V","Ophthalmologist","Aravind Eye Hospital","Tirunelveli"],
["Sanjay Kumar","General Physician","Tirunelveli Medical College","Tirunelveli"]

];

const users = [

{
id:"ADMIN001",
role:"admin",
username:"admin",
password:"Admin@123",
name:"CareHub Administrator",
email:"admin@carehub.com"
},

{
id:"REC001",
role:"receptionist",
username:"reception01",
password:"Reception@123",
name:"CareHub Receptionist",
email:"reception@carehub.com"
}

];

const doctors=[];


/*
CREATE ALL 50 DOCTOR LOGIN USERS
*/

doctorsData.forEach((d,i)=>{

const number=String(i+1).padStart(2,"0");

const doctorId="DOC"+number;
const userId="DOCUSER"+number;
const username="doctor"+number;

users.push({

id:userId,
role:"doctor",
username:username,
password:"Doctor@123",
name:d[0],
email:username+"@carehub.com"

});

doctors.push({

id:doctorId,
userId:userId,
username:username,
name:d[0],
specialization:d[1],
hospital:d[2],
location:d[3]+", Tamil Nadu",
days:"Monday - Friday",
time:"09:00 AM - 01:00 PM",
available:true

});

});


/*
20 PATIENTS
*/

const patients=[];
const patientNames=[

["Priya Sharma","Female","O+","Chennai"],
["Kavya Devi","Female","B+","Coimbatore"],
["Rahul Kumar","Male","A+","Trichy"],
["Nandhini S","Female","AB+","Madurai"],
["Aravind Raj","Male","O+","Tirunelveli"],
["Divya Priya","Female","A+","Salem"],
["Karthik M","Male","B+","Erode"],
["Harini R","Female","O-","Chennai"],
["Suresh Kumar","Male","A-","Coimbatore"],
["Meena P","Female","B-","Madurai"],
["Vijay S","Male","O+","Trichy"],
["Swetha Kumar","Female","AB+","Salem"],
["Dinesh Raj","Male","A+","Erode"],
["Anitha M","Female","B+","Vellore"],
["Manoj R","Male","O+","Chennai"],
["Lakshmi S","Female","A+","Madurai"],
["Prakash Kumar","Male","B+","Tirunelveli"],
["Deepa V","Female","O+","Coimbatore"],
["Gokul S","Male","AB+","Salem"],
["Keerthana R","Female","A-","Chennai"]

];

patientNames.forEach((p,i)=>{

const number=String(i+1).padStart(2,"0");

const patientId="PAT"+number;
const userId="PATUSER"+number;
const username="patient"+number;

users.push({

id:userId,
role:"patient",
username,
password:"Patient@123",
name:p[0],
email:username+"@carehub.com"

});

patients.push({

id:patientId,
userId:userId,
name:p[0],
email:username+"@carehub.com",
phone:"98765"+String(10000+i),
dob:"1998-05-15",
gender:p[1],
blood:p[2],
address:p[3]+", Tamil Nadu",
medical:"No major medical history",
emergency:"9876500000"

});

});


/*
SAMPLE APPOINTMENTS
*/

const appointments=[

{
id:"APP001",
patientId:"PAT01",
doctorId:"DOC01",
date:futureDate(1),
time:"10:00",
reason:"General consultation",
status:"Pending"
},

{
id:"APP002",
patientId:"PAT02",
doctorId:"DOC11",
date:futureDate(2),
time:"11:00",
reason:"Skin consultation",
status:"Approved"
},

{
id:"APP003",
patientId:"PAT03",
doctorId:"DOC21",
date:futureDate(3),
time:"09:30",
reason:"Joint pain",
status:"Pending"
},

{
id:"APP004",
patientId:"PAT04",
doctorId:"DOC31",
date:futureDate(4),
time:"10:30",
reason:"Regular checkup",
status:"Approved"
},

{
id:"APP005",
patientId:"PAT05",
doctorId:"DOC41",
date:futureDate(5),
time:"11:30",
reason:"Headache",
status:"Rejected"
}

];


return{

version:DATA_VERSION,

users:users,

doctors:doctors,

patients:patients,

appointments:appointments,

diagnosis:[],

prescriptions:[],

bills:[]

};

}


function futureDate(days){

const d=new Date();

d.setDate(d.getDate()+days);

return d.toISOString().split("T")[0];

}


function saveDatabase(){

localStorage.setItem(
"carehubData",
JSON.stringify(database)
);

}


/* ==========================================================
LOGIN
========================================================== */

let currentUser=null;
let currentRole="patient";


function chooseRole(role,button){

currentRole=role;

document.querySelectorAll(".roles button")
.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

document.getElementById("loginError")
.classList.add("hidden");

document.getElementById("registerLink").style.display=
role==="patient"?"block":"none";

}


function login(){

const username=
document.getElementById("loginUsername").value.trim();

const password=
document.getElementById("loginPassword").value;

const user=database.users.find(u=>

(u.username===username ||
u.email===username) &&

u.password===password &&

u.role===currentRole

);


if(!user){

const error=
document.getElementById("loginError");

error.classList.remove("hidden");

error.innerText=
"Wrong username/password or selected role.";

return;

}


currentUser=user;

document.getElementById("loginPage")
.style.display="none";

document.getElementById("app")
.style.display="block";

createNavigation();

showPage("dashboard");

}


/* ==========================================================
FORGOT PASSWORD
========================================================== */

function forgotPassword(){

const username=prompt(
"Enter your username:"
);

if(!username)return;

const user=database.users.find(
u=>u.username===username
);

if(!user){

alert("User not found.");

return;

}

const password=prompt(
"Enter new password:"
);

if(!password)return;

user.password=password;

saveDatabase();

alert("Password changed successfully.");

}


/* ==========================================================
NAVIGATION
========================================================== */

function createNavigation(){

const nav=
document.getElementById("navigation");

let menu=[];


/*
ADMIN
*/

if(currentUser.role==="admin"){

menu=[

["dashboard","🏠 Dashboard"],
["admin","⚙️ Administration"],
["doctors","🩺 Doctors"],
["patients","👥 Patients"],
["appointments","📅 Appointments"],
["billing","💰 Billing"],
["analytics","📊 Analytics"],
["profile","👤 Profile"]

];

}


/*
DOCTOR
NO DOCTORS AVAILABILITY MENU
*/

else if(currentUser.role==="doctor"){

menu=[

["dashboard","🏠 Dashboard"],
["patients","👥 My Patients"],
["appointments","📅 Appointments"],
["diagnosis","🩺 Diagnosis"],
["prescription","💊 Prescription"],
["billing","💰 Billing"],
["analytics","📊 Analytics"],
["profile","👤 Profile"]

];

}


/*
RECEPTION
*/

else if(currentUser.role==="receptionist"){

menu=[

["dashboard","🏠 Booking Dashboard"],
["appointments","📅 Booking Status"],
["profile","👤 Profile"]

];

}


/*
PATIENT
*/

else{

menu=[

["dashboard","🏠 Dashboard"],
["doctors","🩺 Find Doctor"],
["appointments","📅 My Appointments"],
["profile","👤 Profile"]

];

}


nav.innerHTML="";


menu.forEach(item=>{

const btn=document.createElement("button");

btn.innerHTML=item[1];

btn.dataset.page=item[0];

btn.onclick=()=>showPage(item[0]);

nav.appendChild(btn);

});


const logout=document.createElement("button");

logout.className="logout";

logout.innerHTML="🚪 Logout";

logout.onclick=logoutUser;

nav.appendChild(logout);


document.getElementById("userName")
.innerText=currentUser.name;

document.getElementById("userRole")
.innerText=currentUser.role.toUpperCase();

document.getElementById("avatar")
.innerText=
currentUser.name.charAt(0).toUpperCase();

}


/* ==========================================================
SHOW PAGE
========================================================== */

function showPage(page){

/*
Doctor cannot access doctors page.
*/

if(
currentUser.role==="doctor" &&
page==="doctors"
){

page="dashboard";

}


document.querySelectorAll(".section")
.forEach(s=>s.classList.remove("active"));


const section=document.getElementById(page);

if(!section)return;

section.classList.add("active");


document.querySelectorAll(".nav button")
.forEach(b=>b.classList.remove("active"));


const active=
document.querySelector(
`.nav button[data-page="${page}"]`
);

if(active)
active.classList.add("active");


document.getElementById("pageTitle")
.innerText=
page.charAt(0).toUpperCase()+
page.slice(1);


if(page==="dashboard")renderDashboard();
if(page==="doctors")renderDoctors();
if(page==="patients")renderPatients();
if(page==="appointments")renderAppointments();
if(page==="diagnosis")renderDiagnosis();
if(page==="prescription")renderPrescription();
if(page==="billing")renderBilling();
if(page==="analytics")renderAnalytics();
if(page==="profile")renderProfile();
if(page==="admin")renderAdmin();

}


/* ==========================================================
DASHBOARD
========================================================== */

function renderDashboard(){

const box=
document.getElementById("dashboardContent");


/*
PATIENT DASHBOARD
*/

if(currentUser.role==="patient"){

const patient=
database.patients.find(
p=>p.userId===currentUser.id
);

const apps=
database.appointments.filter(
a=>a.patientId===patient?.id
);


box.innerHTML=`

<div class="notice">

Welcome <b>${currentUser.name}</b> ❤️

<br>

Book an appointment with one of our
Tamil Nadu doctors.

</div>

<div class="cards">

${stat("📅",apps.length,"Appointments")}

${stat(
"⏳",
apps.filter(a=>a.status==="Pending").length,
"Pending"
)}

${stat(
"✅",
apps.filter(a=>a.status==="Approved").length,
"Approved"
)}

${stat(
"❌",
apps.filter(a=>a.status==="Rejected").length,
"Rejected"
)}

</div>

<div class="card">

<h3>Quick Actions</h3>

<div class="actions">

<button class="primary"
onclick="showPage('doctors')">
🩺 Find Doctor
</button>

<button class="secondary"
onclick="showPage('appointments')">
📅 My Appointments
</button>

</div>

</div>

`;

}


/*
DOCTOR DASHBOARD
*/

else if(currentUser.role==="doctor"){

const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);

const apps=
database.appointments.filter(
a=>a.doctorId===doctor?.id
);


box.innerHTML=`

<div class="notice">

Welcome Dr. <b>${currentUser.name}</b> 🩺

<br>

Manage your patient appointments,
diagnosis and prescriptions.

</div>

<div class="cards">

${stat(
"👥",
new Set(apps.map(a=>a.patientId)).size,
"My Patients"
)}

${stat(
"⏳",
apps.filter(a=>a.status==="Pending").length,
"Pending"
)}

${stat(
"✅",
apps.filter(a=>a.status==="Approved").length,
"Approved"
)}

${stat(
"❌",
apps.filter(a=>a.status==="Rejected").length,
"Rejected"
)}

</div>

<div class="card">

<h3>Doctor Actions</h3>

<div class="actions">

<button class="primary"
onclick="showPage('appointments')">
📅 Appointments
</button>

<button class="secondary"
onclick="showPage('diagnosis')">
🩺 Diagnosis
</button>

<button class="secondary"
onclick="showPage('prescription')">
💊 Prescription
</button>

</div>

</div>

`;

}


/*
RECEPTIONIST DASHBOARD
ONLY BOOKING STATUS
*/

else if(currentUser.role==="receptionist"){

const total=
database.appointments.length;

const pending=
database.appointments.filter(
a=>a.status==="Pending"
).length;

const approved=
database.appointments.filter(
a=>a.status==="Approved"
).length;

const rejected=
database.appointments.filter(
a=>a.status==="Rejected"
).length;


box.innerHTML=`

<div class="notice">
Welcome <b>${currentUser.name}</b>.
</div>

<div class="cards">

${stat("📅",total,"Total Bookings")}

${stat("⏳",pending,"Pending")}

${stat("✅",approved,"Approved")}

${stat("❌",rejected,"Rejected")}

</div>

<div class="card">

<h3>Booking Status</h3>

<p>
Total Booked:
<b>${total}</b>
</p>

<br>

<p>
Pending:
<b>${pending}</b>
</p>

<br>

<p>
Approved:
<b>${approved}</b>
</p>

<br>

<p>
Rejected:
<b>${rejected}</b>
</p>

<br>

<button class="primary"
onclick="showPage('appointments')">
View Booking Status
</button>

</div>

`;

}


/*
ADMIN
*/

else{

box.innerHTML=`

<div class="notice">
Welcome <b>${currentUser.name}</b>.
</div>

<div class="cards">

${stat(
"👥",
database.patients.length,
"Patients"
)}

${stat(
"🩺",
database.doctors.length,
"Doctors"
)}

${stat(
"📅",
database.appointments.length,
"Appointments"
)}

${stat(
"💰",
database.bills.length,
"Bills"
)}

</div>

<div class="card">

<h3>System Overview</h3>

<p>
Pending Appointments:
<b>
${database.appointments.filter(
a=>a.status==="Pending"
).length}
</b>
</p>

<br>

<p>
Approved Appointments:
<b>
${database.appointments.filter(
a=>a.status==="Approved"
).length}
</b>
</p>

</div>

`;

}

}


function stat(icon,num,label){

return`

<div class="card">

<div style="font-size:25px">
${icon}
</div>

<div class="stat-number">
${num}
</div>

<div class="stat-label">
${label}
</div>

</div>

`;

}


/* ==========================================================
DOCTORS
========================================================== */

function renderDoctors(){

const search=
(
document.getElementById("doctorSearch")?.value ||
""
).toLowerCase();


const doctors=
database.doctors.filter(d=>

(
d.name+
d.specialization+
d.hospital+
d.location
)
.toLowerCase()
.includes(search)

);


document.getElementById("doctorList")
.innerHTML=

doctors.map(d=>`

<div class="doctor-card">

<div style="font-size:42px">
🩺
</div>

<h3>
Dr. ${d.name}
</h3>

<p style="color:#2468c9;font-weight:bold">
${d.specialization}
</p>

<br>

<p>
🏥 <b>${d.hospital}</b>
</p>

<p>
📍 ${d.location}
</p>

<p>
📅 ${d.days}
</p>

<p>
⏰ ${d.time}
</p>

<p class="available">
● Available
</p>

<br>

${
currentUser.role==="patient"
?
`
<button class="primary"
onclick="bookAppointment('${d.id}')">
Book Appointment
</button>
`
:""
}

</div>

`).join("");


}


/* ==========================================================
PATIENT REGISTRATION
========================================================== */

function openPatientRegister(){

openModal(

"Create New Patient Profile",

`

<div class="form-grid">

${field("regName","Full Name")}

${field("regPhone","Phone Number")}

${field("regDob","Date of Birth","date")}

<div class="input-group">

<label>Gender</label>

<select id="regGender">

<option>Female</option>
<option>Male</option>
<option>Other</option>

</select>

</div>

${field("regBlood","Blood Group")}

${field("regLocation","District / Location")}

<div class="input-group full">

<label>Email</label>

<input id="regEmail">

</div>

<div class="input-group full">

<label>Medical Information</label>

<textarea id="regMedical"></textarea>

</div>

<div class="input-group full">

<label>Create Password</label>

<input type="password" id="regPassword">

</div>

</div>

<button class="primary"
onclick="registerPatient()">
Create Patient Account
</button>

`

);

}


function registerPatient(){

const name=get("regName");
const phone=get("regPhone");
const dob=get("regDob");
const gender=get("regGender");
const blood=get("regBlood");
const location=get("regLocation");
const email=get("regEmail");
const medical=get("regMedical");
const password=get("regPassword");


if(!name||!phone||!email||!password){

alert(
"Name, phone, email and password are required."
);

return;

}


if(
database.users.some(
u=>u.email===email
)
){

alert("Email already registered.");

return;

}


const number=
database.patients.length+1;

const n=String(number).padStart(2,"0");

const userId=
"PATUSER"+n;

const patientId=
"PAT"+n;


database.users.push({

id:userId,
role:"patient",
username:email,
password,
name,
email

});


database.patients.push({

id:patientId,
userId,
name,
email,
phone,
dob,
gender,
blood,
address:location+", Tamil Nadu",
medical,
emergency:"Not Provided"

});


saveDatabase();

closeModal();

alert(
"Patient account created successfully."
);

}


/* ==========================================================
APPOINTMENT
========================================================== */

function bookAppointment(doctorId){

const doctor=
database.doctors.find(
d=>d.id===doctorId
);


const today=
new Date()
.toISOString()
.split("T")[0];


openModal(

"Book Appointment",

`

<div class="notice">

<b>Dr. ${doctor.name}</b>

<br>

${doctor.specialization}

<br>

🏥 ${doctor.hospital}

<br>

📍 ${doctor.location}

<br>

📅 ${doctor.days}

<br>

⏰ ${doctor.time}

</div>

<div class="input-group">

<label>Appointment Date</label>

<input
type="date"
id="appointmentDate"
min="${today}">

</div>

<div class="input-group">

<label>Appointment Time</label>

<input
type="time"
id="appointmentTime">

</div>

<div class="input-group">

<label>Reason / Symptoms</label>

<textarea id="appointmentReason"></textarea>

</div>

<button class="primary"
onclick="confirmAppointment('${doctorId}')">

Confirm Appointment

</button>

`

);

}


function confirmAppointment(doctorId){

const patient=
database.patients.find(
p=>p.userId===currentUser.id
);

const date=
get("appointmentDate");

const time=
get("appointmentTime");

const reason=
get("appointmentReason");


if(!date||!time){

alert(
"Please select date and time."
);

return;

}


database.appointments.push({

id:"APP"+Date.now(),
patientId:patient.id,
doctorId,
date,
time,
reason,
status:"Pending"

});


saveDatabase();

closeModal();

alert(
"Appointment booked successfully. Status: Pending"
);

showPage("appointments");

}


/* ==========================================================
APPOINTMENTS
========================================================== */

function renderAppointments(){

let apps=
database.appointments;


if(currentUser.role==="patient"){

const patient=
database.patients.find(
p=>p.userId===currentUser.id
);

apps=apps.filter(
a=>a.patientId===patient?.id
);

}


if(currentUser.role==="doctor"){

const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);

apps=apps.filter(
a=>a.doctorId===doctor?.id
);

}


document.getElementById(
"appointmentContent"
).innerHTML=`

<div class="card">

<h3>Appointment Bookings</h3>

<div class="table-container">

<table>

<thead>

<tr>

<th>Patient</th>
<th>Doctor</th>
<th>Hospital</th>
<th>Date</th>
<th>Time</th>
<th>Status</th>
<th>Action</th>

</tr>

</thead>

<tbody>

${
apps.map(a=>{

const patient=
database.patients.find(
p=>p.id===a.patientId
);

const doctor=
database.doctors.find(
d=>d.id===a.doctorId
);


return`

<tr>

<td>
${patient?.name||"-"}
</td>

<td>
Dr. ${doctor?.name||"-"}
</td>

<td>
${doctor?.hospital||"-"}
</td>

<td>
${a.date}
</td>

<td>
${a.time}
</td>

<td>

<span class="badge ${a.status.toLowerCase()}">

${a.status}

</span>

</td>

<td>

${
currentUser.role==="doctor" &&
a.status==="Pending"
?
`

<button
class="secondary success"
onclick="updateAppointment(
'${a.id}','Approved'
)">
Approve
</button>

<button
class="secondary danger"
onclick="updateAppointment(
'${a.id}','Rejected'
)">
Reject
</button>

`
:""
}

${
currentUser.role==="patient"
?
`

<button
class="secondary"
onclick="viewAppointment('${a.id}')">
View
</button>

`
:""
}

</td>

</tr>

`;

}).join("")

||

`
<tr>
<td colspan="7">
No appointments found.
</td>
</tr>
`

}

</tbody>

</table>

</div>

</div>

`;

}


function updateAppointment(id,status){

const appointment=
database.appointments.find(
a=>a.id===id
);

if(!appointment)return;

appointment.status=status;

saveDatabase();

alert(
"Appointment "+status+" successfully."
);

renderAppointments();

}


function viewAppointment(id){

const a=
database.appointments.find(
x=>x.id===id
);

const p=
database.patients.find(
x=>x.id===a.patientId
);

const d=
database.doctors.find(
x=>x.id===a.doctorId
);


openModal(

"Appointment Details",

`

<div class="info-grid">

<div class="info-box">
<b>Patient</b><br>
${p?.name}
</div>

<div class="info-box">
<b>Doctor</b><br>
Dr. ${d?.name}
</div>

<div class="info-box">
<b>Date</b><br>
${a.date}
</div>

<div class="info-box">
<b>Time</b><br>
${a.time}
</div>

<div class="info-box">
<b>Hospital</b><br>
${d?.hospital}
</div>

<div class="info-box">
<b>Status</b><br>
${a.status}
</div>

</div>

<br>

<p>
<b>Reason:</b>
${a.reason||"Not specified"}
</p>

`

);

}


/* ==========================================================
PATIENTS
========================================================== */

function renderPatients(){

let patients=
database.patients;


if(currentUser.role==="doctor"){

const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);

const patientIds=
database.appointments
.filter(
a=>a.doctorId===doctor?.id
)
.map(a=>a.patientId);


patients=
patients.filter(
p=>patientIds.includes(p.id)
);

}


const search=
(
document.getElementById("patientSearch")?.value||
""
).toLowerCase();


patients=
patients.filter(
p=>p.name.toLowerCase().includes(search)
);


document.getElementById(
"patientTable"
).innerHTML=

patients.map(p=>`

<tr>

<td>
<b>${p.name}</b>
<br>
${p.email}
</td>

<td>${p.phone}</td>

<td>${p.gender}</td>

<td>${p.blood}</td>

<td>${p.address}</td>

<td>

<button
class="secondary"
onclick="viewPatient('${p.id}')">
View
</button>

</td>

</tr>

`).join("")

||

`
<tr>
<td colspan="6">
No patients found.
</td>
</tr>
`;

}


function viewPatient(id){

const p=
database.patients.find(
x=>x.id===id
);


openModal(

"Patient Medical Record",

`

<h2>${p.name}</h2>

<br>

<div class="info-grid">

<div class="info-box">
<b>Email</b><br>
${p.email}
</div>

<div class="info-box">
<b>Phone</b><br>
${p.phone}
</div>

<div class="info-box">
<b>DOB</b><br>
${p.dob}
</div>

<div class="info-box">
<b>Gender</b><br>
${p.gender}
</div>

<div class="info-box">
<b>Blood Group</b><br>
${p.blood}
</div>

<div class="info-box">
<b>Location</b><br>
${p.address}
</div>

</div>

<br>

<p>
<b>Medical Information:</b>
${p.medical}
</p>

`

);

}


/* ==========================================================
DIAGNOSIS
========================================================== */

function renderDiagnosis(){

const select=
document.getElementById(
"diagnosisPatient"
);

if(!select)return;


select.innerHTML=
database.patients.map(
p=>`

<option value="${p.id}">
${p.name}
</option>

`
).join("");


const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);


const records=
database.diagnosis.filter(
d=>d.doctorId===doctor?.id
);


document.getElementById(
"diagnosisTable"
).innerHTML=

records.map(r=>{

const p=
database.patients.find(
x=>x.id===r.patientId
);

return`

<tr>

<td>${p?.name}</td>

<td>${r.symptoms}</td>

<td>${r.suggestion}</td>

<td>${r.notes}</td>

<td>${r.date}</td>

</tr>

`;

}).join("")

||

`
<tr>
<td colspan="5">
No diagnosis records.
</td>
</tr>
`;

}


function saveDiagnosis(){

const patientId=get("diagnosisPatient");
const symptoms=get("symptoms");
const notes=get("doctorNotes");


if(!patientId||!symptoms){

alert(
"Patient and symptoms are required."
);

return;

}


const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);


database.diagnosis.push({

id:"DIA"+Date.now(),

patientId,

doctorId:doctor.id,

symptoms,

notes,

suggestion:
diseaseSuggestion(symptoms),

date:new Date().toLocaleDateString()

});


saveDatabase();

alert("Diagnosis saved.");

renderDiagnosis();

}


function diseaseSuggestion(symptoms){

symptoms=symptoms.toLowerCase();


if(
symptoms.includes("fever") &&
symptoms.includes("cough")
){

return "Possible Respiratory Infection";

}


if(
symptoms.includes("headache") &&
symptoms.includes("fever")
){

return "Possible Viral Illness";

}


if(
symptoms.includes("stomach") ||
symptoms.includes("vomiting")
){

return "Possible Gastrointestinal Condition";

}


if(
symptoms.includes("skin") ||
symptoms.includes("itching")
){

return "Possible Skin Condition";

}


return "General Medical Consultation Recommended";

}


/* ==========================================================
PRESCRIPTION
========================================================== */

function renderPrescription(){

const select=
document.getElementById(
"prescriptionPatient"
);

if(!select)return;


select.innerHTML=
database.patients.map(
p=>`

<option value="${p.id}">
${p.name}
</option>

`
).join("");


const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);


const records=
database.prescriptions.filter(
r=>r.doctorId===doctor?.id
);


document.getElementById(
"prescriptionTable"
).innerHTML=

records.map(r=>{

const p=
database.patients.find(
x=>x.id===r.patientId
);

return`

<tr>

<td>${p?.name}</td>
<td>${r.medicine}</td>
<td>${r.dosage}</td>
<td>${r.duration}</td>
<td>${r.date}</td>

</tr>

`;

}).join("")

||

`
<tr>
<td colspan="5">
No prescriptions.
</td>
</tr>
`;

}


function savePrescription(){

const patientId=get("prescriptionPatient");
const medicine=get("medicine");
const dosage=get("dosage");
const duration=get("duration");
const instructions=get("instructions");


if(
!patientId||
!medicine||
!dosage||
!duration
){

alert("Fill all required fields.");

return;

}


const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);


database.prescriptions.push({

id:"RX"+Date.now(),

patientId,

doctorId:doctor.id,

medicine,

dosage,

duration,

instructions,

date:new Date().toLocaleDateString()

});


saveDatabase();

alert(
"Prescription generated successfully."
);

renderPrescription();

}


/* ==========================================================
BILLING
========================================================== */

function renderBilling(){

let bills=
database.bills;


if(currentUser.role==="patient"){

const patient=
database.patients.find(
p=>p.userId===currentUser.id
);

bills=bills.filter(
b=>b.patientId===patient?.id
);

}


if(currentUser.role==="doctor"){

const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);

bills=bills.filter(
b=>b.doctorId===doctor?.id
);

}


let create="";


if(
currentUser.role==="admin"||
currentUser.role==="receptionist"
){

create=`

<div class="card">

<h3>Create Patient Bill</h3>

<div class="form-grid">

<div class="input-group">

<label>Patient</label>

<select id="billPatient">

${
database.patients.map(
p=>`

<option value="${p.id}">
${p.name}
</option>

`
).join("")
}

</select>

</div>

<div class="input-group">

<label>Doctor</label>

<select id="billDoctor">

<option value="">
Select Doctor
</option>

${
database.doctors.map(
d=>`

<option value="${d.id}">
Dr. ${d.name}
</option>

`
).join("")
}

</select>

</div>

${field("consultation","Consultation Fee","number")}

${field("lab","Laboratory Charge","number")}

${field("medicineCharge","Medicine Charge","number")}

${field("otherCharge","Other Charge","number")}

</div>

<button
class="primary"
onclick="createBill()">
Create Bill
</button>

</div>

`;

}


document.getElementById(
"billingContent"
).innerHTML=

create+

`

<div class="card">

<h3>Billing Records</h3>

<div class="table-container">

<table>

<thead>

<tr>

<th>Bill No</th>
<th>Patient</th>
<th>Doctor</th>
<th>Total</th>
<th>Status</th>
<th>Date</th>
<th>Action</th>

</tr>

</thead>

<tbody>

${
bills.map(b=>{

const p=
database.patients.find(
x=>x.id===b.patientId
);

const d=
database.doctors.find(
x=>x.id===b.doctorId
);

return`

<tr>

<td>${b.billNo}</td>

<td>${p?.name}</td>

<td>
Dr. ${d?.name||"-"}
</td>

<td>
<b>₹${b.total}</b>
</td>

<td>${b.status}</td>

<td>${b.date}</td>

<td>

<button
class="secondary"
onclick="viewReceipt('${b.id}')">
Receipt
</button>

</td>

</tr>

`;

}).join("")

||

`
<tr>
<td colspan="7">
No bills found.
</td>
</tr>
`

}

</tbody>

</table>

</div>

</div>

`;

}


function createBill(){

const patientId=get("billPatient");
const doctorId=get("billDoctor");

const consultation=
Number(get("consultation")||0);

const lab=
Number(get("lab")||0);

const medicine=
Number(get("medicineCharge")||0);

const other=
Number(get("otherCharge")||0);

const total=
consultation+lab+medicine+other;


const bill={

id:"BILL"+Date.now(),

billNo:
"CH-"+Date.now().toString().slice(-8),

patientId,

doctorId,

consultation,

lab,

medicine,

other,

total,

status:"Paid",

date:new Date().toLocaleDateString()

};


database.bills.push(bill);

saveDatabase();

alert("Bill created successfully.");

viewReceipt(bill.id);

}


/* ==========================================================
RECEIPT
========================================================== */

function viewReceipt(id){

const bill=
database.bills.find(
b=>b.id===id
);

const patient=
database.patients.find(
p=>p.id===bill.patientId
);

const doctor=
database.doctors.find(
d=>d.id===bill.doctorId
);


document.getElementById(
"receiptContent"
).innerHTML=`

<div class="receipt">

<div class="receipt-header">

<div>

<h2 style="color:#2468c9">
♥ CareHub
</h2>

<p>
Healthcare Management System
</p>

</div>

<div style="text-align:right">

<b>PAYMENT RECEIPT</b>

<br>

${bill.billNo}

<br>

${bill.date}

</div>

</div>

<h3>Patient Details</h3>

<p>
<b>Patient:</b>
${patient?.name}
</p>

<p>
<b>Phone:</b>
${patient?.phone}
</p>

<p>
<b>Doctor:</b>
Dr. ${doctor?.name||"-"}
</p>

<p>
<b>Hospital:</b>
${doctor?.hospital||"-"}
</p>

<br>

<table>

<tr>
<th>Description</th>
<th>Amount</th>
</tr>

<tr>
<td>Consultation</td>
<td>₹${bill.consultation}</td>
</tr>

<tr>
<td>Laboratory</td>
<td>₹${bill.lab}</td>
</tr>

<tr>
<td>Medicine</td>
<td>₹${bill.medicine}</td>
</tr>

<tr>
<td>Other</td>
<td>₹${bill.other}</td>
</tr>

</table>

<div class="receipt-total">
Total: ₹${bill.total}
</div>

<p>
<b>Status:</b> ${bill.status}
</p>

<br>

<div class="actions no-print">

<button class="primary"
onclick="window.print()">
🖨 Print
</button>

<button class="secondary"
onclick="showPage('billing')">
Back
</button>

</div>

</div>

`;

showPage("receipt");

}


/* ==========================================================
ANALYTICS
========================================================== */

function renderAnalytics(){

const revenue=
database.bills.reduce(
(sum,b)=>sum+Number(b.total),0
);


document.getElementById(
"analyticsContent"
).innerHTML=`

<div class="cards">

${stat(
"👥",
database.patients.length,
"Patients"
)}

${stat(
"🩺",
database.doctors.length,
"Doctors"
)}

${stat(
"📅",
database.appointments.length,
"Appointments"
)}

${stat(
"💰",
"₹"+revenue,
"Revenue"
)}

</div>

<div class="two">

<div class="card">

<h3>Appointment Status</h3>

<p>
Pending:
<b>
${database.appointments.filter(
a=>a.status==="Pending"
).length}
</b>
</p>

<br>

<p>
Approved:
<b>
${database.appointments.filter(
a=>a.status==="Approved"
).length}
</b>
</p>

<br>

<p>
Rejected:
<b>
${database.appointments.filter(
a=>a.status==="Rejected"
).length}
</b>
</p>

</div>

<div class="card">

<h3>Healthcare Data</h3>

<p>
Tamil Nadu Doctors:
<b>${database.doctors.length}</b>
</p>

<br>

<p>
Registered Patients:
<b>${database.patients.length}</b>
</p>

</div>

</div>

`;

}


/* ==========================================================
PROFILE
========================================================== */

function renderProfile(){

const content=
document.getElementById(
"profileContent"
);


if(currentUser.role==="patient"){

const p=
database.patients.find(
x=>x.userId===currentUser.id
);


content.innerHTML=`

<div class="info-grid">

<div class="info-box">
<b>Name</b><br>
${p.name}
</div>

<div class="info-box">
<b>Username</b><br>
${currentUser.username}
</div>

<div class="info-box">
<b>Email</b><br>
${p.email}
</div>

<div class="info-box">
<b>Phone</b><br>
${p.phone}
</div>

<div class="info-box">
<b>Gender</b><br>
${p.gender}
</div>

<div class="info-box">
<b>Blood Group</b><br>
${p.blood}
</div>

</div>

<br>

<p>
<b>Location:</b>
${p.address}
</p>

<br>

<p>
<b>Medical Information:</b>
${p.medical}
</p>

`;

return;

}


if(currentUser.role==="doctor"){

const doctor=
database.doctors.find(
d=>d.userId===currentUser.id
);


content.innerHTML=`

<div class="info-grid">

<div class="info-box">
<b>Doctor</b><br>
Dr. ${doctor.name}
</div>

<div class="info-box">
<b>Username</b><br>
${doctor.username}
</div>

<div class="info-box">
<b>Specialization</b><br>
${doctor.specialization}
</div>

<div class="info-box">
<b>Hospital</b><br>
${doctor.hospital}
</div>

<div class="info-box">
<b>Location</b><br>
${doctor.location}
</div>

<div class="info-box">
<b>Working Days</b><br>
${doctor.days}
</div>

</div>

`;

return;

}


content.innerHTML=`

<div class="info-grid">

<div class="info-box">
<b>Name</b><br>
${currentUser.name}
</div>

<div class="info-box">
<b>Username</b><br>
${currentUser.username}
</div>

<div class="info-box">
<b>Email</b><br>
${currentUser.email}
</div>

<div class="info-box">
<b>Role</b><br>
${currentUser.role}
</div>

</div>

`;

}


/* ==========================================================
ADMIN
========================================================== */

function renderAdmin(){

document.getElementById(
"adminContent"
).innerHTML=`

<div class="card">

<h3>Create New Doctor</h3>

<div class="form-grid">

${field("newDoctorName","Doctor Name")}

${field("newDoctorSpecialization","Specialization")}

${field("newDoctorHospital","Hospital")}

${field("newDoctorLocation","District")}

${field("newDoctorUsername","Username")}

${field("newDoctorPassword","Password")}

</div>

<p style="font-size:12px;color:#777;margin-bottom:15px">
Only Tamil Nadu doctors can be added.
</p>

<button class="primary"
onclick="createDoctor()">
Create Doctor
</button>

</div>

<div class="card">

<h3>Doctor Accounts</h3>

<div class="table-container">

<table>

<thead>

<tr>

<th>ID</th>
<th>Doctor</th>
<th>Specialization</th>
<th>Hospital</th>
<th>Location</th>
<th>Login</th>

</tr>

</thead>

<tbody>

${
database.doctors.map(d=>`

<tr>

<td>${d.id}</td>

<td>
Dr. ${d.name}
</td>

<td>${d.specialization}</td>

<td>${d.hospital}</td>

<td>${d.location}</td>

<td>
${d.username}
</td>

</tr>

`).join("")
}

</tbody>

</table>

</div>

</div>

`;

}


function createDoctor(){

const name=
get("newDoctorName");

const specialization=
get("newDoctorSpecialization");

const hospital=
get("newDoctorHospital");

const location=
get("newDoctorLocation");

const username=
get("newDoctorUsername");

const password=
get("newDoctorPassword");


if(
!name||
!specialization||
!hospital||
!location||
!username||
!password
){

alert("Fill all doctor details.");

return;

}


if(
database.users.some(
u=>u.username===username
)
){

alert("Username already exists.");

return;

}


const id=Date.now();


database.users.push({

id:"DOCUSER"+id,

role:"doctor",

username,

password,

name,

email:username+"@carehub.com"

});


database.doctors.push({

id:"DOC"+id,

userId:"DOCUSER"+id,

username,

name,

specialization,

hospital,

location:location+", Tamil Nadu",

days:"Monday - Friday",

time:"09:00 AM - 01:00 PM",

available:true

});


saveDatabase();

alert(
"Doctor account created successfully."
);

renderAdmin();

}


/* ==========================================================
MODAL
========================================================== */

function openModal(title,body){

document.getElementById(
"modalTitle"
).innerText=title;

document.getElementById(
"modalBody"
).innerHTML=body;

document.getElementById(
"modal"
).classList.remove("hidden");

}


function closeModal(){

document.getElementById(
"modal"
).classList.add("hidden");

}


/* ==========================================================
HELPER
========================================================== */

function get(id){

const element=
document.getElementById(id);

return element?
element.value.trim():"";

}


function field(id,label,type="text"){

return`

<div class="input-group">

<label>${label}</label>

<input
id="${id}"
type="${type}">

</div>

`;

}


/* ==========================================================
LOGOUT
========================================================== */

function logoutUser(){

currentUser=null;

document.getElementById("app")
.style.display="none";

document.getElementById("loginPage")
.style.display="flex";

document.getElementById("loginUsername")
.value="";

document.getElementById("loginPassword")
.value="";

currentRole="patient";

document.querySelectorAll(".roles button")
.forEach(b=>b.classList.remove("active"));

document.querySelector(".roles button")
.classList.add("active");

document.getElementById("registerLink")
.style.display="block";

}


/* ==========================================================
INITIAL
========================================================== */

console.log(
"CareHub loaded:",
database.doctors.length,
"doctors,",
database.patients.length,
"patients"
);
