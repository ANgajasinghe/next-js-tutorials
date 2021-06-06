import { useRouter } from 'next/router'
 

export default function BlogPostsPage() {
    
    const router = useRouter();

    console.log(router.query);

    return(
        <div>
            <h1> The blog post </h1>
        </div>
    )
}