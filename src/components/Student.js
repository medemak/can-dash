import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Radar Chart example
// https://www.npmjs.com/package/react-svg-radar-chart
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'


class Student extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.studentid,
            name:'Harry Potter',
            grade:9,
            period:2,
            canDashScore:3
        };    
    }

    student = this.props.students[0]

    maxScores = {
        // maximum scores for each test
        score1:500,
        score2:10,
        score3:1600,
        score4:35,
        score5:1
    }  

    data = [
        {
            data: {
              score1: this.student["score1"] / this.maxScores.score1,
              score2: this.student["score2"] / this.maxScores.score2,
              score3: this.student["score3"] / this.maxScores.score3,
              score4: this.student["score4"] / this.maxScores.score4,
              score5: this.student["score5"] / this.maxScores.score5
            },
            meta: { color: 'blue' }
          }
    ];

   

    captions = {
        // columns
        score1: 'FSA-R',
        score2: 'FSA-W',
        score3: 'SAT',
        score4: 'ACT',
        score5: 'N/A'
      };

    options = {
        scales: 5, // show scale circles?
        captionProps: () => ({
            className: 'caption',
            textAnchor: 'middle',
            fontSize: 16,
            fontFamily: 'sans-serif'
        }),
      }

    render() {
        return (
            <div className="student">
                <nav>
                    <button name="db" onClick={(e) => this.props.clicklist(e)}>Return to list</button>
                </nav>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h2>{this.student["firstname"]} {this.student["lastname"] }</h2> 
                            
                            <RadarChart
                                captions={this.captions}
                                data={this.data}
                                size={450}
                                options={this.options}
                            />
                            <p>
                                Student ID: {this.student["studentid"]} <br />
                                CanDash Score: {this.student["candash"]}
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h3>Scores</h3>
                            <ul>
                                <li><strong>{this.captions.score1}</strong>: {this.student["score1"]}</li>
                                <li><strong>{this.captions.score2}</strong>: {this.student["score2"]}</li>
                                <li><strong>{this.captions.score3}</strong>: {this.student["score3"]}</li>
                                <li><strong>{this.captions.score4}</strong>: {this.student["score4"]}</li>
                                <li><strong>{this.captions.score5}</strong>: {this.student["score5"]}</li>
                            </ul>

                            <h3>Can Do</h3>
                            <ul>
                                <li>write name</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="paper">
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