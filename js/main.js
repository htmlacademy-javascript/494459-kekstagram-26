import { renderThumbnails } from './preview.js';
import { mockDataGenerate } from './mock/data.js';
// import { uploadBtn } from './form.js';


const COUNT_CARDS_FOR_RENDER = 25;
const countMocksForRender = mockDataGenerate(COUNT_CARDS_FOR_RENDER);


renderThumbnails(countMocksForRender);
