import "../styles/components/_info.scss";
import avatar from '../assets/avatar.png';

const Info =()=>{
    return(
        
        <div className="info-all">
            <div className="info">
                <h1 className="name">PIED PIPPER </h1>
                <div className="info-text"> 
                    <h3> <strong>Name:</strong> Pied Pipper</h3>
                    <h3> <strong>TVA:</strong> BE87 876 767 565</h3>
                    <h3> <strong>Country:</strong> Belgium</h3>
                    <h3> <strong>Type:</strong> Supplier</h3>
                </div>
            </div>
            <div className="avatar" >
                <img src={avatar} alt="" />
            </div>
        </div>
            
    )
}
export default Info;