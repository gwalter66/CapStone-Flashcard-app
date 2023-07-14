import CardList from "./CardList"
import DeckOverview from "./DeckOverview"
import DeckPreviewNav from "./DeckPreviewNav"

function DeckPreview() {
    return (
        <>
            <h1>Preview the deck</h1>
            <DeckPreviewNav />
            <DeckOverview />
            <h2>Cards</h2>
            <CardList />
        </>
    )
}

export default DeckPreview