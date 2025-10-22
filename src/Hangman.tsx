type HangmanProps = {
    falseLetter: string[]
}

export default function Hangman({falseLetter}: HangmanProps){
    return <div className="text-[2rem]" style={{transform: "translateX(80px)"}}>
          <div style={{height: "10px", width: "200px", background: "black"}}></div>
          <div style={{width : "10px", height: "300px", background:"black", }}></div>
          <div style={{width : "10px", height: "100px", background:"black", transform:"translateX(200px) translateY(-309px)"}}></div>
           {BODYPARTS.slice(0, falseLetter.length)} 
        </div>
}




const HEAD = (
    <div
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "100px",
        right: "-30px",
    }}
    />
)

const BODY = (
    <div
    style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: -8,
    }}
    />
)

const RIGHT_ARM = (
    <div
    style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "180px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
        transform: "translateX(10px)"
    }}
    />
)

const LEFT_ARM = (
    <div
    style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "180px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
                transform: "translateX(10px)"

    }}
    />
)

const RIGHT_LEG = (
    <div
    style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "240px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
                transform: "translateX(10px)"

    }}
    />
)

const LEFT_LEG = (
    <div
    style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "240px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
                transform: "translateX(10px)",
                        transform: "translateY(12px)"


    }}
    />
)

const BODYPARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG,]