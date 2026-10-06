import { useEffect, useState } from "react";

// Blomm-i:t (U+F006) finns bara i Tropi Land. Använd det först när fonten
// har laddats, annars blir det tomma rutor i reservfonten.
const useFlowerI = () => {
  const [flowerI, setFlowerI] = useState(false);

  useEffect(() => {
    document.fonts
      .load("1em 'Tropi Land'", "\uF006")
      .then((fonts) => setFlowerI(fonts.length > 0))
      .catch(() => {});
  }, []);

  return flowerI ? "\uF006" : "i";
};

export default useFlowerI;
