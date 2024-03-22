var access_token = "BQBuoOEblWoNvNLUFbPT8jT-Z5dmorMzePKr-9JbjeePiXmcxPhoaxdIvwxaZw4SpFab7gPm_PMpBYsk-q8a_JCR4OnZ5f0JCvCY8evhYVMZ85Ayq2cOibBaX_j67sjUPHzvzf3v9vCBX2YiA35KW-IqT8Ij2c5xfYLxqCFPnYFxevSVdS1DfiOszOB6hIkp8QLoukJ_jiH4yM9_7X_zXsrn";

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
            tbody += `<td><a href="${song["track"]["external_urls"]["spotify"]}">${song['track']['name']}</a>`;
            tbody += `<td><a href="${song['track']['album']['external_urls']['spotify']}">${song['track']['album']['name']}</a></td></tr>`;
        });
        document.getElementById("tbody").innerHTML = tbody;
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