import './para.css'

function Para(props){
    return (
        <div className="para">
        <div className="boxsh">
        <div className="title">
        {props.title}
        </div>
        <div className="content">
        {props.content}
        </div>
        <div className="image">
        <img src={props.imageSrc} className={props.clas} alt="" />
        </div>
        </div>
        </div>
    )
}

export default Para;