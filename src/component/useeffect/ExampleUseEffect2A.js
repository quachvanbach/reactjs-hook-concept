import React, {useEffect, useState} from 'react';

const ExampleUseEffect2A = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(user => {
                setUsers(user)
            })
    }, []);

    return (
        <ul><p><b>Ví dụ áp dụng trong trường hợp call API để lấy data:</b></p>
            {
                users.map(user => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: <a href="#">{user.email}</a></p>
                    </li>
                ))
            }
        </ul>
    );
};

export default ExampleUseEffect2A;