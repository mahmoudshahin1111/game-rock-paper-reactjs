import rulesImage from '../../assets/image-rules.svg';
import "./RulesPreview.scss"
 const RulesPreview = ({closeClicked})=>{
    return (
        <div className="rules-preview-content">
           
            <div className="model-content">
            <h1 className="title" >Rules</h1>
            <img className="model-img" src={rulesImage} />
            <div className="btn-content">
                <button onClick={()=>closeClicked()}>Close</button>
            </div>
            </div>
          
            
        </div>
    )
}

export default RulesPreview;