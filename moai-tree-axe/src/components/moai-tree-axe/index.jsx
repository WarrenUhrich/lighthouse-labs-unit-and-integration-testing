import './moai-tree-axe.css';
import Header from './Header';
import Player from './Player';
import Computer from './Computer';
import Footer from './Footer';
import {useEffect, useState} from 'react';

export default function MoaiAxeTree() {
    const [playerChoice, setPlayerChoice] = useState({choice: undefined});
    const [computerChoice, setComputerChoice] = useState({choice: undefined});
    const [cheating, setCheating] = useState(false);
    const [result, setResult] = useState();

    return (
        <main id="moai-tree-axe">
            <Header />
            <Player
                playerChoice={playerChoice}
                setPlayerChoice={setPlayerChoice}
            />
            <Computer
                computerChoice={computerChoice}
                setComputerChoice={setComputerChoice}
                cheating={cheating}
                setCheating={setCheating}
                playerChoice={playerChoice}
            />
            <Footer
                result={result}
            />
        </main>
    );
}
