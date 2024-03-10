import { Fragment } from "react/jsx-runtime";
import { NoteListProps } from "./index.model";
import { Note } from "../../../../Services/Home/index.models";

const NoteList: React.FC<NoteListProps> = ({ list, id }) => {

    return (

        <div className="border-r-2 border-gray-300">

            <div>

                <div className="p-4 pl-5">
                    <h3 className="text-2xl font-bold mb-[40px] text-gray-700">All Notes</h3>
                    <div className="flex">
                        <p className="text-xl text-gray-400 font-semibold">{list?.length || 0} notes</p>
                    </div>
                </div>

                {Array.isArray(list) && list.length > 0 ?

                    <Fragment>

                        {
                            list.map((data: Note) =>

                                <div key={data?.id} onClick={() => id(data?.id)} className="grid cursor-pointer grid-cols-10 gap-2 p-4 pl-5 border-t-2 last:border-b-2 border-gray-300">

                                    <div className="col-span-7 flex flex-col">
                                        <h4 className="text-gray-700 mb-1 font-semibold text-lg max-w-[100%] w-full truncate">
                                            {data?.title || ''}
                                        </h4>
                                        <p className="text-gray-500 leading-tight font-medium mb-2 text-lg max-w-[100%] w-full line-clamp-2">
                                            {data?.description || ''}
                                        </p>
                                        <p className="text-gray-300 text-base font-medium">
                                            {data?.creation_time || ''}
                                        </p>
                                    </div>

                                    <div className="col-span-3">
                                        <img className="aspect-square" src={data?.image_url} alt="note" />
                                    </div>

                                </div>

                            )
                        }

                    </Fragment>

                    :

                    <div className="flex">
                        <h3 className="text-2xl font-bold mb-[40px] text-gray-700">No notes found</h3>
                    </div>

                }


            </div>

        </div>

    )

}

export default NoteList