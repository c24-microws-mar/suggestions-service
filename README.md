# suggestions-service

This is a suggestions service

## How to use

Query examples:
~~~
/suggestions/?releaseId=123-asdas-456546
/suggestions/?releaseId=123-asdas-456546&limit=5
/suggestions/?releaseId[]=123-asdas-456546&releaseId[]=123-asdas-werwer&&limit=5
/suggestions/?releaseId[]=0092da17-9b78-4c82-b738-21ee159125a3&releaseId[]=2af14d71-4333-494a-a981-7701897e3f1c&limit=4
~~~
The following npm scripts are available:

~~~ sh
npm start       // starts the application
npm test        // runs all tests
npm run watch   // runs a file watcher to restart and test on each file change
~~~

## Change history

- v1 - first version, which provides album title and id
- v2 - new version. Requires releaseId only. New suggestion algorithm. Changed output format (the same as catalog-service v2 provides)

## License

MIT
