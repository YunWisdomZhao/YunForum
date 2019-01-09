<#include "macro-admin.ftl">
<@admin "misc">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${modifiableLabel}</h2>
        </div>

        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/misc" method="POST">
                <#list options as item>
                    <#if (permissions["miscAllowAddArticle"].permissionGrant && item.oId == 'miscAllowAddArticle')
                    || (permissions["miscAllowAddComment"].permissionGrant && item.oId == 'miscAllowAddComment')
                    || (permissions["miscAllowAnonymousView"].permissionGrant && item.oId == 'miscAllowAnonymousView')
                    || (permissions["miscLanguage"].permissionGrant && item.oId == 'miscLanguage')
                    || (permissions["miscRegisterMethod"].permissionGrant && item.oId == 'miscAllowRegister')
                    >
                    <div class="fn__flex">
                        <label>
                            <div>${item.label}</div>
                            <select id="${item.oId}" name="${item.oId}">
                            <#if "miscAllowRegister" == item.oId || "miscAllowAnonymousView" == item.oId ||
                            "miscAllowAddArticle" == item.oId || "miscAllowAddComment" == item.oId>
                            <option value="0"<#if "0" == item.optionValue> selected</#if>>${yesLabel}</option>
                            <option value="1"<#if "1" == item.optionValue> selected</#if>>${noLabel}</option>
                                <#if "miscAllowRegister" == item.oId>
                            <option value="2"<#if "2" == item.optionValue> selected</#if>>${invitecodeLabel}</option>
                                </#if>
                            </#if>
                            <#if "miscLanguage" == item.oId>
                            <option value="0"<#if "0" == item.optionValue>
                                    selected</#if>>${selectByBrowserLabel}</option>
                            <option value="zh_CN"<#if "zh_CN" == item.optionValue> selected</#if>>zh_CN</option>
                            <option value="en_US"<#if "en_US" == item.optionValue> selected</#if>>en_US</option>
                            </#if>
                            </select>
                        </label>
                    </div>
                    </#if>
                    <#if "miscArticleVisitCountMode" == item.oId>
                    <div class="fn__flex">
                        <label>
                            <div>${item.label}</div>
                            <select name="${item.oId}">
                                <option value="0"<#if "0" == item.optionValue> selected</#if>>${noDeduplicateLabel}</option>
                                <option value="1"<#if "1" == item.optionValue> selected</#if>>${deduplicateLabel}</option>
                            </select>
                        </label>
                    </div>
                    </#if>
                </#list>

                <br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
</div>
</@admin>
