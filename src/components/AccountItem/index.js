import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt=""></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('usename')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default AccountItem;
