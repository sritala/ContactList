import React from 'react';
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function() {
    const router = useRouter();

    return (
        <>
            <Link href={'/'} passHref>
                <Button disabled={router.pathname === '/'} component="a" color="primary">
                    Home
                </Button>
            </Link>
            <Link href={'/Contacts'} passHref>
                <Button disabled={router.pathname === '/Contacts'} component="a" color="primary">
                   Contacts
                </Button>
            </Link>
            <Link href={'/AddContact'} passHref>
                <Button style={{marginLeft: 15}} disabled={router.pathname === '/AddContact'} component="a" color="primary">
                  Add Contact
                </Button>
            </Link>
        </>
    )
}