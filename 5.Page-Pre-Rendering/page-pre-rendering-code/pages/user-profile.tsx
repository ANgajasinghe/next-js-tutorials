export default function UserProfilePage(props: any) {
    return <h1> {props.username} </h1>
}

// this function will call for every incoming req
// this will be SSR -> server side rendering
export async function getServerSideProps(context: any) {

    const {params, req , res} = context;

    // we can write server side code here
    // there is no getStaticPaths
    console.log(res,req)
    return {
        props:{
            username: 'akalanka'
        }
    }

    // https://swr.vercel.app/ alternative for axios
}
