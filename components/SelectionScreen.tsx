"use client";
// components/SelectionScreen.tsx
import { useState } from 'react';

type OptionType = {
  label: string;
  selected: boolean;
};

const options: OptionType[] = [
  { label: 'Nach Freunden', selected: false },
  { label: 'Nach was Festem', selected: false },
  { label: 'Eine Affäre', selected: false },
  { label: 'Ein bisschen Spaß', selected: false },
  { label: 'Eine Ablenkung', selected: false },
  { label: 'Nach Chats & Gesprächen', selected: false },
  { label: 'Eine Pause vom Alltag', selected: false },
  { label: 'Netflix & chill', selected: false },
];

const SelectionScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState(options);

  const handleOptionClick = (index: number) => {
    const newOptions = selectedOptions.map((option, i) => {
      if (i === index) {
        return { ...option, selected: !option.selected };
      }
      return option;
    });
    setSelectedOptions(newOptions);
  };

  const handleSubmit = () => {
    console.log('Selected Options:', selectedOptions.filter(option => option.selected));
    // Handle submission logic here, such as updating user preferences
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg text-center font-semibold mb-4">Ok, lass uns loslegen und ein Profil erstellen! Nach welcher Art Liebe suchst du?</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {selectedOptions.map((option, index) => (
          <div key={index} className={`p-2 border-2 ${option.selected ? 'border-blue-500' : 'border-transparent'} rounded-lg cursor-pointer`} onClick={() => handleOptionClick(index)}>
            <div className="aspect-w-1 aspect-h-1">
              <img src={`/path/to/image/${index}.jpg`} alt={option.label} className="object-cover rounded-lg" />
            </div>
            <div className="text-center mt-2">{option.label}</div>
          </div>
        ))}
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={handleSubmit}>Weiter</button>
    </div>
  );
};

export default SelectionScreen;
