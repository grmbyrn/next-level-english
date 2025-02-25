import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LessonCard = async ({lesson}: {lesson: any}) => {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <Image
                    src={lesson.image}
                    alt={lesson.title}
                    height={300}
                    width={300}
                    priority={true}
                />
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">
                    <h2 className="text-sm font-medium">{lesson.title}</h2>
                    <p>{lesson.description}</p>
                    <a
                        href={`/pdf/${encodeURIComponent(lesson.file)}`}
                        download
                        className="text-blue-600 hover:underline mt-2 inline-block"
                      >
                        Download PDF
                      </a>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default LessonCard;