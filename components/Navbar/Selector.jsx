const Selector = ({ text, onClick }) => {
    return (
        <div className="selector-option" onClick={() => onClick && onClick()}>
            <h4>{text.toUpperCase()}</h4>
        </div>
    );
}

export default Selector