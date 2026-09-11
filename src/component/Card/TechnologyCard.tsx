import React, { use } from 'react';
import type { Technology } from '../../Type/types';


interface TechnologyCardProps {
    TechnologyCardPromise: Promise<Technology[]>
}

const TechnologyCard = ({TechnologyCardPromise}:TechnologyCardProps) => {
    const TechnologyCard = use(TechnologyCardPromise);
    console.log(TechnologyCard);

    return (
         <div>

           

    </div>

  );
};

export default TechnologyCard;

