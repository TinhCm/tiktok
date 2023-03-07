import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/132650489_2811531662467967_2763030351591934173_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZJIINleps2gAX8qEfbO&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfBOxPX58A28A58saeaqRytfZYefp3RB4Pb8pshM6nQInQ&oe=642D9BD6"
                alt=""
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Võ Thị Hoài Thương</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('usename')}>vothihoaithuong</span>
            </div>
        </div>
    );
}

export default AccountItem;
