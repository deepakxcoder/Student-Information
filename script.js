function SubmitButton(event) {
    event.preventDefault();

    // Accessing form values
    let name = document.getElementById('fname').value.trim();
    let email = document.getElementById('mail').value.trim();
    let contactNumber = document.getElementById('cnum').value.trim();
    let feedbackDate = document.getElementById('dte').value;
    let courseName = document.getElementById('cname').value.trim();
    let instructorName = document.getElementById('Iname').value.trim();


    // Validations
    if (name.length > 5) {
        alert('Name should be less than 5 characters');
        return;
    }

    if (name[0] !== name[0].toUpperCase()) {
        alert('Name should start with a capital letter');
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert('Name should only contain letters and spaces');
        return;
    }

    if (!email.includes('@')) {
        alert('Email should include @');
        return;
    }

    // Validating contact number (India format +91 + 10 digits)
    if (!/^\d{10}$/.test(contactNumber)) {
        alert('Contact Number should be exactly 10 digits');
        return;
    }

    // Add data to table
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    let cell4 = document.createElement('td');
    let cell5 = document.createElement('td');
    let cell6 = document.createElement('td');
    cell1.textContent = name; 
    cell2.textContent = contactNumber;
    cell3.textContent = email; 
    cell4.textContent = feedbackDate;
    cell5.textContent = courseName; 
    cell6.textContent = instructorName;
    row.appendChild(cell1); 
    row.appendChild(cell2);
    row.appendChild(cell3); 
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);

    document.getElementById('t1').appendChild(row);

    // Reset the form
    document.forms["myForm"].reset();
}
