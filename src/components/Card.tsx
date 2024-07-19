'use client';
import debounce from "debounce";

export default function Card({placeholder,handleAction,output,type}: {placeholder: string,handleAction?: (text: String) => void,output?: string,type: string}) {
    // @ts-ignore
    return <textarea className={"bg-white w-full h-56 shadow-lg rounded-md"} placeholder={placeholder} onChange={debounce((v) => handleAction(v.target.value),300)} value={output}></textarea>
}