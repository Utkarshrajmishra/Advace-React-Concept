import { useQuery, useMutation } from "react-query";

const Fetch=()=>{

    const {data, error, isLoading, isFetched}=useQuery({
        queryFn:()=>{
            return fetch("https://v2.jokeapi.dev/joke/Any?format=txt")
            .then((res)=> 
                {
                    console.log(res)
                     return res.text()} )
        },
        queryKey:['jokes'],
    });

    const 

    return(
        <>
        <div>
            {
                isLoading? <h1>Loading..</h1> : ""
            }
            {
                isFetched?<h1>Is Fetching</h1>:""
            }
            {
                data? <h1>{data}</h1> : ""
            }
        </div>
        </>
    )
}

export default Fetch;