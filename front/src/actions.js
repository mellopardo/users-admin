import axios from 'axios';

const signup = async (user) => {
    const response = await axios.post('http://localhost:8080/signup', user);

    return response.data;
}

const login = async (data) => {
    const response = await axios.post('http://localhost:8080/login', data);

    return response.data;
}

const getUsers = async () => {
    const response = await axios.get('http://localhost:8080/users');

    return response.data;
}

const edit = async (user) => {
    const response = await axios.put('http://localhost:8080/users',user);

    return response.data;
}

const deleteUser = async (user) => {
    const response = await axios.delete('http://localhost:8080/users/' + user.id);

    return response.data;
}

export default {
    signup,
    login,
    getUsers,
    edit,
    deleteUser,
};