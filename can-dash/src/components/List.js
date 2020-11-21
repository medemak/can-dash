import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };    
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table className='table' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Period</TableCell>
                            <TableCell>SAT</TableCell>
                            <TableCell>ACT</TableCell>
                            <TableCell>FSA</TableCell>
                            <TableCell>Another</TableCell>
                            <TableCell>1 More</TableCell>
                            <TableCell>CanDash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Harry</TableCell>
                            <TableCell>Potter</TableCell>
                            <TableCell>9</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>550</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>1200</TableCell>
                            <TableCell>323</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Harry</TableCell>
                            <TableCell>Potter</TableCell>
                            <TableCell>9</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>550</TableCell>
                            <TableCell>200</TableCell>
                            <TableCell>1200</TableCell>
                            <TableCell>323</TableCell>
                            <TableCell>3</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
export default List;