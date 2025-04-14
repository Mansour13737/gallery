import { useState } from 'react';

interface gallery {
  id: number;
  url: string;
  category: string;
}

function App() {
  const categories: gallery[] = [
    { id: 1, url: '/bw1.avif', category: 'bw' },
    { id: 2, url: '/mixed1.avif', category: 'mixed' },
    { id: 3, url: '/bw2.avif', category: 'bw' },
    { id: 4, url: '/bw3.avif', category: 'bw' },
    { id: 5, url: '/art1.avif', category: 'art' },
    { id: 6, url: '/mixed2.avif', category: 'mixed' },
    { id: 7, url: '/mixed3.avif', category: 'mixed' },
    { id: 8, url: '/art2.avif', category: 'art' },
    { id: 9, url: '/art3.avif', category: 'art' },
  ]

  const [filteredCategories, setFilteredCategories] = useState<gallery[]>(categories);
  const[filtered,setFiltered] = useState<string> ('All')

  const clickHandler = (cat: string) => {
    setFiltered(cat)
    if (cat === 'All') {
      setFilteredCategories(categories); 
    } else {
      const selectedCat = categories.filter((item) => item.category === cat);
      setFilteredCategories(selectedCat); 
    }
  };

  return (
    <div className='flex pt-10 items-center justify-center relative w-screen h-screen flex-col'>
      <div className={filtered === 'All' ? 'all' : 'minimal'}></div>
      <div className='px-[10%] cursor-pointer grid grid-cols-3 gap-y-2 gap-x-2 mx-auto p-2'>
        {filteredCategories.map((img) => (
          <img key={img.id} className='img' src={img.url} alt={img.category} />
        ))}

      </div>
      <div className='flex gap-3 w-screen justify-center  mt-4'>
        <button onClick={() => clickHandler('bw')} className='btn'>Black & White</button>
        <button onClick={() => clickHandler('art')  } className='btn'>Art</button>
        <button onClick={() => clickHandler('mixed')} className='btn'>Mixed</button>
        <button onClick={() => clickHandler('All')} className='btn'>All</button>
      </div>
      <div className='w-screen h-[60px] lg:hidden  mt-[40px] bg-black border border-white/10 backdrop-blur-md  '>
      </div>
    </div>
  );
}

export default App;