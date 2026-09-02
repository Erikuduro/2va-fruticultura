import React, { useState } from 'react';
import { BookOpen, CheckSquare, Sprout } from 'lucide-react';
import { StudyMaterial } from './components/StudyMaterial';
import { Quiz } from './components/Quiz';
import { maracujaData } from './data/maracuja';
import { abacaxiData } from './data/abacaxi';
import { mamaoData } from './data/mamao';

const crops = [
  { id: 'maracuja', name: 'Maracujá', data: maracujaData },
  { id: 'abacaxi', name: 'Abacaxi', data: abacaxiData },
  { id: 'mamao', name: 'Mamão', data: mamaoData }
];

export default function App() {
  const [selectedCrop, setSelectedCrop] = useState(crops[0].id);
  // Simulado como aba inicial conforme solicitado
  const [activeTab, setActiveTab] = useState<'material' | 'simulado'>('simulado');

  const currentCrop = crops.find(c => c.id === selectedCrop)!;

  return (
    <div className="h-screen bg-gray-100 flex flex-col lg:flex-row font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-full lg:w-72 bg-green-900 text-white shadow-xl flex-shrink-0 flex flex-col">
        <div className="p-4 lg:p-8 flex-shrink-0">
          <h1 className="text-xl lg:text-2xl font-bold flex items-center gap-2 lg:gap-3">
            <Sprout className="w-6 h-6 lg:w-8 lg:h-8 text-green-400" /> 
            Fruticultura
          </h1>
          <p className="text-green-300 text-xs lg:text-sm mt-1 lg:mt-2 font-medium tracking-wide">PLATAFORMA DE ESTUDOS</p>
        </div>
        <nav className="flex flex-row lg:flex-col gap-2 px-4 pb-4 lg:pb-8 overflow-x-auto lg:overflow-y-auto no-scrollbar">
          {crops.map(crop => (
            <button
              key={crop.id}
              onClick={() => {
                setSelectedCrop(crop.id);
                setActiveTab('simulado'); // Reseta para simulado ao trocar
              }}
              className={`whitespace-nowrap flex-shrink-0 text-center lg:text-left px-5 lg:px-6 py-2.5 lg:py-4 rounded-lg font-medium transition-all duration-200 ${
                selectedCrop === crop.id 
                  ? 'bg-green-800 text-green-100 shadow-inner' 
                  : 'hover:bg-green-800/50 text-green-100/70'
              }`}
            >
              {crop.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-0 bg-gray-50 relative">
        {/* Top Navbar */}
        <div className="bg-white border-b px-4 lg:px-6 py-3 lg:py-4 flex gap-2 lg:gap-4 shadow-sm z-10 overflow-x-auto flex-shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab('simulado')}
            className={`flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
              activeTab === 'simulado' 
                ? 'bg-green-100 text-green-800' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <CheckSquare className="w-4 h-4 lg:w-5 lg:h-5" /> Simulado Dinâmico
          </button>
          <button
            onClick={() => setActiveTab('material')}
            className={`flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
              activeTab === 'material' 
                ? 'bg-green-100 text-green-800' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-4 h-4 lg:w-5 lg:h-5" /> Material de Revisão
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {activeTab === 'material' ? (
              <StudyMaterial content={currentCrop.data.content} />
            ) : (
              <Quiz questions={currentCrop.data.quiz} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
