import { noteList } from "../../Assets/Data/NoteList";
import { Note } from "./index.models";

export const getNoteList = (): Note[] => Array.isArray(noteList) ? noteList : []

export const getNoteFromId = (id: string): Note | any => noteList.find((data: any) => data?.id === id)