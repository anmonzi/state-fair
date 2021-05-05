const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let ticketsSold = 0
contentTarget.innerHTML = `Total tickets purchased: ${ticketsSold}`


export const TotalTickets = () => {
    eventHub.addEventListener("addTicket", customEvent => {
        ticketsSold++
        contentTarget.innerHTML = `Total tickets purchased: ${ticketsSold}`
        }
    )
}