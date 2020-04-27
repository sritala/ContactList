import React from 'react';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function() {
    const router = useRouter();

    return (
        <>
            <Link href={'/'} passHref>
                <Button disabled={router.pathname === '/'} component="a" color="primary">Home</Button>
            </Link>
            <Link href={'/FormPage'} passHref>
                <Button disabled={router.pathname === '/FormPage'} component="a" color="primary">
                    Form page
                </Button>
            </Link>
        </>
    )
}