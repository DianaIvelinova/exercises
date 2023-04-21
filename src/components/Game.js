export const Game = (props) => {
    return (
        <div>
            <h1> {props.gamePrice} </h1>
            <div> {props.gameTitle} </div>
        </div>
    );
};
