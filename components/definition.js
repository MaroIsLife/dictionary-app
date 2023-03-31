import Content from './content'



const Definition = ({data}) =>
{
	return (
		<section className='container mx-auto py-8'>
			<div className="flex flex-col gap-6">
				{data.map(((item, index) => {
					return (
						<Content data={item} index={index} length={data.length} />
					)
				}))}
			</div>
		</section> 
	)
}

export default Definition;