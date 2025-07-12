import useFetch from "./useFetch";

function PostList(){
    const{data: posts,loading}=useFetch('https://jsonplaceholder.typicode.com/posts')

    return(
        <div>
            <h2>Posts</h2>
            {loading ? <p> Loading....</p> : posts.slice(0,5).map((p)=>(
                <div key={p.id}>
                    <h4>{p.id}</h4>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;