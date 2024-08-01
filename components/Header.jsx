import Link from "next/link";
import { Button } from "./ui/button"; 
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 text-white xl:py-12">
            <div className="container flex items-center justify-between mx-auto">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Naveen <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop navigation */}
                <div className="items-center hidden gap-8 xl:flex"> {/* Fixed 'item-center' to 'items-center' */}
                    <Nav /> 
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* Mobile navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>     
        </header>
    );
};

export default Header;