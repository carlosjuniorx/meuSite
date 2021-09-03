import Image from "next/image";

export default function Logo(){
    return(
        <>
            <div className="row  img-fluid" >
                <Image width={300} height={300}  src="/images/lo-sem-fundo2.png" alt="" />

            </div>
        </>
    )
}