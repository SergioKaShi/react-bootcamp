import axios from 'axios';

const create = ({ title, body, userId }) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId })
        .then(response => {
            const { data } = response;
            return data;
        })
        .catch(error => {
            console.error(error)
        });
};

const getAll = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const { data } = response;
            return data;
        })
        .catch(error => {
            console.error(error)
        });
};

const endpoints = { getAll, create };

export default endpoints;
