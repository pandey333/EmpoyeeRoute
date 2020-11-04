import React from 'react';
import {useParams} from 'react-router-dom';

export default function View(){
    const {id} = useParams();
    const list = JSON.parse(localStorage.getItem('list'));
    const emp = list.find(em => em.id === +id);
    return (
        <div>
            ID : {emp.id} <br/>
            Name : {emp.name} <br/>
            Age : {emp.age} <br/>
            Salary : {emp.salary} <br/>
        </div>
    );
} 