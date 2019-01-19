<#include 'common/person-info.ftl'/>
<#if tag?? && tag.tagAd != ''>
    <div class="module">
        <div class="module-panel">
            ${tag.tagAd}
        </div>
    </div>
</#if>

<#if ADLabel!="" && ((tag?? && tag.tagShowSideAd == 0) || !tag??)>
<div class="module">
    <div class="module-header">
        <h2>
            ${sponsorLabel} 
            <a href="http://127.0.0.1:8080/article/1460083956075" class="fn-right ft-13 ft-gray" target="_blank">${wantPutOnLabel}</a>
        </h2>
    </div>
    <div class="module-panel ad fn-clear">
        ${ADLabel}
    </div>
</div>
</#if>
<#--
<#if navTrendTags?size!=0>
<div class="module">
    <div class="module-header">
        <h2>
            ${hotTopicLabel}
        </h2>
    </div>
    <div class="module-panel">
        <ul class="tags fn-clear">
            <#list navTrendTags as trendTag>
            <li>
                <a class="btn small" rel="nofollow" href="${servePath}/tag/${trendTag.tagURI}">${trendTag.tagTitle}</a>
            </li>
            </#list>
        </ul>
    </div>
</div>
</#if>
-->
<#if sideHotArticles?size!=0>
<div class="module">
    <div class="module-header">
        <h2>
            ${hotArticleLabel}
        </h2>
    </div>
    <div class="module-panel">
        <ul class="module-list">
            <#list sideHotArticles as hotArticle>
            <li<#if !hotArticle_has_next> class="last"</#if>>
                <#if "someone" != hotArticle.articleAuthorName>
                <a rel="nofollow" href="${servePath}/member/${hotArticle.articleAuthorName}"></#if>
                    <span class="avatar-small tooltipped tooltipped-se slogan"
                          aria-label="${hotArticle.articleAuthorName}"
                          style="background-image:url('${hotArticle.articleAuthorThumbnailURL20}')"></span>
                    <#if "someone" != hotArticle.articleAuthorName></a></#if>
                <a rel="nofollow" class="title" href="${servePath}${hotArticle.articlePermalink}">${hotArticle.articleTitleEmoj}</a>
            </li>
            </#list>
        </ul>
    </div>
</div>
</#if>
<#if sideTags?size!=0>
<div class="module">
    <div class="module-header">
        <h2>
            ${recommendedTags}
        </h2>
    </div>
    <div class="module-panel">
        <ul class="tag-desc fn-clear">
            <#list sideTags as tag>
            <li>
                <a rel="nofollow" href="${servePath}/tag/${tag.tagURI}">
                    <#if tag.tagIconPath!="">
                    <img src="${staticServePath}/images/tags/${tag.tagIconPath}" alt="${tag.tagTitle}" /></#if>
                    ${tag.tagTitle}
                </a>
                <div<#if tag.tagDescription == ''> style="width:auto"</#if>>
                    <div>${tag.tagDescription}</div>
                    <span class="fn-right">
                        <span class="ft-gray">${referenceLabel}</span> 
                        ${tag.tagReferenceCount} &nbsp;
                        <span class="ft-gray">${cmtLabel}</span>
                        ${tag.tagCommentCount}&nbsp;
                    </span>

                </div>
            </li>
            </#list>
        </ul>
    </div>
</div>
</#if>
<#if sideRandomArticles?size!=0>
<div class="module">
    <div class="module-header">
        <h2>
            ${randomArticleLabel}
        </h2>
    </div>
    <div class="module-panel">
        <ul class="module-list">
            <#list sideRandomArticles as randomArticle>
            <li<#if !randomArticle_has_next> class="last"</#if>>
                <#if "someone" != randomArticle.articleAuthorName>
                <a rel="nofollow" href="${servePath}/member/${randomArticle.articleAuthorName}"></#if>
                    <span aria-label="${randomArticle.articleAuthorName}"
                          style="background-image:url('${randomArticle.articleAuthorThumbnailURL20}')"
                          class="avatar-small tooltipped tooltipped-se slogan"></span>
                    <#if "someone" != randomArticle.articleAuthorName></a></#if>
                <a class="title" rel="nofollow" href="${servePath}${randomArticle.articlePermalink}">${randomArticle.articleTitleEmoj}</a>
            </li>
            </#list>
        </ul>
    </div>
</div>
</#if>
<#if newTags?size!=0>
<div class="module">
    <div class="module-header">
        <h2>
            ${newTagLabel}
        </h2>
    </div>
    <div class="module-panel">
        <ul class="fn-clear tags">
            <#list newTags as newTag>
            <li>
                <a class="ft-gray ft-13" rel="nofollow" href="${servePath}/tag/${newTag.tagURI}">${newTag.tagTitle}</a> &nbsp;
            </li>
            </#list>
        </ul>
    </div>
</div>
</#if>
