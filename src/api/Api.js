export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint - Product

    readAllUrl: () => Api.baseUrl + "/jogo",

    readByIdUrl: id => Api.baseUrl + "/jogo/" + id,

    createJogoUrl: () => Api.baseUrl + "/jogo",

    updateJogoUrl: id => Api.baseUrl + "/jogo/" + id,

    deleteJogoUrl: id => Api.baseUrl + "/jogo/" + id,

    createUsuarioUrl: () => Api.baseUrl + "/usuario",

    readAllGeneroUrl: () => Api.baseUrl + "/genero",

    readAllGeneroWithGamesUrl: () => Api.baseUrl + "/genero/withGames",

    readByIdGeneroWithGamesUrl: id => Api.baseUrl + `/genero/${id}/withGames`,

    readByIdGeneroUrl: id => Api.baseUrl + "/genero/" + id,

    createGeneroUrl: () => Api.baseUrl + "/genero",

    updateGeneroUrl: id => Api.baseUrl + "/genero/" + id,

    readAllUsuarioUrl: () => Api.baseUrl + "/usuario",

    readAllUsuarioWithPerfisUrl: () => Api.baseUrl + "/usuario/WithPerfis",

    readAllPerfilWithJogosUrl: () => Api.baseUrl + "/perfil/WithJogos",

    readByIdUsuarioWithPerfisUrl: id => Api.baseUrl + `/usuario/${id}/WithPerfis`,

    readByIdPerfilWithJogosUrl: id => Api.baseUrl + `/perfil/${id}/WithJogos`,
    
    // GET
    buildApiGetRequest: url =>
        fetch(url, {
            method: "GET",
        }),

    // POST
    buildApiPostRequest: (url, body) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: url =>
        fetch(url, {
            method: "DELETE",
        }),
};