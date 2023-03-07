import { Wrapper } from '../../../components/Popper';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import stytes from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(stytes);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('menu-poper')}>{renderItems()}</Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
