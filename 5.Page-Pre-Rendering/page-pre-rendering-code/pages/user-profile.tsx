export default function UserProfilePage(props: any) {
    return <h1> {props.username} </h1>
}

// this function will call for every incoming req
// this will be SSR -> server side rendering
export async function getServerSideProps(context: any) {
    return {
        props:{
            username: 'akalanka'
        }
    }
}
