export default function Player() {
    return (
        <section className="player">
            <p>
                <div className="avatar">🧔</div>
                Your destiny is yours to choose:
            </p>
            <ul className="choices">
                <li tabIndex={0}>🗿</li>
                <li tabIndex={0}>🌳</li>
                <li tabIndex={0}>🪓</li>
            </ul>
        </section>
    );
}
