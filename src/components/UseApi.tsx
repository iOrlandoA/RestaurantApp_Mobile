import { useEffect,useState } from "react";
import axios from 'axios';
import { refresh } from "ionicons/icons";

function UseApi(url: any){
    const [data, setData]= useState<any>(null);
    const [loading, setLoading]=useState(false);
    const [error, setError]= useState(null);
    
    useEffect(()=>{
        const config= {
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }

        };
        setLoading(true);
        axios
            .get(url, config)
            .then((response)=>{ setData(response.data); })
            .catch((err)=>{setError(err);})
            .finally(()=>{setLoading(false);});
    },[url])
    
    const refetch= ()=>{
        const config= {
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }

        };
        setLoading(true);
        axios
            .get(url, config)
            .then((response)=>{ setData(response.data); })
            .catch((err)=>{setError(err);})
            .finally(()=>{setLoading(false);});
    };
    const post=(body:any )=>{
        const config= {
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
    
        };
        setLoading(true);
        axios
            .post(url, body, config)
            .then((response)=>{ setData(response.data); })
            .catch((err)=>{setError(err);})
            .finally(()=>{setLoading(false);});
        
        
    }



    const put=((path:any, body:any)=>{
        const config= {
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
    
        };
        setLoading(true);
        axios
            .put(`${url}/${path}`, body, config)
            .then((response)=>{ setData(response.data); })
            .catch((err)=>{setError(err);})
            .finally(()=>{setLoading(false);});
    });

    const remove =((path:any)=>{
        const config= {
            headers:{
                "Accept": "application/json",
                "Content-Type":"application/json"
            }
    
        };
        setLoading(true);
        axios
            .delete(`${url}/${path}`, config)
            .then((response)=>{ setData(response.data); })
            .catch((err)=>{setError(err);})
            .finally(()=>{setLoading(false);});
    });


    return{data,loading,error,refetch,post, put, remove};
}




 



export default UseApi;