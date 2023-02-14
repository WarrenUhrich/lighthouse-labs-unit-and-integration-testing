import {getResult} from '../../helpers';
import {useState, useEffect} from 'react';

export default function Footer(props) {
    const [result, setResult] = useState();

    useEffect(() => {
        if(props.playerChoice.choice && props.computerChoice.choice) {
            const res = getResult(props.playerChoice.choice, props.computerChoice.choice);
            setResult(res);
        }
    }, [props.computerChoice.choice]);

    return (
        <footer>
            <p>
                {result ? result : 'Waiting for a choice...'}
            </p>
        </footer>
    );
}
