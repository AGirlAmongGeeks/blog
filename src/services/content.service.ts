import html from 'remark-html';
import strip from 'strip-markdown';
import { remark } from 'remark';

class ContentService {
  async getLead(mdContent: string): Promise<string> {
    const processedContent = await remark().use(strip).process(mdContent);

    const lines = processedContent
      .toString()
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
    return lines.length > 0 ? lines[0] : '';
  }

  async getHtmlContent(mdContent: string): Promise<string> {
    const processedContent = await remark().use(html).process(mdContent);
    return processedContent.toString();
  }
}

const contentService = new ContentService();

export default contentService;
