import React, {useEffect, useState} from "react";
import Axios from "axios";
import Post from "components/post/Post";

// const api_url = process.env.APP_API_URL;
const api_url = 'http://localhost:8000';
const PostList = () => {
    const [post_list, setPostList] = useState([]);

    useEffect(() => {
        Axios.get(`${api_url}/api/posts`).then(response => {
            const {data} = response;
            setPostList(data);
        }).catch(error => {
            console.log(error.response)
        });
    }, [])

    return (
        <div>
            {post_list.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    )
}

export default PostList;