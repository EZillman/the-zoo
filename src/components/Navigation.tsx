import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Hem</Link>
                </li>
                <li>
                    <Link to="/animals">Djuren</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}