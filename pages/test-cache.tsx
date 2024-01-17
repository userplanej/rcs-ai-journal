
type PageProps = {
    date: number;
  };
  
export function getServerSideProps () {
    return {
        
            props: {
                date: Date.now(),
            }, 
    };
}
export default function Page({date} : PageProps) {
    return(
        <section>
            <h1> page routers . </h1>
            <p> { date } </p>
        </section>

    );
}
