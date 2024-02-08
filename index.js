/** @format */

const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
  },
];

function generateTable(data) {
  let html = "<table>";
  html +=
    "<tr><th>ID</th><th>Email</th><th>First Name</th><th>Last Name</th><th>DELETE</th></tr>";
  for (let i = 0; i < data.length; i++) {
    html += "<tr>";
    html += "<td>" + data[i].id + "</td>";
    html += "<td>" + data[i].email + "</td>";
    html += "<td>" + data[i].first_name + "</td>";
    html += "<td>" + data[i].last_name + "</td>";
    html += '<td><button onclick="deleteRow(' + i + ')">Delete</button></td>';
    html += "</tr>";
  }
  html += "</table>";
  return html;
}

function deleteRow(index) {
  users.splice(index, 1);
  document.getElementById("table-container").innerHTML = generateTable(users);
}

document.getElementById("table-container").innerHTML = generateTable(users);

function openModal() {
  document.getElementById("addUserModal").style.display = "block";
}

function closeModal() {
  document.getElementById("addUserModal").style.display = "none";
}

document
  .getElementById("addUserForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    users.push({
      id: users.length + 1,
      email: email,
      first_name: firstName,
      last_name: lastName,
    });
    closeModal(); // Close the modal
    document.getElementById("table-container").innerHTML = generateTable(users); // Regenerate the table
  });

const form = document.getElementById("addUserForm");
const statusInfo = document.getElementById("statusInfo");
const email = document.getElementById("email").value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.addUserForm;
  try {
    statusInfo.textContent = "";
    if (formValues.firstName === "" || formValues.firstName.length < 5) {
      throw new Error("Please enter first Name");
    }
    if (formValues.lastName === "" || formValues.lastName.length < 5) {
      throw new Error("Please enter last Name");
    }
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText =
        "Please enter a valid email address.";
    } else {
      document.getElementById("emailError").innerText = "";
    }
    console.log("Successfully added");
  } catch (error) {
    statusInfo.textContent = error.message;
    statusInfo.style.color = "red";
  }
});

let text = "Please enter a valid email address and password";

function getString(text) {
  return new Promise((resolve, reject) => {
    if (text.length > 10) {
      setTimeout(() => resolve(text), 5000);
    } else {
      reject(new Error("String is too short"));
    }
  });
}

getString(text)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

Promise.all([getString(text)]) // Wrap getString(text) in an array
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
