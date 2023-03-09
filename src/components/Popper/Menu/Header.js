import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stytes from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(stytes);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
