import { useState, useEffect } from "react";

export const Tragamonedas = () => {
    const [results, setResults] = useState({
        emoji1: '?',
        emoji2: '?',
        emoji3: '?'
    });

    useEffect(() => {
        const emojis = ["😓", "👽", "🥳", "❤️", "💩", "👾", "🍉"];
        function obtenerEmojiAleatorio() {
            const index = Math.floor(Math.random() * emojis.length);
            return emojis[index];
        }

        console.log('useEffect');
        setResults({
            emoji1: obtenerEmojiAleatorio(),
            emoji2: obtenerEmojiAleatorio(),
            emoji3: obtenerEmojiAleatorio()
        })
    }, []);

    return (
        <>
            <div className="container">
                <span>{results.emoji1}</span>
                <span>{results.emoji2}</span>
                <span>{results.emoji3}</span>
            </div>
        </>
    )
}