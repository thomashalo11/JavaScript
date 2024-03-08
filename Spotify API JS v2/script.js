var access_token = "BQBYrkwzDKTPNY9qr3_XOlziXZR-b9qg5B15pVI8NQDixAyk56q18QchO1WS-3En8lrZpk5P5kQeC1Ttxm29fD-vG6uQg1QMLh1XatnAyVjVTIlEbqPd-v69SNAJb-UAkbZ4P79l09IsT0e3U0OMektzmwEG54ooa9BtcNQGnChdgVjiUoJxNJUNrOQax5DxzGC2KOpr3xVslJRkzD1d7YDr";

async function fetchTracks() {
    try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        });
        if (!response.ok) {
            throw new Error("Errore nella richiesta: " + response.status);
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Errore durante la richiesta: ", error);
        return null;
    }
}

async function renderTable() {
    try {
        const jsonTracksData = await fetchTracks();
        let tbody = "";
        jsonTracksData['items'].forEach(song => {
            tbody += `<tr><td>${song['track']['name']}</td>`;
            tbody += `<td>${song['track']['artists'][0]['name']}</td>`;
            tbody += `<td><img src="${song["track"]["album"]["images"][0]["url"]}" alt="Copertina" style="width: 100px;"></td>`;
            tbody += `<td><a href="${song["track"]["external_urls"]["spotify"]}">Ascolta</a></tr>`;
        });
        document.getElementById("tbody").innerHTML = tbody;
    } catch (error) {
        console.error("Errore durante il rendering della tabella: ", error);
    }
}
renderTable();