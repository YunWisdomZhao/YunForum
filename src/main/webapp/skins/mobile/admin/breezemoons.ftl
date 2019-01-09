<#include "macro-admin.ftl">
<#include "../macro-pagination.ftl">
<@admin "breezemoons">
<div class="list content admin">
    <ul>
        <#list breezemoons as item>
        <li>
            <div class="fn-clear">
                <div class="avatar" style="background-image:url('${item.breezemoonAuthorThumbnailURL48}')" title="${item.breezemoonAuthorName}"></div>
                <#if item.breezemoonStatus == 0>
                <span class="ft-gray">${validLabel}</span>
                <#else>
                <font class="ft-red">${banLabel}</font>
                </#if>
                <a href="${servePath}/admin/breezemoon/${item.oId}" class="fn-right">${editLabel}</a>
                <div class="fn-hr5"></div>
                ${createTimeLabel} ${item.breezemoonCreateTime?string('yyyy-MM-dd HH:mm')} &nbsp;
            </div>
            <div class="fn-hr5"></div>
            <div class="content-reset">
                 ${item.breezemoonContent}
            </div>
        </li>
        </#list>
    </ul>
    <@pagination url="${servePath}/admin/breezemoons"/>
</div>
</@admin>