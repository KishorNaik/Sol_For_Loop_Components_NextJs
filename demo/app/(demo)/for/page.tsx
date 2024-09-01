import HoriZontalCard from "@/shared/components/Card.Components";
import For from "@/shared/components/For.Components";
import { data } from "./data";

const ForPage=()=>{
    return (
        <div className="max-w-md mx-auto my-10">
            
            <For items={data}>
                {(item,index)=>{
                    return (
                        <div className="w-full my-8">
                            <HoriZontalCard key={index} title={item.title} content={item.content} image={item.image}></HoriZontalCard>
                        </div>
                    )
                }}                
            </For>
        </div>
    )
}

export default ForPage;