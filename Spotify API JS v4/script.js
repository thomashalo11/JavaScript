var access_token = "BQBVrbdfE7VGi2-47WhNDKKfOkTaHBWa2Q0dgVDDHxXYhN31Cd6g1_A47poW6NG4LnNzinro2CQjSjO4We8UUARt-2YmUFC4hw9XMgc5Np6qXYyDzejBvBrIKXPje9MH8R9P6ohS-ZzxeJ51IB3CQH3qt6JHLT2RRIRFQD-9GxphU5VPLzchLmcYSxQs09HYl6kcyDiS6fou_l2DdEDhgBbe";

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
            tbody += `<td><a href="${song['track']['artists'][0]['external_urls']['spotify']}">${song['track']['artists'][0]['name']}</a></td>`;
            tbody += `<td><img src="${song["track"]["album"]["images"][0]["url"]}" alt="Copertina" style="width: 100px;" onclick="renderTableAlbum(${song["album"]})"><a href=""</td>`;
            tbody += `<td><button onclick="playSong('${song['track']['id']}', '${song['track']['name']}')">Play</button>`;
            tbody += `<td><a href="${song['track']['album']['external_urls']['spotify']}">${song['track']['album']['name']}</a></td></tr>`;
        });
        document.getElementById("tbody").innerHTML = tbody;

        let tbody2 = "";
        jsonTracksData['items'].forEach(song => {
            tbody2 += `<tr><p>Stai ascoltando: ${song['track']['name']}</p></tr>`;
        })

        let tbodyAlbumTracks = "";
        jsonTracksData['items'].forEach(song => {
            tbodyAlbumTracks += `<tr><button onclick="playSong('${song['track']['id']}', '${song['track']['name']}')"</tr>`;
            tbodyAlbumTracks += `<tr><td>${song['track']['name']}</td></tr>`;
            tbodyAlbumTracks += `<tr><td>${song['track']['duration_ms']}</td></tr>`
        })
        document.getElementById("albumTracks").hidden = false;

    } catch (error) {
        console.error("Errore durante il rendering della tabella: ", error);
    }
}
async function fetchAlbumData(album_id) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/albums/${album_id}`, {
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

async function renderTableAlbum() {
    fetchAlbumData();

}
renderTable();

async function playSong(songId, songTitle) {
    const playerDiv = document.getElementById('spotifyPlayer');
    const playerHTML = `
    <div>
        <p>Stai ascoltando: ${songTitle}</p>
        <iframe src="https://open.spotify.com/embed/track/${songId}"
            width="300" height="80" frameboarder="0" allowtransparency="true" allow="encrypted-media">
        </iframe>
    </div>
    `;
    console.log(playerHTML)
    playerDiv.innerHTML = playerHTML;
}

// async function displayAlbumTracks(album_id)
playSong(`${song['track']['id']}, ${songTitle}`);
