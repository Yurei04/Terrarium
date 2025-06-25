"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TextPressure from "@/components/effects/textPressure";

const questions = [
    {
        id: 1,
        question: "Can pee help jellyfish sting?",
        answer: "no",
        image: "",
        ansDes: "No, pee cannot help a jellyfish sting—it will only make it worse."
    },
    {
        id: 2,
        question: "Can pee help jellyfish sting?",
        answer: "no",
        image: "",
        ansDes: "No, pee cannot help a jellyfish sting—it will only make it worse."
    }
];

export default function MythOrMedicine () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [gameStart, setGameStart] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [score, setScore] = useState(0);
    const current = questions[currentIndex];

    useEffect(() => {
        if (!gameStart || showFeedback) return;

        if (timeLeft === 0) {
            handleAnswer(null);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, gameStart,  showFeedback]);


    const startGame = () => {
        setTimeLeft(10);
        setGameStart(true);
    };

    const stopGame = () => {
        setTimeLeft(10);
        setGameStart(false);
    };

    const handleAnswer = (answer) => {
        if (!gameStart)  return;
        const isCorrect = answer === current.answer;
        if (isCorrect)setScore(prev => prev + 1);

        setSelectedAnswer(answer);
        setShowFeedback(true);

        setTimeout(() => {
            setShowFeedback(false);
            setSelectedAnswer(null);
            setTimeLeft(10);

            if(currentIndex < questions.length -1 ) {
                setCurrentIndex(prev => prev + 1);
            } else {
                alert(`Game over! Final score: ${score + (isCorrect ? 1 : 0)}`);
                setGameStart(false)
                setCurrentIndex(0);
                setScore(0);
            }
        },2000);
    };

    return (
        <div className="w-full min-h-screen p-0 m-0 overflow-x-hidden flex flex-col" id="game">
            <div className="flex flex-col w-full m-5 items-center justify-center  gap-5">
                <div style={{position: 'relative', height: '150px'}}>
                    <TextPressure
                        text="Myth_Or_Medicine"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={100}
                    />
                </div>
                <div className="text-sm text-white">Time Left: {timeLeft}</div>    
                <div className="w-[500px] h-[300px] flex flex-row bg-white rounded-2xl" id="imgBox">
                    {current.image && <img src={current.image} alt="question" className="w-64 h-40 object-cover mx-auto mb-4" />}
                </div>
                <div className=""> 
                    <p className="text-sm text-white">Question: {current.question}</p>
                </div>
                {showFeedback && (
                <div className="text-md mt-2">
                    {selectedAnswer === current.answer ? (
                        <p className="text-md mt-2 text-green-400">Correct!</p>
                    ) : (
                        <p className="text-md mt-2 text-red-400">Wrong!</p>
                    )
                }
                <p className="mt-1 text-white">{current.ansDes}</p>

                </div>
                )}
                <div className="flex flex-row items-center justify-center gap-3">
                    {!gameStart && (
                    <Button
                        variant="outline"
                        onClick={startGame}
                        className="bg-blue-500 border-none"
                    >
                        Start
                    </Button>
                    )}

                    <Button 
                    variant="outline" 
                    onClick={() => handleAnswer("yes")}
                    disabled={showFeedback}
                    className="bg-green-400 border-none">TRUE</Button>
                    <Button 
                    variant="outline" 
                    onClick={() => handleAnswer("no")}
                    disabled={showFeedback}
                    className="bg-red-400 border-none">FALSE</Button>
                    <Button
                        variant="outline"
                        onClick={stopGame}
                        className="bg-red-500 border-none"
                    >
                        Stop
                    </Button>
                </div>
            </div>


        </div>
    );
}