
import "./TestimonialCard.scss"
import userIcon from "../../assets/images/user.png"


export default function TestimonialCard({ name, status, body }) {
    
    return (
        <div className="comment">
            <div className="comment__user">
                <div className="comment__user-icon">
                    <img className="comment__user-icon-image" src={userIcon} alt="" />
                </div>
                <div className="comment__user-info">
                    <div className="comment__user-name">{name}</div>
                    <div className="comment__user-status">{status}</div>
                </div>
            </div>
            <div className="comment__body">{body}</div>
            <div className="starts"></div>
        </div>
    );
}
