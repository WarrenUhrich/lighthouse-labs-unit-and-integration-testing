import {useEffect} from 'react';
import { pickWinningOption, pickRandomOption } from '../../helpers';

export default function Computer(props) {
    return (
        <section className="computer">
            <p>
                <div className="avatar" onClick={() => props.setCheating(prev => !prev)}>
                    {props.cheating ? '🤖' : '💻'}
                </div>
                END OF LINE.
            </p>
            <ul className="choices">
                <li>
                    {props.computerChoice.choice === '🗿'  ? '🗿'  : '❔'}
                </li>
                <li>
                    {props.computerChoice.choice ===  '🌳' ?  '🌳' : '❔'}
                </li>
                <li>
                    {props.computerChoice.choice === '🪓' ? '🪓' : '❔'}
                </li>
            </ul>
        </section>
    );
}
