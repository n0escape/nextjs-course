import Link from 'next/link';
import {FC, ReactNode} from 'react'
import styles from './app-link.module.css'

type AppLinkProps = {
    children: ReactNode,
    href: string
}
const AppLink: FC<AppLinkProps> = ({children, href}) => {
    return (
        <Link href={href} className={styles.root}>
            {children}
        </Link>
    )
};

export default AppLink;
