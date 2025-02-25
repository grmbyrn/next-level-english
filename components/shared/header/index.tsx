// import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';

const Header = () => {
    return <header className='w-full border-b overflow-hidden'>
        <div className="wrapper flex items-center justify-between px-4 py-3">
                <Link href='/' className='flex-start'>
                    {/* <Image
                        src='/images/logo.svg'
                        alt={`logo`}
                        height={48}
                        width={48}
                        priority={true}
                    /> */}
                    Next Level English
                </Link>
            <Menu />
        </div>
    </header>
}
 
export default Header;