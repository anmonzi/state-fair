const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("click", (event) => {
    if(event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
        const addTicket = new CustomEvent("addTicket")
        eventHub.dispatchEvent(addTicket)
    }
})


eventHub.addEventListener("click", (event) => {
    if(event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
        const addTicket = new CustomEvent("addTicket")
        eventHub.dispatchEvent(addTicket)
    }
})


eventHub.addEventListener("click", (event) => {
    if(event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
        const addTicket = new CustomEvent("addTicket")
        eventHub.dispatchEvent(addTicket)
    }
})


eventHub.addEventListener("click", (event) => {
    if(event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
        const addTicket = new CustomEvent("addTicket")
        eventHub.dispatchEvent(addTicket)
    }
})


eventHub.addEventListener("click", (event) => {
    if(event.target.id === "fullPackageTicket") {
        const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
        const addTicket = new CustomEvent("addTicket")
        eventHub.dispatchEvent(addTicket)
    }
})




export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

