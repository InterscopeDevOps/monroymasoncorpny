import { Link } from 'react-router-dom'

export const ButtonContent = ({ btnName, btnphone, btnStyle }) => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        btnphone ?
            <a
                className={`
                boton
                my-3
                ${btnStyle}
                px-6
                py-4
                w-52
                rounded-lg
            `}
                href={`tel:+1${btnphone}`}
            >

                <span>
                    {btnName}
                </span>
            </a>
            :
            // estilo de boton: one, two, three
            <Link
                className={`
                boton
                my-3
                ${btnStyle ? btnStyle : 'one'}
                px-6
                py-4
                w-52
                rounded-lg
            `}
                to={`/${btnName === 'view all services' ? 'services' : 'contact'}`}
                onClick={goToTop}
            >

                <span className='capitalize'>
                    {btnName ? btnName : 'Free Estimate'}
                </span>
            </Link>
    )
}
