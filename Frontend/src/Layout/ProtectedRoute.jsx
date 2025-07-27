import React ,{useEffect,useState} from 

const ProtectedRoute = ({childern,condition,redirect}) =>{
    const navigate = useNavigate();

    const [isvalid,setIsvalid] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("authToken");

        if(!token){
            navigate("/login")
        }

        const
    })
}