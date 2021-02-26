// dom objects
const table = document.getElementById("persons-list");
const tbody = document.querySelector("#persons-list tbody");
const form = document.getElementById("controls");

let persons = [{
    id: 1,
    name: "Jothika",
    age: 21,
    email: "jothikasaravanan30@gmail.com"
},
{
    id: 2,
    name: "Rij",
    age: 21,
    email: "rij@gmail.com"
}];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = e.target;

    const name = fields[0].value;
    const age = parseInt(fields[1].value);
    const email = fields[2].value;

    const person = {
        id: Date.now(),
        name: name,
        age: age,
        email: email
    };
    addPerson(person);
    // Reset fields
    fields[0].value = '';
    fields[1].value = 0;
    fields[2].value = '';

})

function addPerson(person) {
    persons.push(person);
    createAllRows();
}

function deleteRow(id) {
    persons = persons.filter(person => person.id !== id);
    createAllRows();
}

function createAllRows() {
    tbody.innerHTML = ""
    persons.forEach(person => {
        createRow(person);
    });
}

function createRow(person) {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.innerText = person.name;
    const ageTd = document.createElement("td");
    ageTd.innerText = person.age;
    const emailTd = document.createElement("td");
    emailTd.innerText = person.email;
    const deleteBtnTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = (id) => deleteRow(person.id);
    deleteBtnTd.appendChild(deleteBtn);
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(emailTd);
    tr.appendChild(deleteBtnTd);
    tbody.appendChild(tr);
}

createAllRows();