import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



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
            <div className="student">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h2>{this.state.name}</h2> 
                            <img src="https://via.placeholder.com/300" alt="Chart Placeholder" width="80%"/>
                            <p>
                                Student ID: {this.state.id} <br />
                                Grade:{this.state.grade} <br />
                                Period: {this.state.period}
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h3>Scores</h3>
                            <ul>
                                <li>scores here</li>
                            </ul>

                            <h3>Can Do</h3>
                            <ul>
                                <li>sexy time</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid xs={4}>
                        <Paper>
                            <h3>Recommendations</h3>
                            <ul>
                                <li>List</li>
                            </ul>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}
export default Student;