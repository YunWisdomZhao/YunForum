
<#include "macro-admin.ftl">
<@admin "breezemoons">
<div class="wrapper">
    <div class="module">
        <div class="module-header">
            <h2>${unmodifiableLabel}</h2>
        </div>
        <div class="module-panel form fn-clear">
            <label for="oId">Id</label>
            <input type="text" id="oId" value="${breezemoon.oId}" readonly="readonly" />

            <label for="breezemoonAuthorId">${authorIdLabel}</label>
            <input type="text" id="breezemoonAuthorId" name="breezemoonAuthorId" value="${breezemoon.breezemoonAuthorId}" readonly="readonly" />

            <label for="breezemoonIP">IP</label>
            <input type="text" id="breezemoonIP" name="breezemoonIP" value="${breezemoon.breezemoonIP}" readonly="readonly" />

            <label for="breezemoonCity">${cityLabel}</label>
            <input type="text" id="breezemoonCity" name="breezemoonCity" value="${breezemoon.breezemoonCity}" readonly="readonly" />

            <label for="breezemoonUA">UA</label>
            <input type="text" id="breezemoonUA" name="breezemoonUA" value="${breezemoon.breezemoonUA}" readonly="readonly" />
        </div>
    </div>

    <#if permissions["breezemoonUpdateBreezemoon"].permissionGrant>
    <div class="module">
        <div class="module-header">
            <h2>${modifiableLabel}</h2>
        </div>
        <div class="module-panel form fn-clear">
            <form action="${servePath}/admin/breezemoon/${breezemoon.oId}" method="POST">
                <label>${statusLabel}</label>
                <select id="breezemoonStatus" name="breezemoonStatus">
                    <option value="0"<#if 0 == breezemoon.breezemoonStatus> selected</#if>>${validLabel}</option>
                    <option value="1"<#if 1 == breezemoon.breezemoonStatus> selected</#if>>${banLabel}</option>
                </select>

                <label for="breezemoonContent">${contentLabel}</label>
                <textarea id="breezemoonContent" name="breezemoonContent" rows="10">${breezemoon.breezemoonContent}</textarea>

                <br/><br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
    </#if>

    <#if permissions["breezemoonRemoveBreezemoon"].permissionGrant>
    <div class="module">
        <div class="module-header">
            <h2 class="ft-red">${removeDataLabel}</h2>
        </div>
        <div class="module-panel form fn-clear">
            <form action="${servePath}/admin/remove-breezemoon" method="POST" onsubmit="return window.confirm('${confirmRemoveLabel}')">
                <label for="breezemoonId">Id</label>
                <input type="text" id="id" name="id" value="${breezemoon.oId}" readonly="readonly"/>

                <br/><br/>
                <button type="submit" class="green fn-right" >${submitLabel}</button>
            </form>
        </div>
    </div>
    </#if>
</div>
</@admin>