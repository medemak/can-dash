import React from 'react'

class CanDo extends React.Component {

    render() {
        let can

        if (this.props.candash >= 9) {
            can = (
                <li>High achiever</li>
            )
        } else {
            can = (
                <li>Low achiever</li>
            )
        }

        return (
            <ul>
                {can}
            </ul>
        )
    }
}
export default CanDo