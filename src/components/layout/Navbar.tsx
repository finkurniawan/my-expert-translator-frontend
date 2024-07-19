export default function navbar(){
    const menu = [
        {
            name: "Translate",
            link: "/"
        },
        {
            name: "AI",
            link: "/"
        },
        {
            name: "Explore",
            link: "/"
        },
    ];
    return <>
    <nav className="py-5">
        <ul className={"flex flex-row"}>
            {
                menu.map((v,index) => (
                    <li className={"mx-auto text-md text-indigo-950 font-bold hover:text-orange-500"} key={index}>{v.name}</li>
                ))
            }
        </ul>
        <div className={"h-px bg-violet-300 my-2"}/>
    </nav>
    </>
}