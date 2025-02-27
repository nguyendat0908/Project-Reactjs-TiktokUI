import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d8715d8cbdd6186d0f6c1f11847c6d0e~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&nonce=61113&refresh_token=f3a9fb36df5f41d2d66068db46405476&x-expires=1740556800&x-signature=dHxCDE%2FhWPyZoMDDlTpJNoQe%2B%2FQ%3D&idc=sg1&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474"
                alt="Hoaaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
