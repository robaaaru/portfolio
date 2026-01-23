export default function Body({activePage}){
    
    switch(activePage){
        case 0: return (
            <div className="p-3 md:p-4 lg:p-5 mt-20 mx-auto w-full md:w-[50rem] rounded-lg text-[0.98rem] md:text-base leading-relaxed" style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborumasdasdasdas
            </div>
          
        ) 
            default: return (
                <div className="p-3 md:p-4 lg:p-5 mt-20 mx-auto w-full md:w-[50rem] rounded-lg text-[0.98rem] md:text-base leading-relaxed" style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
                    Content coming soon.
                </div>
            )
    }

}