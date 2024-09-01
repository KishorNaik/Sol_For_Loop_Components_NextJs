import Image from 'next/image'

export interface IHorizontalCardProps{
    title: string;
    content: string;
    image: string;
}


const HorizontalCard=({title,content,image}:IHorizontalCardProps): JSX.Element =>{
    return (
        <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
            <Image className="object-cover w-full h-48 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt={title} width={300}
      height={300}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
            </div>
        </div>
    );
}

export default HorizontalCard;