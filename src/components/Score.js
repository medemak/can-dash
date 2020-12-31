import React from 'react'

/* 

Score component will store the database entries for the 5 scores
Their labels and max values!

*/
class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentCallback: this.props.parentCallback()
        }
    }
    scores = []
    getScores() {
        fetch('http://localhost:3001/scores')
          .then(response => {
            return response.text();
          })
          .then(data => {
            this.scores = data
            this.state.parentCallback(data)
          }); 
      }

      componentDidMount() {
        this.getScores()
        console.log(this.scores)
      }
      
      render() {
          return this.scores.length > 0 ? [JSON.parse(this.scores)] : []
      }
    
}

export default Score;