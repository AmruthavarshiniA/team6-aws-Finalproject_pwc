import httpClient from "../http-com";

const getAll = () => {
    return httpClient.get('/policies');
}

const create = data => {
    return httpClient.post("/policies", data);
}

const get = id => {
    return httpClient.get(`/policies/${id}`);
}

const update = data => {
    return httpClient.put('/policies', data);

}

const remove = id => {
    return httpClient.delete(`/policies/${id}`);
}

export default { getAll, create, get, update, remove };