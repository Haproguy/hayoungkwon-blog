import axios from "axios"

export default async function postList(req, res) {
    try {
        const response = await axios.get('https://next-blog-d9312-default-rtdb.firebaseio.com/posting.json');
        const jsonData = response.data;
        res.status(200).json(jsonData);

    } catch (error) {
        res.status(500).send('server error' + error);
    }
}

