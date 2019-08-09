import React from 'react'

export default class TableViewer extends React.Component {
    rendertableContents(array) {
        return array.map((item, index) => 
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.company.name}</td>
            </tr>
            )
        }

    render() {
        if(this.props.data !== null) {
                const tableContents = this.rendertableContents(this.props.data)
                return (
                    <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                        </tr>
                        {tableContents}
                    </tbody>
                </table>
            )
        }
        else return null
    }
}