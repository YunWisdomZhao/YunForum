
<#include "macro-admin.ftl">
<#include "../macro-pagination.ftl">
<@admin "auditlog">
<div class="content admin">
    <div class="module list">
        <ul class="notification">
            <#list operations as item>
                <li>
                    ${item.operationContent}
                    <span class="auditlogUA ft-smaller ft-fade" data-ua="${item.operationUA}"></span>
                    <div class="ft-smaller ft-gray">
                        ${item.operationUserName}
                        ${item.operationTime} • ${item.operationIP}
                    </div>
                </li>
            </#list>
        </ul>
        <@pagination url="${servePath}/admin/auditlog"/>
    </div>
</div>
</@admin>
