import Link from 'next/link';
import {FC, ReactNode} from 'react'
import styles from './app-link.module.css'
import { UrlObject } from 'url';

type AppLinkProps = {
    children: ReactNode,
    href: string | UrlObject
}
const AppLink: FC<AppLinkProps> = ({children, href}) => {
    return (
        <Link href={href} className={styles.root}>
            {children}
        </Link>
    )
};

export default AppLink;
