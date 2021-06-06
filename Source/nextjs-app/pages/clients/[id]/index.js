import {useRouter} from 'next/router'

export default function ClientProjectsPage(){

    const router = useRouter(); 

    function loadProjectHandler(){
        // load Data
        router.push('./A');
    }

    return (
        <div>
            <h1>
                The projects of a given client
            </h1>
           
           // navigate using button
           <button onClick={loadProjectHandler}> Click to navigate </button>
        </div>
    )
}