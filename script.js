console.log("Hello akky welcome back")
// alert("jhsdnjnk");

// get_values();

let name = document.getElementById("name");
let author = document.getElementById("author");

// let first = document.getElementById("firdt");
// let second = document.getElementById("second");
// let third = document.getElementById("third");
// let fourth = document.getElementById("fourth");
// let fifth = document.getElementById("fifth");
// let sixth = document.getElementById("sixth");

let book_name = document.getElementById("book_name");

let submit_btn = document.getElementById("submit_btn");



// Book object assigning (Constructor)

function Book(name, author, semester, book_name) {
    this.name = name;
    this.author = author;
    this.semester = semester;
    this.book_name = book_name;
}


// Display object assigning

function Display() {


}


Display.prototype.add = function (book) {

    console.log("adding to UI");

    let tobedisplay = document.getElementById("tobedisplay");


    let uistring = `<tr>
    <th scope="row">1</th>
    <td>${book.name.toUpperCase()}.</td>
    <td>${book.author}</td>
    <td>${book.semester}</td>
    <td>${book.book_name}</td>

    </tr> `;

   
              
     
             

  /*  let uistring = ` 
                             <h3 id="book_name_out">${book.book_name}</h3> 
                             <div id="name_out">${book.name}</div>
                             <div id="author_out">${book.author}</div>
                             <div id="semester_out">${book.semester}</div>
                           <hr> `;

*/
    tobedisplay.innerHTML += uistring;

}


//    Reset input fields after submission

Display.prototype.clear = function () {

    let formgroup = document.getElementById("formgroup");
    formgroup.reset();
}

//   Validation function to check weather input by user valid or not

Display.prototype.validation = function (book) {

    if (book.name.length < 2 || book.book_name.length < 2 || book.author.length < 2) {

        return false;
        console.log("Please Enter Accurate Data");
    }

    else {
        return true;
    }
}


// Show Alert Message Function

Display.prototype.show_alert_msg = function (type, message) {

    let alert_msg = document.getElementById("alert_msg");


    alert_msg.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>${type}</strong> ${message}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;


    // Time out function for Alert Message  

    setTimeout(function () {
        alert_msg.innerHTML = ''
    }, 4000);

}







//get output elements for wite HTML

submit_btn.addEventListener("click", function get_values(e) {
    // int Arr[]={"name","email","book_name"}

    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let book_name = document.getElementById("book_name").value;

    let semester = " ";
    let first = document.getElementById("first");
    let second = document.getElementById("second");
    let third = document.getElementById("third");
    let fourth = document.getElementById("fourth");

    if (first.checked) {

        semester = first.value;

    }

    else if (second.checked) {

        semester = second.value;

    }

    else if (third.checked) {

        semester = third.value;

    }

    else if (fourth.checked) {

        semester = fourth.value;

    }

    let book = new Book(name, author, semester, book_name);
    console.log(book);

    let display = new Display();



    if (display.validation(book)) {

        display.add(book);
        display.show_alert_msg("Success", "You have submitted successfully!");
        display.clear();

    }

    else {
        console.log("wron entry");
        display.show_alert_msg("Error !", "Please Provide accurate data.");
    }
    e.preventDefault();

})

