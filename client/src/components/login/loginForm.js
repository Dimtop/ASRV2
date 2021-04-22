import React, {useState} from 'react';
import { Input,Button, Alert} from 'rsuite';

//Styles
import '../../styles/main.style.css'

//Libraries
import Cookies from 'js-cookie';

export default function LoginForm(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    function login(){
        fetch("/api/users/login",{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:"post",
            body:JSON.stringify({
                username:username,
                password:password
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.error){
                Alert.error(res.error)
                return;
            }
            Cookies.set("auth",1);
            Cookies.set("userID",res.user._id);
            Cookies.set("userName",res.user.name);
            location.replace("/dashboard")
        })
    }

    return(
        <>
            <p className="label">Όνομα χρήστη</p>
            <Input onChange={value=>setUsername(value)}/>
            <p className="label">Κωδικός</p>
            <Input type="password" onChange={value=>setPassword(value)}/>
            <Button appearance="primary" onClick={()=>login()}>Σύνδεση</Button>
        </>
    )
}