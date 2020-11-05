import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

export default function Update(){
    debugger;
    const [name, setName] = useState(""),
            [age, setAge] = useState(""),
            [salary, setSalary] = useState("");

    const history = useHistory();
    const {id} = useParams();
    const list = JSON.parse(localStorage.getItem('list'));
    const emp = list.find(em => em.id === +id);
    const index = list.indexOf(emp);

    return (
        <div>
            Name : <input
                type = 'text'
                value = {name}
                placeholder = {emp.name}
                onChange = {(e)=>{
                    setName(e.target.value);
                }}
            /><br/><br/>

            Age : <input
                type = 'number'
                value = {age}
                placeholder = {emp.age}
                onChange = {(e)=>{
                    setAge(e.target.value);
                }}
            /> <br/><br/>

            Salary : <input
                type = 'number'
                value = {salary}
                placeholder = {emp.salary}
                onChange = {(e)=>{
                    setSalary(e.target.value);
                }}
            /><br/><br/>

            <button
                onClick = {()=> {
                    
                    const updatedEmp = {
                        id : +id, 
                        name : name ? name : emp.name, 
                        age : age ? age : emp.age, 
                        salary : salary ? salary : emp.salary,
                    };
                    
                    list[index] = updatedEmp;
                    
                    localStorage.setItem('list', JSON.stringify(list));
                    history.push('/');
                }}
            >Update Employee</button>
        </div>
    );
} 