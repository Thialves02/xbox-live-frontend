export const Api = {
    baseUrl: "http://localhost:3000",

    // Endpoint - Product

    readAllUrl: () => Api.baseUrl + "/jogo",

    readByIdUrl: id => Api.baseUrl + "/jogo/" + id,

    createUsuarioUrl: () => Api.baseUrl + "/usuario",

    createJogoUrl: () => Api.baseUrl + "/jogo",

    updateJogoUrl: id => Api.baseUrl + "/jogo/" + id,

    deleteJogoUrl: id => Api.baseUrl + "/jogo/" + id,

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