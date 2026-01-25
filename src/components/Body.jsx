import Card from './ui/Card'

export default function Body({activePage}){
    
    const content = (() => {
        switch(activePage){
            case 0: return (
                <div className="p-3 md:p-4 lg:p-5 mx-auto w-full md:w-[42rem] lg:w-[46rem] rounded-lg text-[0.98rem] md:text-base leading-relaxed" style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborumasdasdasdas
                </div>
            )
            case 1: return <Card />
            default: return (
                <div className="p-3 md:p-4 lg:p-5 mx-auto w-full md:w-[42rem] lg:w-[46rem] rounded-lg text-[0.98rem] md:text-base leading-relaxed" style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)", transition: "background-color 200ms ease, color 200ms ease, border-color 200ms ease" }}>
                    Content coming soon.
                </div>
            )
        }
    })();

    return (
        <main className="min-h-screen pt-16 pb-20 md:pt-18 md:pb-22 lg:pt-20 lg:pb-24 px-3" style={{ backgroundColor: "var(--background)" }}>
            {content}
        </main>
    )
}