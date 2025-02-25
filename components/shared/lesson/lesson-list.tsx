import LessonCard from "./lesson-card";

const LessonList = ({metadata, title}: {metadata: any; title?:string;}) => {
    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {metadata.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {metadata.map((lesson: any) => (
                        <LessonCard key={metadata.id} lesson={lesson} />
                    ))}
                </div>
            ): (
                <div>
                    <p>No products found</p>
                </div>
            )}
        </div>
    );
}
 
export default LessonList;