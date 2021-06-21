import useSWR from "swr";
import {useEffect, useState} from "react";

export default function Course() {

    const [courses, setCourses] = useState<any[]>();
    const { data, error } = useSWR('https://localhost:5001/api/Courses');

    useEffect(() => {
        if (data) {
            setCourses(data)
        }
    }, [data]);

    return(
        <div>
            {courses?.map((x)=>(<div key={x.id}> {x.title} </div>))}
        </div>
    )
}