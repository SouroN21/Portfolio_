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
            <SheetContent className="bg-[#232329] p-6">
                <div className="text-center mb-8">
                    <span className="text-2xl font-bold text-white">Naveen</span>
                </div>
                <nav className="flex flex-col gap-4">
                    {links.map((link) => (
                        <Link 
                            href={link.path} 
                            key={link.path} 
                            className={`text-lg font-medium block p-2 rounded transition-colors duration-300 ${pathname === link.path ? 'text-accent' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
