const fillInput = (elem, value) => {
    const event = new Event("input", { bubbles: true });
    document.querySelector(elem).value = value;
    document.querySelector(elem).dispatchEvent(event);
}

const fillInputById = (id, value) => {
    const event = new Event("input", { bubbles: true });
    document.getElementById(id).value = value;
    document.getElementById(id).dispatchEvent(event);
}

chrome.runtime.onMessage.addListener((request) => {
    fillInput("[placeholder = 'Passenger Name']", "Aamir Khan");
    fillInput("[placeholder = 'Age']", "20");
    fillInput("select", "M");
    fillInput("[formcontrolname='passengerBerthChoice']", "LB");
    fillInputById("mobileNumber", "9821883839");
    fillInputById("aaa1", "448, Chauth mata mandir, mandir ke samne aate hi phone laga lena mein aa jaunga, Shivpura");
})