import httpClient from "../http-com";

const getAll = () => {
    return httpClient.get('/users');
}

const create = data => {
    return httpClient.post("/users", data);
}


export default { getAll, create };