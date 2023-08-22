import { FeedAnimal } from "./FeedAnimal"
import { Navigation } from "./Navigation"

export const Animal = () => {

    return (
        <>
          <Navigation></Navigation>
          <h2>Specific animal</h2>
          <FeedAnimal></FeedAnimal>
        </>
    )
}