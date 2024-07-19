// storage.js
// local
// const key = "myLocalData";
// const saveToLocal = () => {
//     const input = document.getElementById("localInput").value;
//     localStorage.setItem(key, input);
//     alert("Data saved to local storage");
// };
 
// const loadFromLocal = () => {
//     const data = localStorage.getItem(key);
//     const output = document.getElementById("localOutput");
//     if(data) {
//         output.textContent = `Load data - ${data}`;
//     } else {
//         output.textContent = "No data found in local storage";
//     }
// }

// session
const key = "mySessionData";
const saveToSession = () => {
    const input = document.getElementById("localInput").value;
    sessionStorage.setItem(key, input);
    alert("Data saved to session storage");
};

const loadFromSession = () => {
    const data = sessionStorage.getItem(key);
    const output = document.getElementById("localOutput");
    if (data) {
        output.textContent = `Load data - ${data}`;
    } else {
        output.textContent = "No data found in session storage";
    }
};
