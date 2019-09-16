const request = require('request');
const process = require('process');

const method = process.argv[2];
const id = process.argv[3];
const book = process.argv[4];


switch (method) {
  // 印出前二十本書的 id 與書名
  case 'list':
    request(
      'https://lidemy-book-store.herokuapp.com/books?_limit=20',
      (error, response, body) => {
        const json = JSON.parse(body);
        for (let i = 0; i < 20; i += 1) {
          console.log(`${json[i].id} ${json[i].name}`);
        }
      },
    );
    break;
    // 輸出特定 id 的書籍名稱
  case 'read':
    request(
      `https://lidemy-book-store.herokuapp.com/books/${id}`,
      (error, response, body) => {
        const json = JSON.parse(body);
        console.log(`第 ${id} 本書籍為 ${json.name}`);
      },
    );
    break;
    // 刪除書籍
  case 'delete':
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${id}`,
      () => {
        console.log('刪除書籍');
      },
    );
    break;

    // 新增書籍
  case 'create':
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          id: '',
          name: process.argv[3],
        },
      },
      () => {
        console.log(`新增一本名為 ${process.argv[3]} 的書`);
      },
    );
    break;
    // 更新書名
  case 'update':
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
        form: {
          name: book,
        },
      },
      () => {
        console.log(`更改 id 為 ${id} 的書名為 ${book}`);
      },
    );
    break;

  default:
    break;
}
