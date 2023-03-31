import { BsFillPlayCircleFill } from 'react-icons/bs';


const Content = ({data}) =>
{
	//part of speech interjection, verb, noun, adverb


	if (!data)
		return;
	return (
		<>
		<section className="mx-20">
		<div className='flex justify-between'>
		<div>
		<h1 className="text-6xl font-bold">{data.word}</h1>
		</div>
			<h1 className='basis-[74%] py-5 text-lg'>1 of 3</h1>
		<div>
			<BsFillPlayCircleFill className="cursor-pointer hover:fill-purple-800" color='#9333EA' size={80} />
		</div>

		</div>

		<div className='text-2xl text-purple-500'>
			{data.phonetic}
		</div>
		</section>

		<section className="mx-20 mb-16">
		
		<div className="">
			{data.meanings.map((item, index) => {
				return(
					<>
					<div className="flex flex-col gap-5 pt-8">
					<div className="flex items-center justify-start gap-6">
					<h1 className="italic text-2xl text- font-bold">{item.partOfSpeech}</h1>
						<hr className="w-full "></hr>
					</div>
					<h1 className="text-xl text-gray-500">Meaning</h1>

					
						<div className="text-xl ml-16">
						<ul className="flex flex-col w-full gap-6 list-disc">
						{item.definitions.map((item) => {
							return <li key={index} className="">{item.definition}
							
							</li>
						})}
						</ul>
					</div>
						
						
					
					</div>
					</>
				)
			})}
			
		</div>
		</section>
		</>
	)
}

export default Content;