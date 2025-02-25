import fs from 'fs/promises';
import path from 'path';
import LessonList from '@/components/shared/lesson/lesson-list';
import Hero from '@/components/hero';

export default async function Home() {
  const metadataPath = path.join(process.cwd(), 'json/pdfMetadata.json');
  const metadata = JSON.parse(await fs.readFile(metadataPath, 'utf-8'));

  return (
    <>
        <Hero />
        <LessonList metadata={metadata} title={'Latest Lesson Plans'} />
    </>
  );
}
