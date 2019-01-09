
<#include "../macro-head.ftl">
    <!DOCTYPE html>
    <html>
    <head>
        <@head title="Markdown ${tutorialLabel} - ${symphonyLabel}" />
        <link rel="stylesheet" href="${staticServePath}/css/index.css?${staticResourceVersion}"/>
        <link rel="canonical" href="${servePath}/guide/markdown">
        <link rel="stylesheet" href="${staticServePath}/js/lib/highlight/styles/github.css">
    </head>
    <body>
    <#include "../header.ftl">
        <div class="main">
            <div class="wrapper guide">
                <div class="module">
                    <div class="module-header ft-center"><strong>Markdown ${tutorialLabel}</strong></div>
                    <div class="module-panel fn-flex">
                        <div class="md">
                            <pre>
${md}
                            </pre>
                        </div>
                        <div class="content-reset">
                            ${html}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <#include "../footer.ftl">
    <#if !markedAvailable>
    <script src="${staticServePath}/js/lib/highlight/highlight.pack.js"></script>
            <script>
             $('pre code').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
        </script>
    </#if>
    </body>
    </html>