import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    
    return (
        <nav className='shadow-sm'>
            <Link href="/" legacyBehavior>
                <a className={router.pathname === "/blog" ? "active" : ""}>
                Blog
                </a>
            </Link>
            <Link href="/" legacyBehavior>
                <a>
                <img src="/logo.png"/>
                </a>
            </Link>
            <Link href="/login" legacyBehavior>
                <a className={router.pathname === "/login" ? "active" : ""}>
                    login
                </a>
            </Link>
            <style jsx>
                {`
               
                img{
                    width: 5vw;
                }
                a {
                    text-decoration: none;
                    color:black;
                    font-size:1.5vw;
                }
                nav {
                    width: 100%;
                    height: 100px;
                    margin: 0 auto;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    justify-content: space-around;
                    
                }
                .active {
                  
                }
                
                `}
            </style>
        </nav>
    );
}
