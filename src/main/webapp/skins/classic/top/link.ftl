
<#include "macro-top.ftl">
<@top "link">
<h2 class="sub-head">
    <svg>
        <use xlink:href="#link"></use>
    </svg> ${linkRankLabel}</h2>
<div class="list">
    <ul>
        <#list topLinks as link>
           <li class="fn-flex-1 fn-clear">
               <h2 class="fn-left">
                   <a rel="bookmark" href="${servePath}/forward?goto=${link.linkAddr}">
                       ${link_index + 1}. ${link.linkTitle}</a>
               </h2>
               <div class="ft-gray fn-right">
                   ${link.linkClickCnt?c} ${clickLabel}
               </div>
           </li>
        </#list>
        <#if topLinks?size == 0>
            <li class="ft-center ft-gray home-invisible">${chickenEggLabel}</li>
        </#if>
    </ul>
    <br/>
</div>
</@top>