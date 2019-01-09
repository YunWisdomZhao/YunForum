var PORT = 8250;

var http = require('http');
var marked = require('marked');
var renderer = new marked.Renderer();

renderer.listitem = function (text, level) {
  if (text.indexOf('[ ] ') === 0 && text.replace(/\s/g, '') !== '[]') {
    text = '<input type="checkbox" disabled>' + text.replace('[ ]', '');
    return `<li class="task-item">${text}</li>`;
  } else if (text.indexOf('[x] ') === 0 && text.replace(/\s/g, '') !== '[x]') {
    text = '<input type="checkbox" checked disabled>' + text.replace('[x]', '');
    return `<li class="task-item">${text}</li>`;
  }

  return `<li>${text}</li>`;
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

process.on('uncaughtException', function (err) {
  console.log(err);
});

process.on('exit', function () {
  console.log("exit");
});

process.on('SIGTERM', function () {
  console.log("on signal [SIGTERM]");
  process.exit(0);
});

process.on('SIGINT', function () {
  console.log("on signal [SIGINT]");
  process.exit(0);
});

process.on('SIGUSR1', function () {
  console.log("on signal [SIGUSR1]");
  process.exit(0);
});

process.on('SIGUSR2', function () {
  console.log("on signal [SIGUSR2]");
  process.exit(0);
});

var server = http.createServer(function (request, response) {
  var mdContent = '';

  request.on('data', function (data) {
    mdContent += data;
  });

  request.on('end', function () {
    response.write(marked(mdContent));

    response.end();
  });
});

server.listen(PORT);
console.log("Marked engine is running at port: " + PORT);
