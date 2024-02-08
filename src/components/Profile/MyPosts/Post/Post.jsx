import cl from './Post.module.css'

const Post = (props) => {
    return  (
        <div className={cl.item}>
            <img src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg'></img>
            {props.message}
            <div>
                <span>like </span> 
                {props.likes}
            </div>
        </div>
    )}

    export default Post;