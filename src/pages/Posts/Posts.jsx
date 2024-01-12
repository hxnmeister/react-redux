import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts, addPost } from '../../asyncThunks/postThunk';

const Post = () => 
{
    const { posts, loading, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => 
    {
        dispatch(allPosts());
    },[]);

    const addPostHandler = () =>
    {
        const post = 
        {
            title: 'some title 1',
            content: 'some content 1'
        }

        dispatch(addPost(post));
    };

    if(loading)
    {
        return 'Loading...';
    }
    else if(error)
    {
        return error;
    }

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={ addPostHandler }>Add Post</button>
            {posts.map( (post) => <div key={post._id}> <span>{post.title} {/*- {post.comments.map( (comment) => comment.text )}*/}</span></div>)}
        </div>
    );
}

export default Post;
