"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
];

const MobileNav = () => {
    const pathname = usePathname(); 
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent>
                <div>Naveen</div>
                <nav>
                    {links.map((link) => (
                        <Link href={link.path} key={link.path} className={`block p-2 ${pathname === link.path ? 'text-accent' : ''}`}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;