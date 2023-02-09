//import Link from next

import Link from 'next/link'

export default function Navbar(){
    return(
        <nav>
            <Link href="/">
                {/*links take any child components*/}
                Home

            </Link>
            <Link href="/about">
                About Me
            </Link>

            {/*outside sources use regular <a> tags*/}
            <a href="https://github.com/WDI-SEA/Next.js-intro" target="_blank">see my github</a>

        </nav>
    )
}