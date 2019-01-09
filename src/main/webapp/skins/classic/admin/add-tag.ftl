<#include "macro-admin.ftl">
<@admin "addTag">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${addTagLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/add-tag" method="POST" class="fn__flex">
                <label>
                    <div>${tagLabel}</div>
                    <input type="text" name="tagTitle"/>
                </label>
                <div>
                    &nbsp; &nbsp;
                    <button type="submit" class="green fn-right btn--admin">${submitLabel}</button>
                </div>
            </form>
        </div>
    </div>
</div>
</@admin>