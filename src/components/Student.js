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
            id:'207254',
            name:'Harry Potter',
            grade:9,
            period:2,
            canDashScore:3
        };    
    }

    maxScores = {
        score1:500,
        score2:500,
        score3:2000,
        score4:35,
        score5:1
    }  

    scores = {
            // columns
            score1: 350,
            score2: 340,
            score3: 798,
            score4: 28,
            score5: 0

    }

    data = [
        {
            data: {
              score1: this.scores.score1 / this.maxScores.score1,
              score2:this.scores.score2 / this.maxScores.score2,
              score3: this.scores.score3 / this.maxScores.score3,
              score4: this.scores.score4 / this.maxScores.score4,
              score5: this.scores.score5 / this.maxScores.score5
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
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className='paper'>
                            <h2>{this.state.name}</h2> 
                            
                            <RadarChart
                                captions={this.captions}
                                data={this.data}
                                size={450}
                                options={this.options}
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
                                <li><strong>{this.captions.score1}</strong>: {this.scores.score1}</li>
                                <li><strong>{this.captions.score2}</strong>: {this.scores.score2}</li>
                                <li><strong>{this.captions.score3}</strong>: {this.scores.score3}</li>
                                <li><strong>{this.captions.score4}</strong>: {this.scores.score4}</li>
                                <li><strong>{this.captions.score5}</strong>: {this.scores.score5}</li>
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