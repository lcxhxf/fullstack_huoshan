// douban 250 电影 https://movie.douban.com/top250
// npm http https thenable fetch node 有兼容性问题
// superagent node 不支持 import 
import superagent from 'superagent'; 
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
// es6  js   @types/  常用的js 库添加类型声明文件
// 流程 class  封装
interface Info {
  title: string;
  url: string;
  pic: string;
} 
interface InfoReuslt {
  time: number;
  data: Info[]
}
interface objJson {
    [propName:number]: Info[]
}

// :Info[]

class Crawler {
  // es6 class property babel es6 class 
  private url = 'https://movie.douban.com/top250';
  constructor() {
    this.initSpiderProcess()
  }
  async initSpiderProcess() {
    // superagent get 请求  
    // const html = await this.getRawHtml();
    // console.log(html.text);
    const { text:html } = await this.getRawHtml();
    const info = await this.getJsonInfo(html)
    this.getJsonContent(info)
  }
  async getJsonContent(info: InfoReuslt) {
    const filePath = path.resolve(__dirname, './data/url.json')
    let fileContent: objJson = {};
    // 安全校验？
    if (fs.existsSync(filePath)) {
        // buffer 
        fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))  
    }
    fileContent[info.time] = info.data;
    fs.writeFileSync(filePath, JSON.stringify(fileContent))

    
    
  }
  async getRawHtml() {
    // 请求
    // getJsonInfo 解析
    const result = await superagent.get(this.url)
    return result;
  }
  // 解析
  getJsonInfo(html:string) {
    // python 正则 百度 
    // js cheerio html string -> 内存  虚拟DOM 
    const $ = cheerio.load(html); // html load 进 内存  构建DOM树
    // ol有序 ul 无序
    const movies = $(".grid_view .item");
    // console.log(movies);
    const info:Info[] = [];
    for (let i = 0; i < movies.length; i++) {
      let movie = movies[i];
      // string | undefined
      let pic:string = $(movie).find('.pic img').attr('src') || "";
      let title = $(movie).find('.info .title:first-child').text();
      let url: string = $(movie).find('.info a').attr('href') || "";
      info.push({
        title,
        url,
        pic
      })
    }
    const result = {
        time: new Date().getTime(),
        data: info
    }
    console.log(result, '-----');
    return result
    
  }
}
const crawler = new Crawler();
