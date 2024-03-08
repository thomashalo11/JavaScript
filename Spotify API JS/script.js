var access_token = "BQBtcpSwrnk9GOZEgcIEndn8jEFGdDx7BKE7nk2GvT60aIMUgKRsHc_aEFU2eARP3t1Khu255ggkFQ1LP1lTNposn44cDPudaUCi1Msprx75ImvihtVTkqK-fnDXwSpsLEkaXlCRA9lY7doNnvk6yBiksUTS5iGwW-6uyWdGngqfKJUrLktt8PIDCeWGSHgXU7lJ5s8JhcVA4K1f-NxFDwhm";
var album_id = "2Hx0aUXDvj0Lvw6t5141ea";

async function fetchAlbumData() {
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

async function renderTable() {
    try {
        const jsonAlbumData = await fetchAlbumData();
        let tbody = "<tr>";

        tbody += `<td>${jsonAlbumData["artists"][0]["name"]}</td>`;
        tbody += `<td>${jsonAlbumData["name"]}</td>`;
        tbody += `<td><img src="${jsonAlbumData["images"][0]["url"]}" alt="Copertina" style="width: 100px;"></td>`;
        tbody += `<td><a href="${jsonAlbumData["external_urls"]["spotify"]}">Ascolta</a></td>`;
        tbody += `</tr>`;
        document.getElementById("tbody").innerHTML = tbody;
    } catch (error) {
        console.error("Errore durante il rendering della tabella: ", error);
    }
}
renderTable();