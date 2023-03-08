import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';

const List = () => {

    axios.defaults.withCredentials = true;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const {data} = await axios.get('http://localhost:5000/data')
        setPosts(data);
    };
    return (
        <div>
            <br/>
            {posts.map(post => (
                <div key={post.Id}>
                    <ul>
                        <li>Name: {post.Title}, <br/>Date: {post.Date}, <br/>Place: {post.Description}</li>
                    </ul>
                </div>
            ))}
            <br/>
        </div>
    );
};

export default List;