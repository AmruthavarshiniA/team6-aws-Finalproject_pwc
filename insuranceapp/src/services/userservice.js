import httpClient from "../http-com";

const getAll = () => {
    return httpClient.get('/users');
}

const create = data => {
    return httpClient.post("/users", data);
}

const get = id => {
    return httpClient.get(`/employees/${id}`);
}

const update = data => {
    return httpClient.put('/employees', data);

}

const remove = id => {
    return httpClient.delete(`/employees/${id}`);
}
export default { getAll, create, get, update, remove };