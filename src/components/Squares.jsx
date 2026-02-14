import { useState, useEffect } from "react";

export default function Squares() {
  const [numBoxes, setNumBoxes] = useState(0);

  useEffect(() => {
    const updateBoxes = () => {
      const boxWidth = 24;
      const count = Math.floor(window.innerWidth / boxWidth) * 3;
      setNumBoxes(count);
    };

    updateBoxes(); 
    window.addEventListener("resize", updateBoxes); 

    return () => window.removeEventListener("resize", updateBoxes);
  }, []);

  const boxes = [];
  
  for (let i = 0; i < numBoxes; i++) {
    boxes.push(
      <div
        key={i}
        className="w-6 h-6 boxes relative"
      />
    );
  }

  return (
    <div className="h-18 overflow-hidden flex flex-wrap justify-center">
      {boxes}
    </div>
  );
}