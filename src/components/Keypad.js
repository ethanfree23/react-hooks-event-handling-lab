// Code Keypad Component Here



function change(event) {
    event.preventDefault();
    console.log("Entering password...")
}

function Keypad() {
    return (
        <>
            <form onChange={change}>
                <input type="password"></input>
            </form>
        </>
    )
}

export default Keypad;