import path from "path";
import fs from "fs";

export default function ProductDetail(props: any) {
    const {loadedProduct} = props;
    return (
        <>
            <h1> {loadedProduct?.title} </h1>
            <p> {loadedProduct?.description} </p>

        </>
    )
}

// this context gas power to access routing data and etc
// this dynamic page should render dynamically
// if we have 3 -> we need 3 pages
// if getStaticPaths ->  fallback='blocking' this will run again you have to null handle here


function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = fs.readFileSync(filePath).toString();
    return JSON.parse(jsonData);
}

export async function getStaticProps(context: any) {
    const {params} = context
    const productId = params.pid;

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    let jsonData = fs.readFileSync(filePath).toString();

    console.log(jsonData);
    if (!jsonData) {
        return {
            props: {
                loadedProduct: {}
            }
        }
    }
    const data = JSON.parse(jsonData).products
    const loadedProduct = data.find((p: any) => p.id === productId);

    if (!loadedProduct) {
        return {
            notFound: true

        }
    }


    return {
        props: {
            loadedProduct: loadedProduct ?? {}
        },
    }


}

// to tell next.js that this dynamic should regenerate 3 time
export async function getStaticPaths() {

    const data = await getData();

    const ids = data.products.map((product: any) => product.id);
    const pathsWithParams = ids.map((id: any) => ({params: {pid: id}}));

    return {
        paths: pathsWithParams,
        fallback: true,
    };

    // return {
    //     paths: [
    //         {params: {pid: 'p1'}},
    //        // {params: {pid: 'p2'}},
    //        // {params: {pid: 'p3'}},
    //     ],
    //     // if we have lot of pages it takes time -> 100,000,000 :)
    //     // this fallback we do not need to load all it enough of have 1
    //     //fallback: 'blocking' -> this will block page till the data is load
    //     fallback: true
    // }
}