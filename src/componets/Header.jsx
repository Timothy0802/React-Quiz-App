import logoImg from '../assets/HGU.png'

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt='Quiz header logo of the main page'/>
            <h1>Handong Quiz</h1>
        </header>
    )

}