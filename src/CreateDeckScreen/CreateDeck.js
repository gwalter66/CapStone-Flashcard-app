import CreateDeckForm from "./CreateDeckForm"
import CreateDeckNav from "./CreateDeckNav"

function CreateDeck() {
    return (
        <>
            <CreateDeckNav />
            <h1>Create</h1>
            <CreateDeckForm />
        </>
    )
}

export default CreateDeck