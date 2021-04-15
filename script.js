console.log("Hello akky welcome back")

// Function to be add



// Show Issued or Returned Status of Book


display_onwebpage();


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

// Add details to Local Storage ==========================================

function addto_storage(book) {

    let books = localStorage.getItem("books");

    if (books == null) {
        bookobj = [];
    }

    else {

        bookobj = JSON.parse(books);
    }


    bookobj.push(book);
    localStorage.setItem("books", JSON.stringify(bookobj));

}


// Display on screen function ==========================================

// Display.prototype.display_onwebpage = function (book) {
function display_onwebpage() {

    //  console.log("adding to UI");

    let uistring = " ";
    let tobedisplay = document.getElementById("tobedisplay");


    let books = localStorage.getItem("books");

    if (books == null) {
        bookobj = [];
    }

    else {
        bookobj = JSON.parse(books);
    }

    Array.from(bookobj).forEach(function (element, index) {

        uistring += `<tr class="book_card_with_detail">
           <th class="border border-2" scope="row">${index + 1}</th>
           <td class="border border-2">${element.name.toUpperCase()}</td>
           <td class="border border-2">${element.author}</td>
           <td class="border border-2">${element.semester}</td>
           <td class="border border-2">${element.book_name}</td>
           <td class="border border-2"><button  id = "${index}" type="button"  class="btn btn-info" onclick = "delete_book_detail(${index})"> Delete </button></td>
            </tr> <br> `;
    });


    if (bookobj.lenght != 0) {
        tobedisplay.innerHTML = uistring;
    }
    else {
        tobedisplay.innerHTML = `<p>Nothing to show<\p>`;
        console.log("nothing to ");
    }

}


//    Reset input fields after input details submission =========

Display.prototype.clear = function () {

    let formgroup = document.getElementById("formgroup");
    formgroup.reset();

}


//  Validation function to check weather input by user valid or not ========

Display.prototype.validation = function (book) {

    if (book.name.length < 2 || book.book_name.length < 2 || book.author.length < 2) {

        return false;
        console.log("Please Enter Accurate Data");
    }

    else {
        return true;
    }
}


// Show Alert Message Function ==========================================

Display.prototype.show_alert_msg = function (type, message) {

    let alert_msg = document.getElementById("alert_msg");

    alert_msg.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>${type}</strong> ${message}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;

    // Time out function for Alert Message  

    setTimeout(function () {
        alert_msg.innerHTML = ' ';
    }, 2000);

}

// Delete any book details function ==========================================

 function delete_book_detail(index){
  
    console.log(index);
    let books = localStorage.getItem("books");

    if(books==null){
        bookobj = [];
    }

    else{
        bookobj = JSON.parse(books);
    }

    bookobj.splice(index, 1);

    localStorage.setItem("books", JSON.stringify(bookobj));
    display_onwebpage();

}



// Search bar js code ==========================================


let search_input = document.getElementById("search_input");

 //Add event on search bar to get required data on screen
search_input.addEventListener("input" , function(e){
   
    let search_text = document.getElementById("search_input").value; //To be search value
    let book_card_with_detail = document.getElementsByClassName("book_card_with_detail"); // Book details Rows

    Array.from(book_card_with_detail).forEach(Element =>{
     
     let to_befound_elements = Element.getElementsByTagName("td")[0].innerText; // get all details value for  books
      

     if(to_befound_elements.includes(search_text)){ 

        Element.style.display= "block";
        }
    
        else{
            Element.style.display = "none";
        }
    

    });


});




// Add event on sumbit button to get output on WebScreen

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", function (e) {

    //Getting HTML input values  

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

        addto_storage(book);   //// Code to implement Local Stprage
        display_onwebpage(book); // Manipulate DOM to display details on web page
        display.show_alert_msg("Success", "You have submitted successfully!");
        display.clear();
    }

    else {
        console.log("wrong entry");
        display.show_alert_msg("Error !", "Please Provide accurate data.");
    }
    e.preventDefault();
});



