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
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/290303421_3215678515386611_1585545436304625872_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ohL0HlAkkN4AX8VauLG&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfAnVQvojZnfz9rTsg72BslTN_YK8wYOd6jZ4LWDksZzPQ&oe=6403916D"
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
