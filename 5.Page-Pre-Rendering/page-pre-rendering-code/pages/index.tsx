import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

// == this will split by next.js as server code == ;
import fs from 'fs';
import path from 'path';

export default function HomePage(props: any) {

    const {products} = props;

    return (
        // This will automatically pre-render by the next js

        <ul>
            {products?.map((p: any) => (
                <li key={p.id}>
                <Link href={`/${p.id}`}>
                    {p.title}
                </Link>

                </li>
            ))}
        </ul>

    )
}

// this will prepares props for this file.
// this will executed first.
// this function never executed at the browser.
// this function has server side capability.
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do

// https://nextjs.org/docs/basic-features/data-fetching

export async function getStaticProps(context: any) {

    // here we can add server side codes rg:- file-system
    // process.cwd() -> give current working directory, this will be the root

    // this is only for static pre-rendering only we cannot update data here when build
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    let jsonData = await fs.readFileSync(filePath).toString();
    const data = JSON.parse(jsonData).products

    if (data?.products?.length == 0) {
        return {notFound: true};
    }

    // SO CAN"T WE UPDATE DATA ??
    // next.js offer will offer another way -?> Incremental Static Generation
    // this will iterative process process
    console.log(jsonData);
    return {
        props: {
            products: data
        },
        // this static generation will regenerate with 120 seconds.
        // this will help full in the production (IRS)
        revalidate: 120,
        // this will show 404 page
        notFound: false,
        // send redirect to another page
        // redirect:'/no-data',
    }
}



