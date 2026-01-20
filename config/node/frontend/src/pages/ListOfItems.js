import React, {useEffect, useState} from "react";
import UserCard from "../components/UserCard";
function ListOfItems(props)
{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //"https://localhost:8000/app/get_users"
        fetch("http://localhost:10000/app/get_users")
        .then(res => res.json())
        .then(res => {console.log(res);
        setUsers(res.users);
    });
    }, []);
    useEffect(() => {}, [users]);

    

    return(
        <div>List of items
            <div style = {{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                {/*users?.map((user => <UserCard user={user}/>))*/}
                {users.data?.map((user => <UserCard user={user}/>))}
            </div>
        </div> 
    );
}

export default ListOfItems;