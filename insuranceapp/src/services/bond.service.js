import httpClient from "../http-com";

const getAll = () => {
    return httpClient.get('/bonds');
}

const create = data => {
    return httpClient.post("/bonds", data);
}

const remove = id => {
    return httpClient.delete(`/bonds/${id}`);
}

export default { getAll, create,remove };