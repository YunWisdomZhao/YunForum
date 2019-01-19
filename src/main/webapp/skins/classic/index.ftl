<#include "macro-head.ftl">
<#include "common/title-icon.ftl">
<!DOCTYPE html>
<html>
<head>
        <@head title="${symphonyLabel}">
        <meta name="description" content="${symDescriptionLabel}"/>
        </@head>
<link rel="stylesheet" href="${staticServePath}/css/index.css?${staticResourceVersion}" />
<link rel="stylesheet" href="${staticServePath}/css/index-login.css?${staticResourceVersion}" />
<link rel="stylesheet" href="${staticServePath}/css/index-style.css?${staticResourceVersion}" />
<link rel="canonical" href="${servePath}">
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="${staticServePath}/js/lib/algolia/algolia.min.js?v2.0.0"></script>
<script src="${staticServePath}/js/style.common.js"></script>
<script src="${staticServePath}/js/style.index.js"></script>
<script src="${staticServePath}/js/vendors.symbol.js"></script>
</head>

<body class="index">${HeaderBannerLabel}
<#include "header.ftl">
<div class="main">

    <!--音乐-->
    <audio id="audios" controls="controls" volume="0.1" autoplay="autoplay" style="position: fixed;z-index: 999;animation: an 0.5s;bottom: 8px;right: 10px;border: aqua;">
        <source src="${randomMusicApi}?sort=新歌榜&format=mp3" type="audio/mpeg" />
        <source src="${randomMusicApi}?sort=热歌榜&format=mp3" type="audio/mpeg" />
        <source src="${randomMusicApi}?sort=电音榜&format=mp3" type="audio/mpeg" />
    </audio>

    <!--论坛Hot区-->
    <div class="wrapper index__first">

        <!--Hot帖子主区域-->
        <div class="fn__flex-1 fn__flex">
            <div class="index__recent fn__flex-1">
                <#list sideHotArticles as article>
                <#if article_index gt 6 && article_index lt 12>
                <div class="fn__flex">
                    <a href="${servePath}${article.articlePermalink}" class="preview" style="background-image: url('${randomLandscapeApi}?index=${article_index}');"></a>
                    <div class="fn__flex-1">
                        <h2 class="article-list__title article-list__title--view fn__ellipsis">
                            <a href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                        </h2>
                        <a href="${servePath}/member/${article.articleAuthorName}" aria-name="${article.articleAuthorName}" class="tooltipped__user ft-gray">${article.articleAuthorName}</a>
                        <#list article.articleTags?split(",") as articleTag>
                        <#if articleTag_index lt 4>
                        <a rel="tag" class="tag" href="${servePath}/tag/${articleTag}" style="font-size:10px;">${articleTag}</a>&nbsp;
                        </#if>
                        </#list>
                    </div>
                </div>
                </#if>
                </#list>
            </div>
            <div class="index__comment fn__flex-1">
                <#list questionRandomArticles as article>
                <#if article_index < 7 >
                <div class="fn__flex">
                    <a href="${servePath}/member/${article.articleAuthorName}">
                        <div class="avatar tooltipped__user" aria-name="${article.articleAuthorName}" style="background-image: url('${randomAvatarApi}?index=${article_index+1000}');"></div>
                    </a>
                    <a href="${servePath}${article.articlePermalink}" class="fn__flex-1 ft-gray">
                        <div class="fn__two-line">
                            ${article.articleContent?replace("${article.articleTitle}","","f")?replace("#","")?replace("*","")?replace("目录","")?replace("隐藏","")?replace("[","")?replace("]","")}
                        </div>
                    </a>
                </div>
                </#if>
                </#list>
            </div>
        </div>

        <!--边侧信息-->
        <div class="index__side fn__flex-column" style="margin-top:-12px;">
            <div class="ft__center module-panel">
                <ul class="module-list">
                <#list recentArticles as article>
                <#if article_index gt 12 >
                <li>
                    <a href="${servePath}/member/${article.articleAuthorName}">
                        <span class="avatar-small slogan tooltipped__user" aria-name="${article.articleAuthorName}" aria-label="${article.articleAuthorName}"  style="background-image:url('${randomAvatarApi}?index=${article_index}')"></span>
                    </a>
                    <a class="title fn-ellipsis" href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                    <a class="fn-right count ft-gray ft-smaller" href="${servePath}${article.articlePermalink}">
                        <#if article.articleViewCount < 1000>
                        ${article.articleViewCount}<#else>${article.articleViewCntDisplayFormat}
                        </#if>
                    </a>
                </li>
                </#if>
                </#list>
                </ul>
            </div>
        </div>
    </div>

    <!--介绍-->
    <div class="wrapper index__login">
        <div class="fn__flex-1 text">
            <h2>
                欢迎来到云图
            </h2>
            <br>
            <div class="ft-gray">
                我们正在构建一个活跃的小众社区，大家在这里相互信任，以平等 • 自由 • 奔放的价值观进行分享交流。最终，希望大家能够找到与自己志同道合的伙伴，共同成长。
            </div>
            <br>
            <#if !isLoggedIn>
            <a href="javascript:Util.goRegister()" target="_self" class="btn green">注册</a> &nbsp; &nbsp;
            <#else>
            <a href="${servePath}/tag/%E8%AF%BE%E5%A0%82" target="_self" class="btn purple">云课堂</a>&nbsp; &nbsp;
            </#if>
            <a href="${servePath}/article/1546929099122" class="btn red">关于</a>
        </div>
        <div class="fn__flex-1 bg"></div>
    </div>

    <!--中部BBS区-->
    <div class="index__mid">
        <div class="wrapper index__first">
            <div class="fn__flex-1">
                <div class="fn__flex index__perfect">
                    <div class="fn__flex-1 module module-mid-height">
                        <div class="module-header">
                            <h2>
                                最新
                                <a href="${servePath}/recent" class="fn__right">更多</a>
                            </h2>
                        </div>
                        <div class="module-panel">
                            <ul class="module-list">
                                <#list recentArticles as article>
                                <#if article_index < 13 >
                                <li>
                                    <a href="${servePath}/member/${article.articleAuthorName}">
                                        <span class="avatar-small slogan tooltipped__user" aria-name="${article.articleAuthorName}" aria-label="${article.articleAuthorName}"  style="background-image:url('${randomAvatarApi}?index=${article_index+100}')"></span>
                                    </a>
                                    <a class="title fn-ellipsis" href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                                    <a class="fn-right count ft-gray ft-smaller" href="${servePath}${article.articlePermalink}"><#if article.articleViewCount < 1000>
                                        ${article.articleViewCount}<#else>${article.articleViewCntDisplayFormat}</#if></a>
                                </li>
                                </#if>
                                </#list>
                            </ul>
                        </div>
                    </div>
                    <div class="fn__flex-1 module module-mid-height">
                        <div class="module-header">
                            <h2>
                                优选
                                <a href="${servePath}/recent/perfect" class="fn__right">更多</a>
                            </h2>
                        </div>
                        <div class="module-panel">
                            <ul class="module-list">
                                <#list perfectArticles as article>
                                <li>
                                    <a href="${servePath}/member/${article.articleAuthorName}">
                                        <span class="avatar-small slogan tooltipped__user" aria-name="ronger" aria-label="${article.articleAuthorName}"  style="background-image:url('${randomAvatarApi}?index=${article_index+200}')"></span>
                                    </a>
                                    <a class="title fn-ellipsis" href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                                    <a class="fn-right count ft-gray ft-smaller" href="${servePath}${article.articlePermalink}"><#if article.articleViewCount < 1000>
                                        ${article.articleViewCount}<#else>${article.articleViewCntDisplayFormat}</#if></a>
                                </li>
                                </#list>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="module index__chainbook">
                    <div class="module-header">
                        <h2>
                            <a href="${servePath}/tag/chainbook">书籍</a>
                            <span>&nbsp;&nbsp;</span>
                            <a href="${servePath}/chainbook" class="fn__right">更多</a>
                        </h2>
                    </div>
                    <div class="module__body fn__clear">
                        <a target="_blank" href="https://book.douban.com/subject/26462816/" class="chainbook__item">
                            <div class="chainbook__img" style="background-image: url(&quot;https://img.hacpai.com/books/db638f5e92b0b74cb68b376621574abb0a.jpeg?imageslim&quot;);"></div>
                            <div class="chainbook__main">
                                <div class="ft__smaller ft-fade fn-ellipsis">
                                    <span class="ft-blue">30</span>
                                    B3T
                                    &nbsp; • &nbsp;
                                    <span class="ft-gray">
                                             8.0
                                         </span> 豆瓣评分
                                </div>
                                <h2 class="chainbook__title">GitHub入门与实践</h2>
                                <div class="chainbook__code-img" data-src="https://img.hacpai.com/books/ma/1545328892527.jpg?imageslim"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="index__side">
                <div class="module module-mid-height">
                    <div class="module-header form">
                        <input id="breezemoonInput" type="text" class="comment__text breezemoon__input" placeholder="Search">
                        <span class="btn breezemoon__btn commonGoLogin">发布</span>
                    </div>
                    <div class="module-panel">
                        <ul class="module-list">
                            <#list sideRandomArticles as article>
                            <#if article_index < 13 >
                                <li>
                                    <a href="${servePath}/member/${article.articleAuthorName}">
                                        <span class="avatar-small slogan tooltipped__user" aria-name="ronger" aria-label="${article.articleAuthorName}"  style="background-image:url('${randomAvatarApi}?index=${article_index+300}')"></span>
                                    </a>
                                    <a class="title fn-ellipsis" href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                                </li>
                            </#if>
                            </#list>
                            <#if sideHotArticles?size == 0>
                                <li>${chickenEggLabel}</li>
                            </#if>
                        </ul>
                    </div>
                </div>
                <div class="module module-small-height">
                    <div class="module-header">
                        <h2>
                            近期热议
                        </h2>
                    </div>
                    <div class="module-panel">
                        <ul class="module-list">
                            <#list sideHotArticles as article>
                            <#if article_index < 7 >
                            <li>
                                <a href="${servePath}/member/${article.articleAuthorName}">
                                    <span class="avatar-small slogan tooltipped__user" aria-name="ronger" aria-label="${article.articleAuthorName}"  style="background-image:url('${randomAvatarApi}?index=${article_index+400}')"></span>
                                </a>
                                <a class="title fn-ellipsis" href="${servePath}${article.articlePermalink}">${article.articleTitleEmoj}</a>
                            </li>
                            </#if>
                            </#list>
                            <#if sideHotArticles?size == 0>
                                <li>${chickenEggLabel}</li>
                            </#if>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--下部问答区-->
    <div class="wrapper index__qna">
        <div class="module fn__flex-1">
            <div class="module-header">
                <h2>
                    问答
                    <a href="${servePath}/qna" class="fn__right">更多</a>
                    <span class="fn__right">&nbsp;&nbsp;</span>
                    <a rel="nofollow" class="fn__right" href="${servePath}/post?type=5">提问</a>
                </h2>
            </div>
            <div class="module-panel fn__flex">
                <ul class="fn__flex-1">
                    <#list questionArticles as article>
                    <#if article_index lt 10 >
                    <li class="article-list__item">
                        <div class="fn__flex article-list__panel">
                            <a href="${servePath}/member/${article.articleAuthorName}">
                                <div class="avatar tooltipped__user" aria-name="${article.articleAuthorName}" style="background-image: url('<#if article_index % 3  == 0 >${randomAvatarApi}?index=${article_index+500}<#elseif article_index % 3 == 1 >${randomAvatarApi}?index=${article_index+600}<#elseif article_index % 3 == 2 >${randomAvatarApi}?index=${article_index+700}</#if>');"></div>
                            </a>
                            <div class="fn__flex-1">
                                <h2 class="article-list__title article-list__title--view fn__ellipsis">
                                    <a rel="bookmark" href="${servePath}${article.articlePermalink}" target="_self">${article.articleTitle}</a>
                                </h2>
                                <#if article.articleTags?? >
                                <#list article.articleTags?split(",") as articleTag>
                                <#if articleTag_index lt 3>
                                <a rel="tag" class="tag" href="${servePath}/tag/${articleTag}" style="font-size:10px;">${articleTag}</a>&nbsp;
                                </#if>
                                </#list>
                                </#if>
                            </div>
                            <a class="qna__item ft__center" href="${servePath}${article.articlePermalink}" target="_self">
                                <div class="article-level0 <#if article.articleQnAOfferPoint gt 100>red</#if>">${article.articleQnAOfferPoint}</div>
                                <div class="ft__smaller ft__fade">悬赏积分</div>
                            </a>
                        </div>
                    </li>
                    </#if>
                    </#list>
                </ul>
                <ul class="module-list fn__flex-1">
                    <#list questionArticles as article>
                    <#if article_index gt 9 && article_index lt 25>
                    <li>
                        <a href="${servePath}/member/${article.articleAuthorName}">
                            <span class="avatar-small slogan tooltipped__user" aria-name="${article.articleAuthorName}" style="background-image: url('${randomAvatarApi}?index=${article_index+800}');"></span>
                        </a>
                        <a href="${servePath}${article.articlePermalink}" class="title fn__ellipsis">${article.articleTitle}</a>
                    </li>
                    </#if>
                    </#list>
                </ul>
            </div>
        </div>
        <div class="module index__side">
            <div class="module-header">
                <h2 class="fn__clear">
                    工作
                    <a href="${servePath}/domain/jobs" class="fn__right">更多</a>
                    <span class="fn__right">&nbsp;&nbsp;</span>
                    <a rel="nofollow" href="${servePath}/post?type=2&amp;tags=求职,简历" class="fn__right">发简历</a>
                    <span class="fn__right">&nbsp;&nbsp;</span>
                    <a rel="nofollow" href="${servePath}/post?type=2&amp;tags=招聘" class="fn__right">发招聘</a>
                </h2>
            </div>
            <div class="module-panel">
                <ul class="module-list">
                    <#list recruitRandomArticles as article>
                    <#if article_index lt 12 >
                    <li>
                        <a href="${servePath}/member/${article.articleAuthorName}">
                            <span class="avatar-small slogan tooltipped__user" aria-name="${article.articleAuthorName}" style="background-image: url('${randomAvatarApi}?index=${article_index+900}');"></span>
                        </a>
                        <a href="${servePath}${article.articlePermalink}" class="title fn__ellipsis">${article.articleTitle}</a>
                    </li>
                    </#if>
                    </#list>
                </ul>
            </div>
        </div>
    </div>

    <!--底部Tag区-->
    <div class="index__bottoms">
        <div class="wrapper">
            <div class="fn__flex-1">
                <div class="fn-flex-1">
                    <div class="metro-line fn-flex fn__clear">
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/culture">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                                </svg>
                                <b>文化</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/life">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M16 4.258l2.305 3.742h-4.609l2.304-3.742zM26.83 21.863h-4.585l2.281-3.714 2.304 3.714zM5.172 21.863l2.304-3.714 2.281 3.714h-4.585zM11.070 24l4.93 8 4.932-8h9.838l-4.93-7.988 4.93-8.012h-9.838l-4.932-8-4.93 8h-9.839l4.932 8.012-4.932 7.988h9.839zM26.83 10.137l-2.304 3.735-2.281-3.735h4.585zM16 27.74l-2.304-3.74h4.609l-2.305 3.74zM8.789 16.012l3.594-5.876h7.236l3.595 5.876-3.617 5.851h-7.212l-3.595-5.851zM5.172 10.137h4.585l-2.281 3.735-2.304-3.735z"></path> </svg>
                                <b>生活</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/frontend">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M21.714 4.571l-3.429 3.429 8 8-8 8 3.429 3.429 10.286-11.429-10.286-11.429zM10.286 4.571l-10.286 11.429 10.286 11.429 3.429-3.429-8-8 8-8-3.429-3.429z"></path> </svg>
                                <b>前端</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/backend">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M30 10h-28c-1.105 0-2-0.895-2-2v-4c0-1.105 0.895-2 2-2h28c1.105 0 2 0.895 2 2v4c0 1.105-0.895 2-2 2zM27 4.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5zM23 4.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5zM30 20h-28c-1.105 0-2-0.895-2-2v-4c0-1.105 0.895-2 2-2h28c1.105 0 2 0.895 2 2v4c0 1.105-0.895 2-2 2zM27 14.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5zM23 14.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5zM30 30h-28c-1.105 0-2-0.895-2-2v-4c0-1.105 0.895-2 2-2h28c1.105 0 2 0.895 2 2v4c0 1.105-0.895 2-2 2zM27 24.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5zM23 24.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5z"></path> </svg>
                                <b>后端</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/jobs">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M11.429 6.857h9.143v-2.286h-9.143v2.286zM32 18.286v8.571c0 1.571-1.286 2.857-2.857 2.857h-26.286c-1.571 0-2.857-1.286-2.857-2.857v-8.571h12v2.857c0 0.625 0.518 1.143 1.143 1.143h5.714c0.625 0 1.143-0.518 1.143-1.143v-2.857h12zM18.286 18.286v2.286h-4.571v-2.286h4.571zM32 9.714v6.857h-32v-6.857c0-1.571 1.286-2.857 2.857-2.857h6.286v-2.857c0-0.946 0.768-1.714 1.714-1.714h10.286c0.946 0 1.714 0.768 1.714 1.714v2.857h6.286c1.571 0 2.857 1.286 2.857 2.857z"></path> </svg>
                                <b>工作</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/blockchain">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M26.286 16.914l-6.171-5.943-5.029 7.086-2.514-15.771-7.131 14.629h-5.44v4.571h8.229l2.057-4.114 2.057 12.343 8.229-11.657 3.657 3.429h7.771v-4.571h-5.714z"></path> </svg>
                                <b>区块链</b>
                            </a>
                        </div>
                        <div class="metro-item" style="height: 139px;">
                            <a class="preview" href="${servePath}/domain/promos">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M6.779 14.962l3.295-2.39 3.296 2.39-1.258-3.869 3.295-2.392h-4.075l-1.258-3.869-1.258 3.869h-4.075l3.296 2.392z"></path> <path d="M20.148 10.667c0-5.564-4.51-10.074-10.074-10.074-5.565 0-10.074 4.51-10.074 10.074 0 3.076 1.382 5.826 3.556 7.674v13.067l6.519-3.556 6.519 3.556v-13.067c2.174-1.847 3.556-4.597 3.556-7.674zM2.37 10.667c0-4.248 3.456-7.704 7.704-7.704s7.704 3.456 7.704 7.704-3.456 7.704-7.704 7.704-7.704-3.456-7.704-7.704zM14.222 27.414l-4.148-2.263-4.148 2.263v-7.574c1.266 0.573 2.668 0.9 4.148 0.9s2.882-0.328 4.148-0.9v7.574z"></path> <path d="M22.519 7.704h9.481v2.37h-9.481v-2.37z"></path> <path d="M22.519 14.815h9.481v2.37h-9.481v-2.37z"></path> <path d="M18.963 21.926h13.037v2.37h-13.037v-2.37z"></path> </svg>
                                <b>推介</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<#include "footer.ftl">
<script src="${staticServePath}/js/channel${miniPostfix}.js?${staticResourceVersion}"></script>
<script src="${staticServePath}/js/index.js"></script>
<script src="${staticServePath}/js/vendors.js"></script>
<script type="text/javascript">

$("#audios")[0].volume = 0.1;
$('.metro-item').height($('.metro-item').width());

// tag click
$('.preview, .index-tabs > span').click(function (event) {
    var $it = $(this),
    maxLen = Math.max($it.width(), $it.height());
    $it.prepend('<span class="ripple" style="top: ' + (event.offsetY - $it.height() / 2)
        + 'px;left:' + (event.offsetX - $it.width() / 2) + 'px;height:' + maxLen + 'px;width:' + maxLen + 'px"></span>');

    setTimeout(function () {
        $it.find('.ripple').remove();
    }, 800);
});

var Label = {
    confirmLogoutLabel: '确定需要登出黑客派？',
    version: '3.4.6',
    moreLabel: '更多',
    hideLabel: '隐藏',
    chatLabel: '聊天',
    openOrgImgLabel: '查看原图',
    downloadLabel: '下载',
    revolveLabel: '旋转',
    nextPageLabel: '下一页',
    YCYLabel: '异次元空间',
    markedAvailable: true,
    searchTimeTipLabel: '⚡️ 已找到 <strong>{count}</strong> 个相关结果（用时 <strong>{time}ms</strong>）',
    searchEmptyLabel: '暂时没有搜索到相关的数据 :(',
    statUserLabel: '用户',
    tagLabel: '标签',
    articleLabel: '帖子',
    updateNameTipLabel: '（修改用户名需消耗 {point} 积分）',
    certainLabel: '确定',
    deactivateAccountLabel: '永久停用账号',
    tipLabel: '提示',
    reportContentLabel: '请说明举报理由',
    miscLabel: '其他',
    reportSuccLabel: '举报成功',
    spamADLabel: '垃圾广告',
    pornographicLabel: '低俗色情',
    violationOfRegulationsLabel: '违法违规',
    allegedlyInfringingLabel: '涉嫌侵权',
    personalAttacksLabel: '人身攻击',
    posingAccountLabel: '冒充账号',
    spamADAccountLabel: '垃圾广告账号',
    personalInfoViolationLabel: '个人信息违规',
    reportLabel: '举报',
    noMessageLabel: '无消息',
    invalidQnAOfferPointLabel: '悬赏积分必须大于等于 20',
    submitLabel: '提交',
    nextStepLabel: '下一步',
    breezemoonLabel: '清风明月',
    breezemoonDescriptionLabel: '只与清风、明月为伴。',
    invalidUserNameLabel: '用户名仅允许使用数字或字母，最大长度 20',
    finshLabel: '完成',
    invalidEmailLabel: '邮箱地址格式有误',
    confirmPwdErrorLabel: '密码输入不一致',
    captchaErrorLabel: '验证码错误',
    imgMaxSize: 10485760,
    fileMaxSize: 20971520,
    miniPostfix: '.min',
    messageLabel: '消息',
    desktopNotificationTemplateLabel: '你有一些未读消息',
    invalidPasswordLabel: '密码格式有误（数字及字母组合，长度 6-16）',
    loginNameErrorLabel: '登录名称长度 1-256',
    followLabel: '关注',
    unfollowLabel: '取消关注',
    symphonyLabel: '黑客派',
    cmtLabel: '回帖',
    collectLabel: '收藏',
    uncollectLabel: '取消收藏',
    copyLabel: '复制',
    copiedLabel: '已复制',
    servePath: 'http://127.0.0.1:8080',
    staticServePath: 'https://static.hacpai.com',
    isLoggedIn: true,
    funNeedLoginLabel: '登录后才能使用该功能',
    notificationCommentedLabel: '收到的回帖',
    notificationReplyLabel: '收到的回复',
    notificationAtLabel: '提及我的',
    notificationFollowingLabel: '我关注的',
    pointLabel: '积分',
    sameCityLabel: '同城',
    systemLabel: '系统',
    walletLabel: '钱包',
    newFollowerLabel: '新关注者',
    makeAsReadLabel: '标记为已读',
    commaLabel: '，',
    canDragLabel: '可拖拽',
    setEmotionLabel: '设置常用表情',
    year: '2019',
    mouseEffects: true,
    killBrowserLabel: '<div class="fn__clear content-reset">为了让浏览器更好的发展，人类更加的进步，拥有更好的体验，让我们放弃使用那些过时、不安全的浏览器。<p>你可以下载：</p><ul class="fn__left"><li><a href="http://www.google.com/chrome" target="_blank" rel="noopener">谷歌浏览器</a></li><li><a href="http://www.mozilla.com/" target="_blank" rel="noopener">火狐</a></li><li><a href="http://se.360.cn/" target="_blank" rel="noopener">360</a> 或者 <a href="https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8" target="_blank" rel="noopener">其它浏览器</a></li></ul><img class="fn__right" alt="Kill IE6" title="Kill IE6" src="/images/kill-browser.png"></div>',
    killBrowserTitleLabel: '让我们放弃使用那些过时、不安全的浏览器吧！',
    activityStartEatingSnakeTipLabel: '玩一局需要 【{point}】积分，确定开始么？',
    activityStartGobangTipLabel: '玩一局需要 【{point}】积分，确定开始么？',
    activityAskForDrawLabel: '对方请求和棋，是否同意？',
    newVersionAvailableLabel: '新版本可用',
    colonLabel: '：',
    upToDateLabel: '已是最新版',
    amountNotEmpty: '数额不能为空',
    updateFailLabel: '更新失败',
    updateSuccLabel: '更新成功',
    transferSuccLabel: '转账成功',
    invalidUserURLLabel: '链接需要符合 URL（协议://地址），最大长度 100',
    tagsErrorLabel: '最多包含 4 个标签，每个标签长度 1-9，请勿包含特殊符号',
    invalidUserQQLabel: 'QQ 号必须为数字，最大长度 12',
    invalidUserIntroLabel: '个人简介最大长度 255',
    invalidUserB3KeyLabel: 'B3 Key 最大长度 20',
    invalidUserB3ClientURLLabel: 'B3 客户端接口最大长度 150',
    invalidUserNicknameLabel: '昵称最大长度 20',
    previewLabel: '预览',
    unPreviewLabel: '取消预览',
    invalidPhoneLabel: '手机号有误',
    uploadLabel: '上传',
    addBoldLabel: '添加粗体',
    addItalicLabel: '添加斜体',
    insertQuoteLabel: '插入引用',
    addBulletedLabel: '添加无序列表',
    addNumberedListLabel: '添加有序列表',
    addLinkLabel: '添加链接',
    undoLabel: '撤销',
    redoLabel: '恢复',
    helpLabel: '帮助',
    fullscreenLabel: '全屏',
    uploadFileLabel: '上传文件',
    insertEmojiLabel: '插入表情',
    articleTitleErrorLabel: '帖子标题长度 1-255',
    articleContentErrorLabel: '帖子内容长度 4-{maxArticleContentLength}',
    recordDeniedLabel: '授权后才可以使用音频',
    recordDeviceNotFoundLabel: '录音设备加载失败',
    audioRecordingLabel: '[录音中]',
    uploadingLabel: '[上传中请稍候]',
    articleRewardPointErrorLabel: '打赏区积分必须为正整数',
    discussionLabel: '机要',
    commonAtUser: 'true',
    commentErrorLabel: '回帖内容长度 1-2000',
    thankSentLabel: '谢意已传达~',
    notAllowCmtLabel: '该帖已关闭回帖',
    upLabel: '赞同',
    downLabel: '反对',
    removedLabel: '相关数据已被删除',
    stickConfirmLabel: '确定要消费 {point} 积分来置顶该帖子吗？',
    noRevisionLabel: '权限不足或内容没有发生过改变。',
    thankedLabel: '已感谢',
    thankLabel: '感谢',
    isAdminLoggedIn: false,
    adminLabel: '管理',
    thankSelfLabel: '老王，你家的瓜熟了~',
    replyLabel: '回复',
    referenceLabel: '引用',
    goCommentLabel: '跳转到回帖',
    commonUpdateCommentPermissionLabel: '更新回帖',
    noPermissionLabel: '你目前是<span class="ft-green">新手</span>，还不能使用该功能 <img align="absmiddle" alt=":flushed:" class="emoji" src="https://static.hacpai.com/emoji/graphics/flushed.png" title=":flushed:"><br><span class="ft-smaller">了解<a href="http://127.0.0.1:8080/article/1482057214675" target="_blank">社区信任体系</a></span>',
    rewardLabel: '打赏',
    closeLabel: '关闭',
    invalidAppRoleLabel: '角色有误',
    cancelLabel: '取消',
    userChannelURL: 'wss://hacpai.com:/user-channel?url=' + encodeURIComponent(window.location.href),
    csrfToken: 'mrrPQ0CalWnJ',
    confirmRemoveLabel: '确定删除么？',
    userNotifyStatus: '0',
    chatRoomChannelURL: 'wss://hacpai.com:/chat-room-channel',
    currentUserName: 'YunWisdom',
    currentUserId: '1546933203274',
    userKeyboardShortcutsStatus: '1',
    algoliaAppId: 'RORM6JWE5I',
    algoliaSearchKey: '71dbdd62005849ec443fbb8aa973a131',
}
</script>
</body>
</html>
