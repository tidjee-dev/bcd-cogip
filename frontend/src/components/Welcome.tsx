import welcoming from '../assets/example-scene-2 1.png';
import "../styles/components/_welcome.scss";
const Welcome = () => {
    return(
        <div className="section-all">

            <div className="sidebar">Sidebar</div>
            <div className="welcome">
                <h1>Dashboard</h1>
                <p>dashboard/</p>
                <div className="welcome-header">
                    <h2>Welcome back Henry!</h2>
                    <p>You can here add an invoice, a company
                    and some contacts</p>
                    <img src={welcoming} alt="" />
                </div>
            </div>
        </div>

    )
}
export default Welcome;