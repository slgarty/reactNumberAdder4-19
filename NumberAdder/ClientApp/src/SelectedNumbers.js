import React from 'react';

class SelectedNumbers extends React.Component {
    render() {

        const { number, onLockClick, onUnlockClick, isLocked } = this.props;
        return (          
                    <ul className="list-group">
                        <li className="list-group-item">{number.number}<
                            button className={`btn btn-${isLocked ? 'danger' : 'success'}`} 
                    onClick={isLocked ? onUnlockClick : onLockClick}>
                    {isLocked ? 'Unlock' : 'Lock'}
                        </button>
                        </li>                       
                    </ul>             
            )
    }

}
export default SelectedNumbers

