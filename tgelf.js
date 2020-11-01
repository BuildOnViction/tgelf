const Gelf = require('gelf')
const gelf = new Gelf({
    graylogPort: 12201,
    graylogHostname: '127.0.0.1',
    connection: 'wan',
    maxChunkSizeWan: 1420,
    maxChunkSizeLan: 8154
})

Tail = require('tail').Tail
 
tail = new Tail('fileToTail')
 
tail.on('line', function(data) {
      gelf.emit('gelf.log', data)
})
 
tail.on('error', function(error) {
      gelf.emit('error', error)
})
