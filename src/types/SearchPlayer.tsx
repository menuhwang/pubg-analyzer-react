import {Page} from "./Page";
import {Participant} from "./Participant";

export type SearchPlayer = {
    player: string | undefined,
    matches: Page<Participant> | undefined
}