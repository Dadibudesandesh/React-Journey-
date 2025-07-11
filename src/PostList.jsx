import { useEffect, useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [error,setError]=useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            // .then((res) => res.json())
            .then((res)=>{
                if(!res.ok) throw new Error("Network Issue...")
                    return res.json()
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err)=>{
                console.error(err)
                setError(err.message);
                setLoading(false)
            });
          
    },[]);

    if (loading) return <p>Lodding.....</p>
    if (error) return <p>Error : {error}</p>

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.slice(0,5).map((post)=>(
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;
