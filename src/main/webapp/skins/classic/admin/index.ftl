<#include "macro-admin.ftl">
<@admin "index">
<div class="content admin-index">
    <div class="module">
        <div class="module-header">
            <h2><span class="ft-red">使用须知</span>
                <div class="fn-right">
                    ${currentVersionLabel} <span id="version">${version}</span>${commaLabel}
                    <span id="upgrade">${checkVersionLabel}</span>
                </div>
            </h2>
        </div>
        <div class="module-panel content-reset ft-blue fn-content">
            <ul>
                <li>Sym 社区版使用 AGPL 开源协议，请务必保证所有代码及其衍生代码开源，并在页脚放置开源库地址</li>
                <li>云南链滴科技有限公司保留追究侵权人法律责任的权利</li>
            </ul>
        </div>
    </div>
    <div class="module fn-content content-reset">
        <ul>
            <li>${onlineVisitorCountLabel} ${onlineVisitorCnt?c}</li>
            <li>${onlineMemberCountLabel} ${onlineMemberCnt?c}</li>
            <li>${maxOnlineVisitorCountLabel} ${statistic.statisticMaxOnlineVisitorCount?c}</li>
            <li>${memberLabel} ${statistic.statisticMemberCount?c}</li>
            <li>${articleLabel} ${statistic.statisticArticleCount?c}</li>
            <li>${cmtLabel} ${statistic.statisticCmtCount?c}</li>
            <li>${domainLabel} ${statistic.statisticDomainCount?c}</li>
            <li>${tagLabel} ${statistic.statisticTagCount?c}</li>
        </ul>
    </div>
</div>
</@admin>

<script>
    document.addEventListener('DOMContentLoaded', function (event) {
        $.ajax({
            url: 'https://rhythm.b3log.org/version/symphony/latest',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function (data, textStatus) {
                if ($('#version').text() === data.symphonyVersion) {
                    $('#upgrade').text('${upToDateLabel}')
                } else {
                    $('#upgrade').html('${newVersionAvailableLabel}' + '${colonLabel}'
                            + '<a href=\'' + data.symphonyDownload
                            + '\' target=\'_blank\'>' + data.symphonyVersion + '</a>')
                }
            },
        })
    })

</script>
