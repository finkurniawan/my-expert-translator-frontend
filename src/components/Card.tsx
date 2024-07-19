export default function Card({placeholder}: {placeholder: string}) {
    return <textarea className={"bg-white w-full h-56 shadow-lg rounded-md"} placeholder={placeholder}></textarea>
}