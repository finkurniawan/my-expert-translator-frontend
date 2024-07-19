'use client';
import Card from "@/components/Card";
import {SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {languages} from "@/data/languages";

export default function Home() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");
    const [languageCode,setLanguageCode] = useState(languages[0].code);

    const handleActionCard = (text: String): void => {
        // @ts-ignore
        setText(text);
    }

    const handleChangeLanguage = (value: SetStateAction<string>): void => {
        setLanguageCode(value)
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/translate?text=${text}&targetLanguage=${languageCode}`).then(({data}) => setOutput(data.translatedText)).catch((e) => console.log(e))
    }, [text,languageCode])

    return (
        <main>
            <div className={"flex  items-end justify-center px-16 bg-gray-100 gap-1 flex-col sm:flex-row space-y-5 sm:space-y-0 sm:gap-5"}>
               <div className={"w-full"}>
                   <Card placeholder={"your text"} handleAction={handleActionCard} key={1} type="input"/>
               </div>
              <div className={"w-full"}>
                  <select onChange={(v) => handleChangeLanguage(v.target.value)}>
                      {languages.map((v,i) => <option key={i} value={v.code}>{v.name}</option>)}
                  </select>
                  <Card placeholder={"output text"} handleAction={(_) => {
                  }} output={output} key={2} type="output"/>
              </div>
            </div>
        </main>
    );
}
