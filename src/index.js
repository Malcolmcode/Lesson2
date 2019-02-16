import "./styles.css";

// CAN YOU HEAR ME? 
// - I can hear sounds coming from you
// my sister has a baby! Malakai

//https://github.com/malcolmcode
//https://www.khanacademy.org/computing/computer-programming/pjs-documentation


// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;


var joe = {
  // key : value,
  name: 'Joe',
  age: 33,
  getState: function () {
    return this.contacts.location.state;
  },
  contacts: {
    phone: '333-333-333',
    zip: '925863', 
    location: {
      state: 'califonia', 
      town: 'here', 
      'some-value': 77
    }
  },
};

joe.name;
joe.contacts.phone;
joe.contacts['phone']
joe.contacts.location['some-value'];

//creating a function
function renderStateOnScreen(message){ // <-- message is a parameter

  // {} curly braces define the body of the function
  // () perameters of the function
  document.getElementById("app").innerHTML = message + joe.getState();
}

//calling a function
renderStateOnScreen('Welcome to '); // <-- actual value for the parameter expected by the function



