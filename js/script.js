const passengerKM = prompt("How many kilometers does the passenger need to travel?");
const passengerAge = prompt("What is the age of the passenger?");
const ratePerKM = 0.21;
const under25Discount = 0.20;
const over65Discount = 0.40;

const grossTicketPrice = passengerKM * ratePerKM;
let ticketPrice;
let breakdownExtra = '';

if (passengerAge >= 65) {
    ticketPrice = (grossTicketPrice * (1 - over65Discount)).toFixed(2);
    breakdownExtra = `<br> Over 65 discount -${over65Discount * 100}% : <strong>-€${(grossTicketPrice * over65Discount).toFixed(2)}</strong><br>
    Final price: <strong>${ticketPrice}</strong>`;
} 
else if (passengerAge < 25){
    ticketPrice = (grossTicketPrice * (1 - under25Discount)).toFixed(2);
    breakdownExtra = `<br> Under 25 discount -${under25Discount * 100}% : <strong>-€${(grossTicketPrice * under25Discount).toFixed(2)}</strong><br>
    Final price: <strong>${ticketPrice}</strong>`;
}
else {
    ticketPrice = grossTicketPrice.toFixed(2);
}

let message = `
The price of a ${passengerKM}-kilometer ticket for a ${passengerAge}-year old is €${ticketPrice}
`;

let breakdown = `
Base rate per KM: <strong>€${ratePerKM}</strong> <br>
KM to travel: <strong>${passengerKM}</strong> <br>
Ticket price: <strong>€${grossTicketPrice.toFixed(2)}</strong>
${breakdownExtra}`;


document.getElementById('message').innerHTML = message;
document.getElementById('breakdown').innerHTML = breakdown;