
<#macro notifications type>
<#include "../../macro-head.ftl">
<#include "../../macro-pagination.ftl">
<#include "../../common/title-icon.ftl">
<!DOCTYPE html>
<html>
    <head>
        <@head title="${messageLabel} - ${currentUser.userName} - ${symphonyLabel}">
        <meta name="robots" content="none" />
        </@head>
    </head>
    <body>
        <#include "../../header.ftl">
        <div class="main">
            <div class="tab-current fn-clear">
                <div class="fn-hr5"></div>
                <div onclick="$(this).next().next().slideToggle()">
                    ${messageLabel}
                    <svg class="fn-right"><use xlink:href="#chevron-down"></use></svg>
                </div>
                <div class="fn-hr5"></div>
                <ul class="tab fn-clear fn-none notification-tab">
                    <li>
                        <a href="${servePath}/notifications/commented">
                            <span>${notificationCommentedLabel}</span>
                        </a>
                        <#if unreadCommentedNotificationCnt &gt; 0>
                        <span class="count">${unreadCommentedNotificationCnt}</span>
                        <span class="ft-gray fn-right" onclick="Util.makeNotificationRead('commented')" class="fn-right">
                            ${makeAsReadLabel}
                        </span>
                        </#if>
                        <#if type == "commented" && commentedNotifications?size != 0>
                            <span class="fn-right">&nbsp;</span>
                            <span onclick="Settings.removeNotifications('commented')"
                                  class="fn-right ft-red">
                                ${removeAllLabel}
                            </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/reply">
                            <span>${notificationReplyLabel}</span>
                        </a>
                        <#if unreadReplyNotificationCnt &gt; 0>
                        <span class="count">${unreadReplyNotificationCnt}</span>
                        <span class="ft-gray fn-right" onclick="Util.makeNotificationRead('reply')" class="fn-right">
                            ${makeAsReadLabel}
                        </span>
                        </#if>
                        <#if type == "reply" && replyNotifications?size != 0>
                        <span class="fn-right">&nbsp;</span>
                        <span onclick="Settings.removeNotifications('reply')"
                              class="fn-right ft-red">
                            ${removeAllLabel}
                        </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/at">
                            <span>${notificationAtLabel}</span>
                        </a>
                        <#if unreadAtNotificationCnt &gt; 0>
                        <span class="count">${unreadAtNotificationCnt}</span>
                        <span class="ft-gray fn-right" onclick="Util.makeNotificationRead('at')" class="fn-right">
                            ${makeAsReadLabel}
                        </span>
                        </#if>
                        <#if type == "at" && atNotifications?size != 0>
                        <span class="fn-right">&nbsp;</span>
                        <span onclick="Settings.removeNotifications('at')"
                              class="fn-right ft-red">
                            ${removeAllLabel}
                        </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/following">
                            <span>${notificationFollowingLabel}</span>
                        </a>
                        <#if unreadFollowingNotificationCnt &gt; 0>
                        <span class="count">${unreadFollowingNotificationCnt}</span>
                        <span class="ft-gray fn-right" onclick="Util.makeNotificationRead('following')" class="fn-right">
                            ${makeAsReadLabel}
                        </span>
                        </#if>
                        <#if type == "following" && followingNotifications?size != 0>
                        <span class="fn-right">&nbsp;</span>
                        <span onclick="Settings.removeNotifications('following')"
                              class="fn-right ft-red">
                            ${removeAllLabel}
                        </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/point">
                            <span>${pointLabel}</span>
                        </a>
                        <#if unreadPointNotificationCnt &gt; 0>
                        <span class="count">${unreadPointNotificationCnt}</span>
                        </#if>
                        <#if type == "point" && pointNotifications?size != 0>
                        <span class="fn-right">&nbsp;</span>
                        <span onclick="Settings.removeNotifications('point')"
                              class="fn-right ft-red">
                            ${removeAllLabel}
                        </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/broadcast">
                            <span>${sameCityLabel}</span>
                        </a>
                        <#if unreadBroadcastNotificationCnt &gt; 0>
                        <span class="count">${unreadBroadcastNotificationCnt}</span>
                        </#if>
                        <#if type == "broadcast" && broadcastNotifications?size != 0>
                        <span class="fn-right">&nbsp;</span>
                        <span onclick="Settings.removeNotifications('broadcast')"
                              class="fn-right ft-red">
                            ${removeAllLabel}
                        </span>
                        </#if>
                    </li>
                    <li>
                        <a href="${servePath}/notifications/sys-announce">
                            <span>${systemLabel}</span>
                            <#if unreadSysAnnounceNotificationCnt &gt; 0>
                            <span class="count">${unreadSysAnnounceNotificationCnt}</span>
                            </#if>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="list content">
                <#nested>
            </div>
        </div>
        <#include "../../footer.ftl">
    <script src="${staticServePath}/js/settings${miniPostfix}.js?${staticResourceVersion}"></script>
    </body>
</html>
</#macro>
