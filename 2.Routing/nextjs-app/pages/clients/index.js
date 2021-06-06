import Link from "next/link";

export default  function ClientPage(){
    return(
        <div>
            <h1> The Client Page </h1>

            <ul>
                <li> <Link href="/clients/AG"> Akalanka Gajasinghe </Link> </li>

                {/* Alternative way to build links */}
                <li> <Link href={{
                    pathname: '/clients/[id]',
                    query: {id: 'saman'}
                }}> Saman Kumara </Link> </li>


                <li> <Link href="/clients/Kumara"> Kuamara Saman </Link> </li>
            </ul>
        </div>
    )
}