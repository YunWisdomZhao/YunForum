<#include "macro-admin.ftl">
<@admin "addUser">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${addUserLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/add-user" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${userNameLabel}</div>
                        <input name="userName" type="text"/>
                    </label>
                    <label class="mid">
                        <div>${emailLabel}</div>
                        <input name="userEmail" type="text"/>
                    </label>
                    <label>
                        <div>${passwordLabel}</div>
                        <input name="userPassword" type="text"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${roleLabel}</div>
                        <select id="domainNav" name="domainNav">
                            <option value="0">${programmerLabel}</option>
                            <option value="1">${designerLabel}</option>
                        </select>
                    </label>
                    <label class="mid"></label>
                    <label></label>
                </div>
                <br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
</div>
</@admin>