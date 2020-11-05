import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Table() {
    const head = ["Id", "Name", "Age", "Salary", "Action"];
    const list = JSON.parse(localStorage.getItem('list'));
    const history = useHistory();

    return (
        <table>
            <thead>
                <tr>
                    {head.map(item => <th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {list.map(emp => {
                    return (
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                            <td><Block id = {emp.id} history = {history} /></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

function Block({history, id}) {
    return (
        <>
            <button
                onClick = {()=> {
                        history.push("/view/"+id);
                }}
            >View</button>
            <button
                onClick = {()=> {
                        history.push("/update/"+id);
                }}
            >Update</button>
            <button
                onClick = {()=> {
                    let list = JSON.parse(localStorage.getItem('list'));
                    list = list.filter(emp => emp.id !== id);
                    localStorage.setItem('list', JSON.stringify(list));
                    history.push('/');
                }}
            >Delete</button>
        </>
    );
}