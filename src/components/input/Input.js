import './Input.css';

const Input = (props) => {
    return (
        <>
            <input className={props.class} type={props.type} />
        </>
    )
}

export default Input;