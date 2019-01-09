<#include "macro-admin.ftl">
<#include "../macro-pagination.ftl">
<@admin "reports">
<div class="content admin">
    <div class="module list">
        <ul class="notification">
            <#list reports as item>
                <li class="<#if item.reportHandled != 0>read</#if>">
                    <div class="fn-flex">
                        <div class="fn-flex-1">
                            ${item.reportUserName}
                            ${reportLabel}
                            ${item.reportDataTypeStr}
                            ${item.reportData}
                            <div class="ft-smaller ft-gray">
                                ${item.reportTypeStr} •
                                ${item.reportTime?string('yyyy-MM-dd HH:mm')}
                                <#if item.reportHandled == 1>
                                • <span class="ft-green">${processLabel}</span>
                                <#elseif item.reportHandled == 2>
                                • <span class="ft-fade">${ignoreLabel}</span>
                                </#if>
                            </div>
                        </div>
                <#if item.reportHandled == 0>
                <div>
                    <button class="mid green" onclick="AdminReportHandled(this, '${item.oId}')">${processLabel}</button>
                    &nbsp;
                    <button class="mid" onclick="AdminReportCancel(this, '${item.oId}')">${ignoreLabel}</button>
                </div>
                </#if>
                    </div>
                    <div class="content-reset">
                        ${item.reportMemo}
                    </div>
                </li>
            </#list>
        </ul>
        <@pagination url="${servePath}/admin/reports"/>
    </div>
</div>
</@admin>
