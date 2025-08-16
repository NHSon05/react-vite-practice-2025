import { useEffect  } from "react";
import "./App.css"
import axios from "axios";

function AxiosTest() {
    
    useEffect(() => {

        axios
        .get("https://jsonplaceholder.typicode.com/comments",{
            transformResponse: [
                (data) => {
                    try {
                        const json = JSON.parse(data);
                        if (Array.isArray(json)) {
                            return json.map((item) => (
                                {
                                    id:  item.id,
                                    postName: item.name
                                }
                        ))
                        }
                        return json;
                    } catch (error) {
                        console.error("Lỗi khi parse JSON:" ,error);
                        return data;
                    }
                }
            ]
        })
        .then((res) => {
            console.log(res.data);  
        })
        .catch(console.error);
    }, [])
    

    return (
        <div>Check console.log để xem kết quả API</div>
    )
}

export default AxiosTest