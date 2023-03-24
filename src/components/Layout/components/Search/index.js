import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import classNames from 'classnames/bind';
import stytes from './Search.module.scss';
const cx = classNames.bind(stytes);

function Search() {
    const [searchValue, setSeachValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q= ${encodeURIComponent(searchValue)} &type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
            });
    }, [searchValue]);

    const handleHideResult = () => {
        setshowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-tilte')}>Accounts</h4>

                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSeachValue(e.target.value)}
                    onFocus={() => setshowResult(true)}
                />

                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={(e) => {
                            setSeachValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
