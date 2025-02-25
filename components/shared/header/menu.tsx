import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {EllipsisVertical, ShoppingCart, UserIcon, SmartphoneNfc} from 'lucide-react'
import { 
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';

const Menu = () => {
    return (
        <div className="">
            <nav className="hidden md:flex w-full gap-1">
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCart /> Lessons
                    </Link>
                </Button>
                <Button asChild variant='ghost'>
                    <Link href='/contact'>
                        <SmartphoneNfc /> Contact
                    </Link>
                </Button>
                <Button asChild>
                    <Link href='/sign-in'>
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className='align-middle'>
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col items-start'>
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button asChild variant='ghost'>
                            <Link href='/lessons'>
                                <ShoppingCart /> Lesson Plans
                            </Link>
                        </Button>
                        <Button asChild variant='ghost'>
                            <Link href='/contact'>
                                <SmartphoneNfc /> Contact
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href='/sign-in'>
                                <UserIcon /> Sign In
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}
 
export default Menu;