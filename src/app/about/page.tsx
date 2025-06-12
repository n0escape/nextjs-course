import Image from 'next/image';
import {FC} from 'react'
import myImage from '@/app/about/myImg.jpg'
import styles from "./about.module.css"

type AboutPageProps = {}
const AboutPage:FC<AboutPageProps> = ({}) => {
    return (
        <article className={styles.root}>
            <Image src={myImage}
                alt='Dmytro Zavadovskyi Photo'
                title='Dmytro Zavadovskyi'
                loading='eager'
                width={300}
                height={350}
            />
            <div className={''}>
                Dmytro Zavadovskyi is a Front-end developer currently living in
                Ukraine, Kharkiv, where he studying and gaining experience in crafting
                web applications. Outside of coding, he finds his rest in
                the pages of books, computer games and music.
                Experienced in JavaScript, TypeScript, React, and Next, Dmitro is
                always eager to learn and grow in his field.
                Using his knowledge and skills, Dmitro created various projects
                that showcase his passion for coding and problem-solving.
            </div>
        </article>
    )
};

export default AboutPage;


