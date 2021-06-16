import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// == this will split by next.js as server code == ;
import fs from 'fs';
import path from 'path';

export default function HomePage(props: any) {

    const {products} = props;

    return (
        // This will automatically pre-render by the next js

        <ul>
            {products?.map((p: any) => (
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>

    )
}

// this will prepares props for this file.
// this will executed first.
// this function never executed at the browser.
// this function has server side capability.
// this will execute with build page
export async function getStaticProps() {

    // here we can add server side codes rg:- file-system
    // process.cwd() -> give current working directory, this will be the root

    // this is only for static pre-rendering only we cannot update data here when build
    const filePath = path.join(process.cwd(),'data','dummy-backend.json');
    let jsonData = fs.readFileSync(filePath).toString();

    // SO CAN"T WE UPDATE DATA ??
    // next.js offer will offer another way -?> Incremental Static Generation
    // this will iterative process process
    console.log(jsonData);
    return {
        props: {
            products: JSON.parse(jsonData).products
        },
        // this static generation will regenerate with 120 seconds.
        // this will help full in the production (IRS)
        revalidate: 120
    }
}



