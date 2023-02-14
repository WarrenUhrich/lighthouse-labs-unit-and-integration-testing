export default function Player(props) {
    return (
        <section className="player">
            <p>
                <div className="avatar">🧔</div>
                Your destiny is yours to choose:
            </p>
            <ul className="choices">
                <li tabIndex={0} onClick={() => { props.setPlayerChoice(prev=> ({...prev, choice: '🗿'})); }}>
                    {props.playerChoice.choice === '🗿' ? '✔' : ''}
                    🗿
                </li>
                <li tabIndex={0} onClick={() => { props.setPlayerChoice(prev=> ({...prev, choice: '🌳'})); }}>
                    {props.playerChoice.choice === '🌳' ? '✔' : ''}
                    🌳
                </li>
                <li tabIndex={0} onClick={() => { props.setPlayerChoice(prev=> ({...prev, choice: '🪓'})); }}>
                    {props.playerChoice.choice === '🪓' ? '✔' : ''}
                    🪓
                </li>
            </ul>
        </section>
    );
}
