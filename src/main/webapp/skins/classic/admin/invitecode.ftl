<#include "macro-admin.ftl">
<@admin "invitecodes">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${unmodifiableLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin fn__flex">
            <label>
                <div>Id</div>
                <input onfocus="this.select()" type="text" id="oId" value="${invitecode.oId}" readonly="readonly"/>
            </label>

            <label>
                <div>Code</div>
                <input onfocus="this.select()" type="text" id="code" name="code" value="${invitecode.code}"
                       readonly="readonly"/>
            </label>

            <label>
                <div>${invitecodeUserLabel}</div>
                <input onfocus="this.select()" type="text" id="userId" name="userId" value="${invitecode.userId}"
                       readonly="readonly"/>
            </label>

            <label>
                <div>${useTimeLabel}</div>
                <input onfocus="this.select()" type="text" id="useTime" name="useTime"
                       value="<#if invitecode.useTime != 0>${invitecode.useTime?number_to_datetime}</#if>"
                       readonly="readonly"/>
            </label>
        </div>
    </div>
    <#if permissions["icUpdateICBasic"].permissionGrant>
    <div class="module">
        <div class="module-header">
            <h2>${modifiableLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/invitecode/${invitecode.oId}" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${statusLabel}</div>
                        <select id="status" name="status">
                            <option value="0"<#if 0 == invitecode.status> selected</#if>>${usedLabel}</option>
                            <option value="1"<#if 1 == invitecode.status> selected</#if>>${unusedLabel}</option>
                            <option value="2"<#if 2 == invitecode.status> selected</#if>>${stopUseLabel}</option>
                        </select>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${memoLabel}</div>
                        <input type="text" id="memo" name="memo" value="${invitecode.memo}"/>
                    </label>
                </div>
                <br>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
    </#if>
</div>
</@admin>