
<#include "macro-top.ftl">
<@top "link">
<h2 class="ranking-title">
    <svg class="ft-blue">
        <use xlink:href="#link"></use>
    </svg> ${linkRankLabel}</h2>
<div class="list top">
    <ul>
        <#list topLinks as link>
            <li class="fn-flex-1">
                <h2>
                    <a rel="bookmark" href="${servePath}/forward?goto=${link.linkAddr}">
                        ${link_index + 1}.${link.linkTitle}</a>
                    <span class="ft-gray ft-smaller"> &nbsp;
                        ${link.linkClickCnt?c} ${clickLabel}
                </span>
                </h2>
            </li>
        </#list>
        <#if topLinks?size == 0>
            <li class="ft-center ft-gray home-invisible">${chickenEggLabel}</li>
        </#if>
    </ul>
    <div class="fn-hr10"></div>
</div>
</@top>