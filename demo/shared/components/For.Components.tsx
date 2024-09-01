import React from "react";

interface ForProps<T> {
    items: T[];
    children: (item: T, index: number) => React.ReactNode;
}

const For=<T extends unknown>({items,children}:ForProps<T>): JSX.Element =>{
    return (
        <>
            {
                Array.from(items).map((item,index)=>{
                    return (
                        <React.Fragment key={index}>
                            {children(item,index)}
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default For;