export default function Footer(props) {
    return (
        <footer>
            <p>
                {props.result ? props.result : 'Waiting for a choice...'}
            </p>
        </footer>
    );
}
