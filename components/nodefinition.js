
import {HiOutlineEmojiSad} from 'react-icons/hi';

const Nodefinition = ({word}) =>
{

	return (
		<>
			<div className="flex flex-col items-center mt-32">
			<HiOutlineEmojiSad className="mb-4" size={140} color="AC67EE"></HiOutlineEmojiSad>
		<h1 className="text-2xl font-bold">No Definition{/* for <span className="text-purple-500 italic ">{word}</span>*/}</h1>
		<div className="mt-4">

		<p className="text-gray-500 w-full text-lg mx-3 ">Sorry we could not find the word you're looking for {/*<span className="text-purple-500 font-bold ">{word}</span> */}</p>
		<p className="text-gray-500 w-full text-lg mx-3">in our dictionary,&nbsp; please try searching another word.</p>
		</div>	

		</div>
		</>
	)

}


export default Nodefinition;