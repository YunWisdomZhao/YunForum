
<#include "macro-admin.ftl">
<#include "../macro-pagination.ftl">
<@admin "breezemoons">
<div class="content admin">
    <div class="module list">
        <ul>
            <#list breezemoons as item>
            <li>
                <div class="fn-flex">
                    <div class="avatar tooltipped tooltipped-w" style="background-image:url('${item.breezemoonAuthorThumbnailURL48}')"
                         aria-label="${item.breezemoonAuthorName}"></div>
                    <div class="fn-flex-1">
                        <h2>
                            <span class="ft-smaller ft-gray">
                            <#if item.breezemoonStatus == 0>${validLabel}<#else>
                            <font class="ft-red">${banLabel}</font>
                            </#if> • ${item.breezemoonCreateTime?string('yyyy-MM-dd HH:mm')}
                            </span>
                        </h2>

                        <div class="content-reset">
                            ${item.breezemoonContent}
                        </div>
                    </div>
                    <a href="${servePath}/admin/breezemoon/${item.oId}" class="fn-right tooltipped tooltipped-e ft-a-title" aria-label="${editLabel}"><svg><use xlink:href="#edit"></use></svg></a>
                </div>
            </li>
            </#list>
        </ul>
        <@pagination url="${servePath}/admin/breezemoons"/>
    </div>
</div>
</@admin>