let page = document.querySelector("#cards");

function createGame(team1, team2, hour) {
    return `
    <li>
    <img src="./assets/icon-${team1}.svg" alt="${team1} flag">
    <strong>${hour}</strong>
    <img src="./assets/icon-${team2}.svg" alt="${team2} Flag">
    </li>
    `
}

let delay = -0.3

function card(date, day, games) {
    delay = delay + 0.3
    return `
    <div class="card" style="animation-delay:${delay}s">
        
    <h2>
        ${date}
        <span>${day}</span>
    </h2>

    <ul>
        ${games}
    </ul>

</div>
`

}

page.innerHTML =

    card(

        "24/11",
        "QUINTA",
        createGame("uruguay", "south-korea", "10:00") +
        createGame("portugal", "ghana", "13:00") +
        createGame("brazil", "serbia", "16:00")
    )
    +
    card(
        "28/11",
        "SEGUNDA",
        createGame("serbia", "cameroon", "07:00") +
        createGame("brazil", "switzerland", "13:00") +
        createGame("portugal", "uruguay", "16:00")
    )
    +
    card(
        "02/12",
        "SEGUNDA",
        createGame("brazil", "cameroon", "13:00") +
        createGame("serbia", "switzerland", "16:00") +
        createGame("portugal", "uruguay", "16:00")
    )
    +
    card(
        "22/11",
        "SEGUNDA",
        createGame("argentina", "arabia", "10:00") +
        createGame("mexico", "poland", "13:00") +
        createGame("france", "australia", "16:00")
    )

    +
    card(
        "26/11",
        "SEGUNDA",
        createGame("poland", "arabia", "10:00") +
        createGame("france", "denmark", "13:00") +
        createGame("argentina", "mexico", "16:00")
    )

    +
    card(
        "28/11",
        "SEGUNDA",
        createGame("tunisia", "france", "12:00") +
        createGame("australia", "denmark", "12:00") +
        createGame("poland", "argentina", "16:00")
    )

