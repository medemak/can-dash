import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Radar Chart example
// https://www.npmjs.com/package/react-svg-radar-chart
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


class Student extends React.Component {
    data = [
        {
            data: {
              battery: 0.7,git-
              design: .8,
              useful: 0.9,
              speed: 0.67,
              weight: 0.8
            },
            meta: { color: 'blue' }
          }
    ];

    captions = {
        // columns
        battery: 'Battery Capacity',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
        weight: 'Weight'
      };

    
    constructor(props) {
        super(props);
        this.state = {
            id:'207254',
            name:'Harry Potter',
            grade:9,
            period:2,
            canDashScore:3
        };    
    }

    render() {
        return (
            <div className="student">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h2>{this.state.name}</h2> 
                            
                            <RadarChart
                                captions={this.captions}
                                data={this.data}
                                size={450}
                            />
                            <p>
                                Student ID: {this.state.id} <br />
                                Grade:{this.state.grade} <br />
                                Period: {this.state.period}<br />
                                CanDash Score: {this.state.canDashScore}
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
                                <li>write name</li>
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