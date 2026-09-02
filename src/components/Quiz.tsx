import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';

export function Quiz({ questions }: { questions: Question[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleOptionClick = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === questions[currentIndex].correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="p-10 bg-white rounded-lg shadow-sm text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Simulado Concluído!</h2>
        <p className="text-2xl text-gray-600 mb-8">Sua pontuação final: <span className="font-bold text-green-600">{score}</span> de {questions.length}</p>
        <button onClick={handleRestart} className="flex items-center mx-auto px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors">
          <RotateCcw className="mr-2" /> Refazer Simulado
        </button>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="p-6 md:p-10 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Questão {currentIndex + 1} de {questions.length}</span>
        <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Acertos: {score}</span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">{q.text}</h3>
      
      <div className="space-y-4">
        {q.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === q.correctAnswerIndex;
          let btnClass = "w-full text-left p-5 rounded-md border-2 transition-all duration-200 ";

          if (!showExplanation) {
            btnClass += "border-gray-200 hover:bg-gray-50 hover:border-green-400";
          } else {
            if (isCorrect) btnClass += "bg-green-50 border-green-500 text-green-900 font-medium";
            else if (isSelected) btnClass += "bg-red-50 border-red-500 text-red-900";
            else btnClass += "border-gray-200 opacity-60";
          }

          return (
            <button key={idx} onClick={() => handleOptionClick(idx)} className={btnClass} disabled={showExplanation}>
              <div className="flex justify-between items-center gap-4">
                <span className="leading-relaxed">{opt}</span>
                {showExplanation && isCorrect && <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />}
                {showExplanation && isSelected && !isCorrect && <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>
      
      {showExplanation && (
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg animate-in fade-in slide-in-from-bottom-2">
          <h4 className="font-bold text-blue-900 mb-2 uppercase text-sm tracking-wider">Explicação do Gabarito</h4>
          <p className="text-blue-800 text-base leading-relaxed">{q.explanation}</p>
          <div className="mt-6 flex justify-end">
            <button onClick={handleNext} className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">
              {currentIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado Final'} <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
