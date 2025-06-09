
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const NAMES_LIST = [
  { firstName: "Mariana", lastName: "Silva" },
  { firstName: "José", lastName: "Oliveira" },
  { firstName: "Ana", lastName: "Santos" },
  { firstName: "Carlos", lastName: "Souza" },
  { firstName: "Fernanda", lastName: "Costa" },
  { firstName: "Rafael", lastName: "Pereira" },
  { firstName: "Patrícia", lastName: "Alves" },
  { firstName: "Lucas", lastName: "Martins" },
  { firstName: "Beatriz", lastName: "Ferreira" },
  { firstName: "Gabriel", lastName: "Rocha" },
  { firstName: "Camila", lastName: "Ribeiro" },
  { firstName: "Pedro", lastName: "Azevedo" },
  { firstName: "Sofia", lastName: "Barbosa" },
  { firstName: "Matheus", lastName: "Cunha" },
  { firstName: "Laura", lastName: "Pinto" },
  { firstName: "Gustavo", lastName: "Lima" },
  { firstName: "Juliana", lastName: "Melo" },
  { firstName: "Ricardo", lastName: "Nunes" },
  { firstName: "Larissa", lastName: "Gomes" },
  { firstName: "Thiago", lastName: "Almeida" }
];

const MESSAGE_TEMPLATES = [
  "{name} Adquiriu o Método Desconecta!",
  "{name} Comprou o Método Desconecta!",
  "{name} Adquiriu o Desconecta!",
  "{name} Comprou o Desconecta!",
  "{name} Adquiriu o Premium!",
  "{name} Comprou o Premium!"
];


export default function PurchaseNotification() {
  const { toast } = useToast();
  // Estado para acionar o useEffect dos timers após a inicialização dos nomes
  const [namesInitialized, setNamesInitialized] = useState(false);
  
  const namesListRef = useRef<typeof NAMES_LIST>([]);
  const currentIndexRef = useRef(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  // Inicializa e embaralha os nomes uma vez na montagem
  useEffect(() => {
    const initialShuffled = shuffleArray(NAMES_LIST);
    namesListRef.current = initialShuffled;
    currentIndexRef.current = 0;
    setNamesInitialized(true); // Sinaliza que os nomes estão prontos
  }, []);

  const showRandomNotification = useCallback(() => {
    const currentNames = namesListRef.current;
    if (currentNames.length === 0) return;

    let nameIndex = currentIndexRef.current;

    if (nameIndex >= currentNames.length) {
      // Re-embaralha a lista original e atualiza o ref.
      namesListRef.current = shuffleArray(NAMES_LIST);
      nameIndex = 0;
    }
    
    const selectedNameObj = namesListRef.current[nameIndex];
    
    // Verifica se selectedNameObj é válido antes de prosseguir
    if (!selectedNameObj || !selectedNameObj.firstName || !selectedNameObj.lastName) {
      // Avança o índice para evitar loop em caso de dados inválidos e tenta na próxima vez
      currentIndexRef.current = (nameIndex + 1) % (namesListRef.current.length || 1);
      return; 
    }
    
    currentIndexRef.current = nameIndex + 1;

    const fullName = `${selectedNameObj.firstName} ${selectedNameObj.lastName.charAt(0)}.`; // Apenas a inicial do sobrenome
    const messageTemplateIndex = Math.floor(Math.random() * MESSAGE_TEMPLATES.length);
    const message = MESSAGE_TEMPLATES[messageTemplateIndex].replace("{name}", fullName);
    
    toast({
      description: (
        <div className="flex items-center gap-2 normal-case">
          <Zap size={18} className="text-primary-foreground" /> {/* Ícone um pouco menor */}
          <span className="font-semibold text-sm">{message}</span> {/* Texto um pouco menor */}
        </div>
      ),
      className: "bg-primary text-primary-foreground border-primary-foreground p-3 shadow-2xl", // Padding menor
      duration: 3000, // 3 seconds
    });
  }, [toast]); 

  useEffect(() => {
    if (!namesInitialized) {
      return;
    }

    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }

    const initialTimeoutId = setTimeout(() => {
      showRandomNotification();
      intervalIdRef.current = setInterval(() => {
        showRandomNotification();
      }, 40000); 
    }, 5000); 

    return () => {
      clearTimeout(initialTimeoutId);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [namesInitialized, showRandomNotification]); 

  return null; 
}
