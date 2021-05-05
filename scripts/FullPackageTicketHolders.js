const contentTarget = document.querySelectorAll(".people")
const eventHub = document.querySelector("#state-fair")



export const FullPackageTicketHolders = () => {
        eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
            for(const target of contentTarget) {
                target.innerHTML += `<div class="person bigSpender"></div>`
            }
        }
    )
}
