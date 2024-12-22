import Image from 'next/image'
import omlette from '../public/assets/images/image-omelette.jpeg'

export default function Home() {
  return (
    <div className=" md:bg-rose-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-1 md:pb-20 md:gap-16 md:p-8">
      <main className="bg-white p-10 rounded-xl flex flex-col gap-8 row-start-2 items-center sm:items-start font-outfit">
      <div className=''>
       <Image priority src={omlette} alt='egg-omelette' className='md:rounded-xl rounded-none md:pt-0'/>
      </div>
      <h1 className="text-4xl font-bold text-rose-800 font-young">Simple Omelette Recipe</h1>

<p className='text-slate-600 font-outfit'>
  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
to perfection, optionally filled with your choice of cheese, vegetables, or meats.
</p>
<div className="w-full block p-6 bg-rose-50 rounded-lg">
  <h2 className="font-bold text-rose-800 mb-5 text-lg">Preparation time</h2>
  <div>
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
  <li> <strong>Total: </strong> Approximately 10 minutes</li>
  <li> <strong>Preparation:</strong> 5 minutes</li>
  <li> <strong>Cooking:</strong> 5 minutes</li>
</ul>
  </div>

</div>


<h3 className="text-3xl font-young text-rose-800">Ingredients</h3>
<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside marker:text-rose-800">
  <li>2-3 large eggs</li>
  <li>Salt, to taste</li>
  <li>Pepper, to taste</li>
  <li>1 tablespoon of butter or oil</li>
  <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
</ul>

<hr />

<h3 className='font-young text-3xl text-rose-800'>Instructions</h3>

<ol className="list-decimal marker:text-rose-800">
  <li> <span className="font-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
You can add a tablespoon of water or milk for a fluffier texture.</li>
  <li> <span className="font-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
  <li> <span className="font-bold">Cook the omelette:</span>
 Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
the eggs evenly coat the surface.</li>
  <li> <span className="font-bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the 
middle, sprinkle your chosen fillings over one half of the omelette.</li>
  <li> <span className="font-bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the 
fillings. Let it cook for another minute, then slide it onto a plate.</li>
  <li> <span className="font-bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
</ol>

<hr />
<h3 className="text-3xl font-young text-rose-800">Nutrition</h3>


<p className="">The table below shows nutritional values per serving without the additional fillings.</p>
<div className="flex flex-col min-w-full inline-block align-middle">
<table className="min-w-full p-5">

  <tbody className="">
    <tr className="border-b">
      <td>Calories</td>
      <td className='text-brown-800 font-bold'>277kcal</td>
     
    </tr>
    <tr className="border-b">
      <td>Carbs</td>
      <td className='text-brown-800 font-bold'>0g</td>
      
    </tr>
    <tr className="border-b">
      <td>Protein</td>
      <td className='text-brown-800 font-bold'>20g</td>
      
    </tr>
    <tr className="">
      <td>Fat</td>
      <td className='text-brown-800 font-bold'>22g</td>
      
    </tr>
  </tbody>
</table>
</div>


<div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Robert Kibue</a>.
</div>
      </main>
    </div>
  );
}
