'use client';
import Card from "@/components/Card";
import {SetStateAction, useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");

    const handleActionCard = (text: String): void => {
        // @ts-ignore
        setText(text);
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/translate?text=${text}&targetLanguage=${"en"}`).then(({data}) => setOutput(data.translatedText)).catch((e) => console.log(e))
    }, [text])

    return (
        <main>
            <div className={"flex flex-row items-center justify-center px-16 bg-gray-100 gap-1"}>
                <Card placeholder={"your text"} handleAction={handleActionCard} key={1} type="input"/>
                <Card placeholder={"output text"} handleAction={(_) => {
                }} output={output} key={2} type="output"/>
            </div>
        </main>
    );
}
