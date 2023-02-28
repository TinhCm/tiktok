import classNames from 'classnames/bind';
import stytes from '../Header/Header.mudule.scss';

const cx = classNames.bind(stytes);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
