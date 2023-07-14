import './Button.css';

const Button = (props) => {
    return (
        <>
            <button className={props.className}> {props.text} </button>
        </>
    )
}

export default Button;