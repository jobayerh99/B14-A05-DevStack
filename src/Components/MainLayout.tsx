import { use } from 'react';
import type { Technology } from '../Types/Info';
import TechCard from './TechCard';

const MainLayout = ({techPromise} : {techPromise : Promise<Technology[]>} ) => {

    const allTechnology = use(techPromise)

    

    return (
        <section className='container mx-auto my-10'>
            <div className='grid grid-cols-4 gap-5'>
            {
                allTechnology.map((singleTechnology) => (
                    <TechCard key={singleTechnology.id}/>
                ))
            }
            </div>
        </section>
    );
};

export default MainLayout;