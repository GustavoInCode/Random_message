import React, { useState } from 'react';

const mensagens = [
    "Hoje é um ótimo dia!",
    "Você está indo muito bem!",
    "A vida é cheia de surpresas!",
    "Continue assim!",
    "Cada dia é uma nova oportunidade!"
];

function App() {
    const [randomMessage, setRandomMessage] = useState('');

    const generateRandom = () => {
        const message = mensagens[Math.floor(Math.random() * mensagens.length)];
        setRandomMessage(message);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Receba uma mensagem aleatória</h1>
            <p>{randomMessage}</p>
            <button onClick={generateRandom}>Mensagem Aleatória</button>
        </div>
    );
}

export default App;
