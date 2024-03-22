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