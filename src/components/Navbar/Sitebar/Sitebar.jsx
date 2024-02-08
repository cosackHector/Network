import classes from './Sitebar.module.css';

const Sitebar = (props) => {
    return (
        <div>
            <h3 className={classes.sitebar}>Friends</h3>
            <div className={classes.friends}>
                <a  href='#'>
                    <img className={classes.img} src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg' alt="" />
                    <div>Svet</div>
                </a>
                <a href='#'>
                    <img className={classes.img} src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg' alt="" />
                    <div>Liza</div>
                </a>
                <a href='#'>
                    <img className={classes.img} src='https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg' alt="" />
                    <div>Valia</div>
                </a>
            </div>
        </div>
)}

    export default Sitebar;