import React, { useState } from 'react';
import { BookOpen, CheckSquare, Sprout, Menu, X } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentCrop = crops.find(c => c.id === selectedCrop)!;

  return (
    <div className="h-screen bg-gray-100 flex flex-col font-sans overflow-hidden">
      {/* Top Header */}
      <header className="bg-green-900 text-white p-3 lg:p-4 flex items-center shadow-md z-30 flex-shrink-0">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="p-2 mr-3 hover:bg-green-800 rounded-md transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <h1 className="text-lg lg:text-xl font-bold flex items-center gap-2">
          <Sprout className="w-6 h-6 text-green-400" />
          Fruticultura
        </h1>
        <p className="ml-auto text-green-300 text-xs lg:text-sm font-medium tracking-wide">
          <span className="hidden sm:inline">PLATAFORMA DE ESTUDOS</span>
          <span className="sm:hidden">ESTUDOS</span>
        </p>
      </header>

      {/* Body Area */}
      <div className="flex-1 flex overflow-hidden relative bg-gray-50">
        
        {/* Overlay Background */}
        {isMenuOpen && (
          <div 
            className="absolute inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sidebar Drawer */}
        <div className={`absolute top-0 left-0 h-full w-72 bg-green-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 flex justify-between items-center border-b border-green-800">
            <span className="font-bold text-green-100 uppercase tracking-wider text-sm">Selecione a Cultura</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-1.5 hover:bg-green-800 rounded-md transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 p-4 overflow-y-auto no-scrollbar">
            {crops.map(crop => (
              <button
                key={crop.id}
                onClick={() => {
                  setSelectedCrop(crop.id);
                  setActiveTab('simulado');
                  setIsMenuOpen(false); // Fecha o menu ao selecionar
                }}
                className={`w-full text-left px-5 py-4 rounded-lg font-medium transition-all duration-200 ${
                  selectedCrop === crop.id 
                    ? 'bg-green-800 text-green-100 shadow-inner border-l-4 border-green-400' 
                    : 'hover:bg-green-800/50 text-green-100/70 border-l-4 border-transparent'
                }`}
              >
                {crop.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
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
    </div>
  );
}
