import Button from '../../Button';
import classNames from 'classnames/bind';
import stytes from './Menu.module.scss';
const cx = classNames.bind(stytes);

function MenuItem({ data, className, onClick }) {
    return (
        <Button className={cx('menu-item', className)} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
