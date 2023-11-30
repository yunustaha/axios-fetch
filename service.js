import axios from 'axios';

export default async function getData (userId) {
    try {
        //get user request
        const getResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        //post user request
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        return { ...getResponse.data, posts: postResponse.data }

    } catch (error) {
        console.log(error);
    }
}