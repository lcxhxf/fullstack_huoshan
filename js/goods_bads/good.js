import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

async function getCleanCodeArtilce() {
    try{
        let articles = await get("https://en.wikipedia.org/wiki/Robert")
        await writeFile("article.html", articles);
    } catch (err) {
        console.error()
    }
    
    console.log('写入完成');
}

await getCleanCodeArtilce();