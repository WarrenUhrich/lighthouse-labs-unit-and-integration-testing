export default function Computer(props) {
    return (
        <section className="computer">
            <p>
                <span className="avatar" onClick={() => props.setCheating(prev => !prev)}>
                    {props.cheating ? '🤖' : '💻'}
                </span>
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
