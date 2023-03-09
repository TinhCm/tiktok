import Button from '../../Button';
import classNames from 'classnames/bind';
import stytes from './Menu.module.scss';
const cx = classNames.bind(stytes);

function MenuItem({ data, onClick }) {
    const clasess = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={cx(clasess)} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
