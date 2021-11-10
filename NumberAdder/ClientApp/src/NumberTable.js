import React from 'react';
import NumberRows from './NumberRows';
import { produce } from 'immer';
import SelectedNumbers from './SelectedNumbers';

let numberId = 0;
class NumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []

    }

    onNumberSelectClick = (num) => {
        const nextState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(num);
        });

        this.setState(nextState);
    }
    isNumberSelected = number => {
        const found = this.state.selectedNumbers.find(n => n.id === number.id);
        return !!found;
    }
    onNumberUnselectClick = number => {
        const filtered = this.state.selectedNumbers.filter(n => n.id !== number.id);
        this.setState({ selectedNumbers: filtered });
    }
    isNumberLocked = number => {
        const found = this.state.lockedNumbers.find(n => n.id === number.id);
        return !!found;
    }
    onNumberLockClick = (num) => {
        const nextState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(num);
        }); this.setState(nextState);
    }

    onNumberUnlockClick = number => {
        const filtered = this.state.lockedNumbers.filter(n => n.id !== number.id);
        this.setState({ lockedNumbers: filtered });
    }



    onAddClick = () => {
        numberId++;
        const number = { number: Math.floor(Math.random() * 100), id: numberId };
        const nextState = produce(this.state, draftState => {
            draftState.numbers.push(number);
        });
        this.setState(nextState);
    }

    render() {

        return (<div className="container" style={{ marginTop: 60 }}>
            <div className="row">
                <div className="col-md-4">
                    <button className="btn btn-success btn-lg btn-block" onClick={this.onAddClick}>Add
                        </button>
                </div>
            </div>
            <div className="col-md-12">
                <table className="table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Select/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((n, i) => {
                            return <NumberRows key={i}
                                number={n}
                                onSelectClick={() => this.onNumberSelectClick(n)}
                                onUnselectClick={() => this.onNumberUnselectClick(n)}
                                isSelected={this.isNumberSelected(n)}
                                isLocked={this.isNumberLocked(n)}
                            />
                        })}
                    </tbody>
                </table>
                <div className="row jumbotron">
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers </h3>
                        {this.state.selectedNumbers.map((n, i) => {
                            return <SelectedNumbers key={i}
                                number={n}
                                onLockClick={() => this.onNumberLockClick(n)}
                                onUnlockClick={() => this.onNumberUnlockClick(n)}
                                isLocked={this.isNumberLocked(n)}
                            />
                        })}
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default NumberTable;