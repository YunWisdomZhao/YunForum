
<#include "macro-admin.ftl">
<#include "../macro-pagination.ftl">
<@admin "auditlog">
<div class="admin">
    <div class="list">
        <ul class="notification">
            <#list operations as item>
                <li>
                    <div class="fn-flex">
                        <div class="fn-flex-1">
                            ${item.operationUserName}
                            ${item.operationContent}
                            <div class="ft-smaller ft-gray">
                                ${item.operationTime} • ${item.operationIP} • ${item.operationUA}
                            </div>
                        </div>
                    </div>
                </li>
            </#list>
        </ul>
        <@pagination url="${servePath}/admin/auditlog"/>
    </div>
</div>
</@admin>
