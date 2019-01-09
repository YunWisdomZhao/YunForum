
<#include "macro-admin.ftl">
<@admin "addReservedWord">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${allReservedWordLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/add-reserved-word" method="POST" class="fn__flex">
                <label>
                    <div>${reservedWordLabel}</div>
                    <input name="word" type="text"/>
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