
<#include "macro-admin.ftl">
<@admin "addDomain">
<div class="content">
    <#if permissions["domainAddDomain"].permissionGrant>
        <div class="module">
            <div class="module-header">
                <h2>${addDomainLabel}</h2>
            </div>
            <div class="module-panel form fn-clear form--admin">
                <form action="${servePath}/admin/add-domain" class="fn__flex" method="POST">
                    <label>
                        <div>${titleLabel}</div>
                        <input name="domainTitle" type="text" />
                    </label>
                    <div>
                        &nbsp; &nbsp;
                        <button type="submit" class="green fn-right btn--admin">${submitLabel}</button>
                    </div>
                </form>
            </div>
        </div>
    </#if>
</div>
</@admin>