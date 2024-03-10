import { Note } from "../../../../Services/Home/index.models";

export interface NoteListProps {
    list: Note[];
    id: (id: string) => void;
}