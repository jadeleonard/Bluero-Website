import Navbar from "../_pages/Navbar"


export const metadata = {
    title:"Components"
}





export default function RootLayouts({children}:{children : React.ReactNode }) {
    return(
        <html lang="en">
            <body className="bg-slate-900">
               
                {children}
            </body>
        </html>
    )
}