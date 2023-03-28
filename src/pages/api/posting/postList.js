import axios from "axios"

export default async function postList(req, res) {
    try {
        const response = await axios.get('https://next-blog-d9312-default-rtdb.firebaseio.com/posting.json');
        const jsonData = response.data;
        const data = Object.keys(jsonData).map(key => ({
            ...res.data[key],
            postID: key,
        }));
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send('server error' + error);
    }
}

