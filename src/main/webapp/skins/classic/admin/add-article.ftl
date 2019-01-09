
<#include "macro-admin.ftl">
<@admin "addArticle">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${addArticleLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/add-article" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${titleLabel}</div>
                        <input name="articleTitle" type="text"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${userNameLabel}</div>
                        <input name="userName" type="text"/>
                    </label>
                    <label class="mid">
                        <div>${timeLabel}</div>
                        <input name="time" type="text"/>
                    </label>
                    <label>
                        <div>${tagLabel}</div>
                        <input name="articleTags" type="text"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${contentLabel}</div>
                        <textarea name="articleContent" rows="20"></textarea>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${rewardContentLabel}</div>
                        <textarea name="articleRewardContent" rows="6"></textarea>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${rewardPointLabel}</div>
                        <input name="articleRewardPoint" type="number" value="0"/>
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