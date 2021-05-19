import rulesImage from '../../assets/image-rules.svg';
import "./RulesPreview.scss"
 const RulesPreview = ({closeClicked})=>{
    return (
        <div className="rules-preview-content">
            <h1 className="title" >Rules</h1>
            <div className="model-content">
            <img className="model-img" src={rulesImage} />
            </div>
          
            <div className="btn-content">
                <button className="btn" onClick={()=>closeClicked()}>Close</button>
            </div>
        </div>
    )
}

export default RulesPreview;