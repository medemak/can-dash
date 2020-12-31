import React from 'react'

/* 

Score component will store the database entries for the 5 scores
Their labels and max values!

*/
class Score extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentCallback: this.props.parentCallback
        }
    }
    scores = []
    getScores() {
        fetch('http://localhost:3001/scores')
          .then(response => {
            return response.text();
          })
          .then(data => {
            this.scores = JSON.parse(data)
            this.state.parentCallback(this.scores)
          }); 
      }

      componentDidMount() {
        this.getScores()
      }
      
      render() {
        return null
      }
    
}

export default Score;