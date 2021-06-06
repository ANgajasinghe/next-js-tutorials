import {useRouter} from "next/router"

export default function SelectedClientProjectName() {
    
    const router = useRouter();

    console.log(router.query);


    return(<div>
        <h1> Selected client project </h1>
    </div>)

}