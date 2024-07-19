
export default function Footer() {
   return (
           <footer className="px-10 py-10">
            <div className={"h-px bg-violet-300 my-2"}/>
               <div className="md:flex flex-wrap justify-center">

                   <div className="mx-auto">
                       <div>
                           <h2 className="font-bold">Address</h2>
                           <p className="pt-5">
                               Jl. Melati Ragunan<br />
                               Jakarta Selatan <br />
                               DKI Jakarta
                           </p>
                       </div>
                   </div>

                   <div className="mx-auto">
                       <h3 className="font-bold">Major</h3>
                       <ul>
                           <li className="pt-5">Fullstack Engineering</li>
                       </ul>
                   </div>

                   <div className="mx-auto">
                       <h3 className="font-bold">Member of Team</h3>
                       <ul>
                           <li className="pt-5">Alfin</li>
                           <li>Amirul</li>
                           <li>Fauzan</li>
                           <li>Rifki</li>
                       </ul>
                   </div>

                   <div className="mx-auto">
                       <h3></h3>
                       <ul>
                           <li></li>
                       </ul>
                   </div>

               </div>
           </footer>
       );
   }