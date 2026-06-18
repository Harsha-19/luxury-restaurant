import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const images = {
  "dish-1.jpg": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop",
  "dish-2.jpg": "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974&auto=format&fit=crop",
  "dish-3.jpg": "https://images.unsplash.com/photo-1626071465961-39626c952dfa?q=80&w=1974&auto=format&fit=crop",
  "dish-4.jpg": "https://images.unsplash.com/photo-1633964913295-ceb43826e7cf?q=80&w=2070&auto=format&fit=crop",
  "dish-5.jpg": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
  "dish-6.jpg": "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop",
  "review-1.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  "review-2.jpg": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  "review-3.jpg": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  "review-4.jpg": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  "review-5.jpg": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
  "review-6.jpg": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  "gallery-1.jpg": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
  "gallery-2.jpg": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop",
  "gallery-3.jpg": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  "gallery-4.jpg": "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  "gallery-5.jpg": "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
  "gallery-6.jpg": "https://images.unsplash.com/photo-1581514467003-90d5ad61a559?q=80&w=2067&auto=format&fit=crop",
  "gallery-7.jpg": "https://images.unsplash.com/photo-1536913508491-18c72bd74b1e?q=80&w=2070&auto=format&fit=crop",
  "gallery-8.jpg": "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&w=2072&auto=format&fit=crop",
  "story-2.jpg": "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9bc?q=80&w=2070&auto=format&fit=crop"
};

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function downloadFile(url, fileName) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);
  const dest = path.join(dir, fileName);
  const fileStream = fs.createWriteStream(dest, { flags: 'wx' });
  await finished(Readable.fromWeb(res.body).pipe(fileStream));
  console.log(`Downloaded ${fileName}`);
}

async function run() {
  const promises = Object.entries(images).map(([name, url]) => downloadFile(url, name).catch(e => console.error(`Error downloading ${name}: ${e.message}`)));
  await Promise.all(promises);
  console.log("All downloads complete.");
}

run();
