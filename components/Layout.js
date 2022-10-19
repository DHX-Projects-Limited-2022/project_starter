import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Layout({children}) {

    return (
        <>
        <a href="#Main-Content" class="skip-link">Skip to content</a>
        <header>
        <div>
            <a href="/" className="logo">Project Name</a>
        </div>
        <nav>
            <ul className="main-nav">
                <li><Link href="/about"><a className="main-nav__link">About</a></Link></li>
            </ul>
        </nav>
        </header>
        <main id="Main-Content">{children}
        </main>
        <footer>
            <p>Copyright &copy; {YEAR} Project Name.</p>
        </footer>
        </>
    )
}