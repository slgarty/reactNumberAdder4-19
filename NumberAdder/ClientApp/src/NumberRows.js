import React from 'react';


class NumberRows extends React.Component {


    render() {
        const { number, onSelectClick, onUnselectClick, isSelected, isLocked } = this.props;
        return (

            <tr >
                <td>{number.number}</td>
                <td><button className={`btn btn-${isSelected ? 'danger' : 'success'}`}
                    onClick={isSelected ? onUnselectClick : onSelectClick}
                    disabled={!!isLocked} >
                    {isSelected ? 'Unselect' : 'Select'}</button></td>
            </tr>
        );
    }
}

export default NumberRows;