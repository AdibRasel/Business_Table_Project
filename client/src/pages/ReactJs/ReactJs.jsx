import React from 'react';

function ReactJs() {

    const Users = [
        {
            fullName:"Rasel Hossain Adib", 
            age: 23,
            Phone:[
                {home:"01934544352"},
                {office: "01626757897"},
                {anotheritem:{
                    name:"Test",
                    age:3423,
                    number:234234,
                }}
            ]
        },
        {
            fullName:"Rasel Hossain Adib", 
            age: 23,
            Phone:[
                {home:"Home number"},
                {office: "office number"},
                {anotheritem:{
                    name:"Test",
                    age:3423,
                    number:234234,
                }}
            ]
        }
    ]

    return (
        <div>
            
            <h1>Nested Lists Mapping</h1>
            
            {Users.map((Users, index) => <div key={index}>
                {Users.fullName}
                {Users.age}
                {Users.Phone.map((map, index)=> <p key={index}>
                    {map.home}
                    {map.office}
                </p>)}
            </div>
            )}

        </div>
    );
}

export default ReactJs;