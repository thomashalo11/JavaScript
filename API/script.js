/*{
    "UserId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
*/
async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const userData = await response.json();
    return userData;
}
async function renderTable() {
    try {
        const jsonData = await fetchUserData();
        let tbody = "";
        let riga = "";
        // Metodo 1
        riga = `<tr><td>UserID</td><td>${jsonData["userId"]}</td></tr>`;
        tbody += riga;
        riga = `<tr><td>ID</td><td>${jsonData["id"]}</td></tr>`;
        tbody += riga;
        riga = `<tr><td>Title</td><td>${jsonData["title"]}</td></tr>`;
        tbody += riga;
        riga = `<tr><td>Completed</td><td>${jsonData["completed"]}</td></tr>`;
        tbody += riga;
        console.log(tbody);
        document.getElementById("tbody").innerHTML = tbody;
        
        tbody = "";
        // Metodo 2
        for (const chiave in jsonData) {
            riga = `<tr><td>${chiave}</td><td>${jsonData[chiave]}</td></tr>`;
            tbody += riga;
        }
        document.getElementById("tbody2").innerHTML = tbody;
   
    } catch (error) {
        console.error("Errore durante il rendering della tabella: ", error);
    }
}
renderTable();
