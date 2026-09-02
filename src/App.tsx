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
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row font-sans">
      {/* Sidebar */}
      <div className="w-full lg:w-72 bg-green-900 text-white shadow-xl flex-shrink-0">
        <div className="p-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <Sprout className="w-8 h-8 text-green-400" /> 
            Fruticultura
          </h1>
          <p className="text-green-300 text-sm mt-2 font-medium tracking-wide">PLATAFORMA DE ESTUDOS</p>
        </div>
        <nav className="mt-4 flex flex-col gap-1 px-4">
          {crops.map(crop => (
            <button
              key={crop.id}
              onClick={() => {
                setSelectedCrop(crop.id);
                setActiveTab('simulado'); // Reseta para simulado ao trocar
              }}
              className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
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
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <div className="bg-white border-b px-6 py-4 flex gap-4 shadow-sm z-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('simulado')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
              activeTab === 'simulado' 
                ? 'bg-green-100 text-green-800' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <CheckSquare className="w-5 h-5" /> Simulado Dinâmico
          </button>
          <button
            onClick={() => setActiveTab('material')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-md transition-colors font-medium text-sm whitespace-nowrap ${
              activeTab === 'material' 
                ? 'bg-green-100 text-green-800' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="w-5 h-5" /> Material de Revisão
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8 bg-gray-50">
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
