import { use, useState } from "react";
import type { Technology } from "../../Type/types";

interface TechnologyCardProps {
  TechnologyCardPromise: Promise<Technology[]>;
}

const TechnologyCard = ({
  TechnologyCardPromise,
}: TechnologyCardProps) => {

  const technologies = use(TechnologyCardPromise);

  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

 const handleAddToStack = (technology: Technology) => {
  setSelectedTechs((currentStack) => {

    const alreadyExists = currentStack.some(
      (tech) => tech.id === technology.id
    );

    if (alreadyExists) {
      return currentStack.filter(
        (tech) => tech.id !== technology.id
      );
    }
    return [...currentStack, technology];
  });
};
 
  const handleRemove = (id: string) => {
    setSelectedTechs((currentStack) =>
      currentStack.filter((tech) => tech.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };
   return (

    
   )

  
};

export default TechnologyCard;

