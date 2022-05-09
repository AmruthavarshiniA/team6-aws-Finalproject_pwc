import httpClient from "../http-com";

const getAll = () => {
    return httpClient.get('/feedbacks');
}

const create = data => {
    return httpClient.post("/feedbacks", data);
}

export default { getAll, create};