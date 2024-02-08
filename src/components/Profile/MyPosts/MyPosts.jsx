import React from 'react';
import Post from './Post/Post';
import cl from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsItem = props.posts.map(post => <Post message={post.post} likes={post.likes}/>);
    let newPost = React.createRef();
    
    let onAddPost = () => {
        props.addPost()
    };
    
    let onChangeText = () => {
        let text = newPost.current.value
        props.updateNewPostText(text)
    };

    return  (
        <div className={cl.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onChangeText} ref={newPost} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={cl.posts}>
                {postsItem}
            </div>
        </div>
    )};

    export default MyPosts;