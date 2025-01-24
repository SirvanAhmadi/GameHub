import { useState } from "react";
import usePost from "../hook/usePost"


const PostDetail = () => {

    const [postId,setPostId] = useState("")
  const {data,} =  usePost(postId);

  return (
    <div>
        <select onChange={(event) => {
            console.log(event);
            setPostId(event.target.value)
        }}>
            <option value="">
                Choose your post
            </option>
            <option value="1">
                Post 1
            </option>
            <option value="2">
            Post 2
            </option>
            <option value="3">
            Post 3
            </option>
        </select>

        <div>
            <h2>
            {data?.title}
            </h2>
            <p>
                {data?.body}
            </p>
        </div>
    </div>
  )
}

export default PostDetail