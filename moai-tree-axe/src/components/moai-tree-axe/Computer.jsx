import {useEffect} from 'react';
import { pickWinningOption, pickRandomOption } from '../../helpers';

export default function Computer(props) {
    useEffect(() => {
        if(props.playerChoice.choice) {
            if(props.cheating) {
                const pcChoice = pickWinningOption(props.playerChoice.choice);
                props.setComputerChoice(prev => ({...prev, choice: pcChoice}));
            } else {
                const pcChoice = pickRandomOption();
                props.setComputerChoice(prev => ({...prev, choice: pcChoice}));
            }
        }
    }, [props.playerChoice.choice]);
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
