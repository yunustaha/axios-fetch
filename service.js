import axios from 'axios';

export default async function getData (userId) {
    try {
        const getResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        return { ...getResponse.data, posts: postResponse.data }

    } catch (error) {
        console.log(error);
    }
}