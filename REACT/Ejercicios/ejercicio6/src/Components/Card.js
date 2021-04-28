export default function Card(props) {
    return(
    <div className="card w-50 m-auto" >
      <img className="card-img-top" src={props.imgUrl} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.paragraph}</p>
        <a href={props.href} className="btn btn-primary">{props.linkText}</a>
      </div>
   </div>
    )
  }
