
export default async function Components(){
    await new Promise(resolve => setTimeout(resolve,3000))
    return(
        <div>
            Components
        </div>
    )
}