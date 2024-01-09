import React from 'react'
import Head from 'next/head'

const PageHead = ({ name }) => {
    return (
        <Head>
            <title>{name} - Wearart</title>
            <meta name="description" content="Wearart! powered by gvtechnolab" />
            <link rel="icon" href="/wearart.svg" />
        </Head>
    )
}

export default PageHead
