export const Api = {
    baseUrl: "https://xbox-live-thiago-backend.herokuapp.com",

    // ENDPOINT - LOGIN

    loginUrl: () => Api.baseUrl + "/login",

    // ENDPOINT - JOGOS

    readAllUrl: () => Api.baseUrl + "/jogo",

    readByIdUrl: id => Api.baseUrl + "/jogo/" + id,

    readByIdWithGeneroUrl: id => Api.baseUrl + `/jogo/${id}/WithGenero`,

    createJogoUrl: () => Api.baseUrl + "/jogo",

    updateJogoUrl: id => Api.baseUrl + "/jogo/" + id,

    deleteJogoUrl: id => Api.baseUrl + "/jogo/" + id,

    // ENDPOINT -  USUARIO

    createUsuarioUrl: () => Api.baseUrl + "/usuario",

    readAllUsuarioWithPerfisUrl: () => Api.baseUrl + "/usuario/WithPerfis",

    readByIdUsuarioWithPerfisUrl: id => Api.baseUrl + `/usuario/${id}/WithPerfis`,

    readAllUsuarioUrl: () => Api.baseUrl + "/usuario",

    // ENDPOINT -  GENERO

    readAllGeneroUrl: () => Api.baseUrl + "/genero",

    deleteGeneroUrl: id => Api.baseUrl + "/genero/" + id,

    readAllGeneroWithGamesUrl: () => Api.baseUrl + "/genero/withGames",

    readByIdGeneroWithGamesUrl: id => Api.baseUrl + `/genero/${id}/withGames`,

    readByIdGeneroUrl: id => Api.baseUrl + "/genero/" + id,

    createGeneroUrl: () => Api.baseUrl + "/genero",

    updateGeneroUrl: id => Api.baseUrl + "/genero/" + id,

    // ENDPOINT -  PERFIL

    updatePerfilUrl: id => Api.baseUrl + `/perfil/${id}`,

    deletePerfilUrl: id => Api.baseUrl + `/perfil/${id}`,

    readPerfilByIdUrl: id => Api.baseUrl + `/perfil/${id}`,

    readAllPerfilWithJogosUrl: () => Api.baseUrl + "/perfil/WithJogos",

    readByIdPerfilWithJogosUrl: id => Api.baseUrl + `/perfil/${id}/WithJogos`,

    
    // AUTH HEADER

    authHeader:() =>({
        Authorization:'Bearer ' + localStorage.getItem("JWT")
    }),

    // GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers(Api.authHeader()) :undefined
        }), 

    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
        fetch(url, {
            method: "DELETE",
            headers: auth ? new Headers(Api.authHeader()) :undefined,
        }),
};