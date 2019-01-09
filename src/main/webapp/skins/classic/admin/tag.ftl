<#include "macro-admin.ftl">
<@admin "tags">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${unmodifiableLabel}</h2>
        </div>
        <div class="module-panel form fn__flex form--admin">
            <label>
                <div>Id</div>
                <input onfocus="this.select()" type="text" id="oId" value="${tag.oId}" readonly="readonly"/>
            </label>
            <label>
                <div>${refCountLabel}</div>
                <input onfocus="this.select()" type="text" id="tagReferenceCount" name="tagReferenceCount"
                       value="${tag.tagReferenceCount?c}"
                       readonly="readonly"/>
            </label>
            <label>
                <div>${commentCountLabel}</div>
                <input onfocus="this.select()" type="text" id="tagCommentCount" name="tagCommentCount"
                       value="${tag.tagCommentCount?c}"
                       readonly="readonly"/>
            </label>
            <label>
                <div>${followerCountLabel}</div>
                <input onfocus="this.select()" type="text" id="tagFollowerCount" name="tagFollowerCount" readonly
                       value="${tag.tagFollowerCount?c}"/>
            </label>
        </div>
    </div>
    <#if permissions["tagUpdateTagBasic"].permissionGrant>
    <div class="module">
        <div class="module-header">
            <h2>${modifiableLabel}</h2>
        </div>
        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/tag/${tag.oId}" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${tagLabel}${updateCaseOnlyLabel}</div>
                        <input type="text" id="tagTitle" name="tagTitle" value="${tag.tagTitle}"/>
                    </label>
                    <label class="mid">
                        <div>URI</div>
                        <input type="text" id="tagURI" name="tagURI" value="${tag.tagURI}"/>
                    </label>
                    <label></label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${descriptionLabel}</div>
                        <textarea rows="5" id="tagDescription" name="tagDescription">${tag.tagDescription}</textarea>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${iconPathLabel}</div>
                        <input type="text" id="tagIconPath" name="tagIconPath" value="${tag.tagIconPath}"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${tagStatusLabel}</div>
                        <select id="tagStatus" name="tagStatus">
                            <option value="0"<#if 0 == tag.tagStatus> selected</#if>>${validLabel}</option>
                            <option value="1"<#if 1 == tag.tagStatus> selected</#if>>${banLabel}</option>
                        </select>
                    </label>
                    <label class="mid">
                        <div>${badCntLabel}</div>
                        <input type="text" id="tagBadCnt" name="tagBadCnt" value="${tag.tagBadCnt}"/>
                    </label>
                    <label>
                        <div>${goodCntLabel}</div>
                        <input type="text" id="tagGoodCnt" name="tagGoodCnt" value="${tag.tagGoodCnt}"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${seoKeywordsLabel}</div>
                        <input type="text" id="seoKeywords" name="tagSeoKeywords" value="${tag.tagSeoKeywords}"/>
                    </label>
                    <label class="mid">
                        <div>${seoDescLabel}</div>
                        <input type="text" id="seoDesc" name="tagSeoDesc" value="${tag.tagSeoDesc}"/>
                    </label>
                    <label>
                        <div>${seoTitleLabel}</div>
                        <input type="text" id="seoTitle" name="tagSeoTitle" value="${tag.tagSeoTitle}"/>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>CSS</div>
                        <textarea rows="5" id="tagCSS" name="tagCSS">${tag.tagCSS}</textarea>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${adPosLabel}</div>
                        <textarea rows="5" id="tagAd" name="tagAd">${tag.tagAd}</textarea>
                    </label>
                </div>
                <div class="fn__flex">
                    <label>
                        <div>${showSideAdLabel}</div>
                        <select name="tagShowSideAd">
                            <option value="0"<#if 0 == tag.tagShowSideAd> selected</#if>>${yesLabel}</option>
                            <option value="1"<#if 1 == tag.tagShowSideAd> selected</#if>>${noLabel}</option>
                        </select>
                    </label>
                </div>
                <br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
    </#if>
</div>
</@admin>