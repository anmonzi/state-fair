const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")


const customEvent = () => {
    contentTarget.innerHTML = `<div class="person rider"></div>`
}


// export const RideTicketHolders = () => {
//     eventHub.addEventListener("rideTicketPurchased", customEvent => {
//         contentTarget.innerHTML = `<div class="person rider"></div>`
//     })
// }

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent)}


    //* Need to figure out multiple click event listener!