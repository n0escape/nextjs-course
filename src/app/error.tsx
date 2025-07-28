'use client';
import { ERRORS } from './errors';

const HomePageError = ({error}: {error: string}) => {

    if(error === ERRORS.NOT_FOUND) return <>Articles not found</>
    return (
        <>
            Sorry something broken
        </>
    )
};

export default HomePageError;
