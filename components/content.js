import { BsFillPlayCircleFill } from 'react-icons/bs';


const Content = ({data, index, length}) =>
{

	const playAudio = () =>
	{
		if (data.phonetics[0])
		{
			const audio = new Audio(data.phonetics[0].audio);
			audio.play();
		}
	}

	if (!data)
		return;
	return (
		<>
		<section className="mx-20">
		<div className='flex justify-between'>
		<div className='flex flex-wrap'>
		<span className="text-6xl font-bold">{data.word}</span>
		<span className='ml-4 py-5 text-lg'>{index + 1} of {length}</span>
		</div>
		<div>
			<BsFillPlayCircleFill onClick={playAudio}className="cursor-pointer hover:fill-purple-800" color='#9333EA' size={80} />
		</div>

		</div>

		<div className='text-2xl text-purple-500'>
			{data.phonetic}
		</div>
		</section>

		<section className="mx-20">
		
		<div key={data.meanings.partOfSpeech} className="">
			{data.meanings.map((item, index) => {
				return(
					<>
					<div className="flex flex-col gap-5 pt-8">
						<div className="flex items-center justify-start gap-6">
							<h1 className="italic text-2xl text- font-bold">{item.partOfSpeech}</h1>
							<hr className="w-full "></hr>
						</div>
						<h1 className="text-2xl text-gray-500">Meaning</h1>

						
						<div className="text-xl ml-16">
							<ul className="flex flex-col w-full gap-6 list-disc">
							{item.definitions.map((item, index) => {
								return <li key={index} className="">{item.definition}
								
								</li>
							})}
							</ul>
						</div>
						<div className="flex flex-col gap-7 mt-7">
							{item.synonyms.length > 0 ? <div className="flex flex-wrap min-w-xl gap-5 items-center">
								<span className="text-2xl text-gray-500">Synonyms</span>
									{item.synonyms.map((item, index) => {
										return <span key={index} className="font-bold text-2xl text-purple-500">{item}</span>
									})}</div> : ''}

							
								{item.antonyms.length > 0 ? <div className="flex flex-wrap min-w-xl gap-5 items-center">
								<span className="text-2xl text-gray-500">Antonyms</span>
									{item.antonyms.map((item , index) => {
										return <span key={index} className="font-bold text-2xl text-purple-500">{item}</span>
									})}</div> : ''}
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