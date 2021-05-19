import "./RulesBtn.scss"
export const RulesBtn = ({clicked})=>{
    return (
        <button className="rules-btn" onClick={()=>clicked()}>
            rules
          </button>
    );
}