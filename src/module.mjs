const messages = [
    "Que hay brou?",
    "Que pato cuak cuak?",
    "Metele nitro papá",
    "Somos hombres o somos payasos?",
    "Ponte trucha!"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

export default randomMsg;