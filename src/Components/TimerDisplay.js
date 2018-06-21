import React, {Component} from 'react';
import Hand from './Hand';

class TimerDisplay extends Component {
    render(){
        let seconds = this.props.ms / 1000;
        
        return (
            <div className='clock-face'>
                <Hand
                    rotate={this.props.rotate}
                />
                <div id='display'>
                    <table>
                        <tbody>
                            <tr>
                                <td id='hours'>
                                    {Math.floor(seconds / 3600)}hrs
                                </td>

                                <td id='minutes'>
                                    {Math.floor(seconds / 60) >= 60 ?
                                    seconds %= 60 :
                                    Math.floor(seconds / 60)}min
                                </td>

                                <td id='seconds'>
                                    {seconds >= 60 ?
                                        seconds %= 60 :
                                        seconds}sec
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
        )
    }
}

export default TimerDisplay;