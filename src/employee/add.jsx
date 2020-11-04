import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function AddEmployee() {
    const [name, setName] = useState(""),
            [age, setAge] = useState(18),
            [salary, setSalary] = useState(500000);
    const history = useHistory();

    return (
        <div>
            Name : <input
                type = 'text'
                value = {name}
                onChange = {(e)=>{
                    setName(e.target.value);
                }}
            /><br/><br/>

            Age : <input
                type = 'number'
                value = {age}
                onChange = {(e)=>{
                    setAge(e.target.value);
                }}
            /> <br/><br/>

            Salary : <input
                type = 'number'
                value = {salary}
                onChange = {(e)=>{
                    setSalary(e.target.value);
                }}
            /><br/><br/>

            <button
                onClick = {()=> {
                    const id = +localStorage.getItem('id');
                    const emp = {id, name, age, salary};
                    const list = JSON.parse(localStorage.getItem('list'));
                    localStorage.setItem('id', id + 1);
                    list.push(emp);
                    localStorage.setItem('list', JSON.stringify(list));
                    history.push('/');
                }}
            >Add Employee</button>
        </div>
    );
}