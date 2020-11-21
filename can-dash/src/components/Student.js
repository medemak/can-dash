import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'207254',
            name:'Harry Potter',
            grade:9,
            period:2
        };    
    }

    render() {
        return (
            <div class="student">
                <h2>{this.state.name}</h2>
                <p>Student ID: {this.state.id} Grade:{this.state.grade} Period: {this.state.period}</p>
            </div>
        );
    }
}
export default Student;