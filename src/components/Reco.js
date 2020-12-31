import React from 'react'

class Reco extends React.Component {

    render() {
        let can

        if (this.props.candash >= 9) {
            can = (
                <li>Enrichment</li>
            )
        } else {
            can = (
                <li>Remediation</li>
            )
        }

        return (
            <ul>
                {can}
            </ul>
        )
    }
}
export default Reco