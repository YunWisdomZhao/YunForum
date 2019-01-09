<#include "macro-admin.ftl">
<@admin "ad">
<div class="content">
    <div class="module">
        <div class="module-header">
            <h2>${modifiableLabel}</h2>
        </div>

        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/ad/side" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${sideFullPosLabel}</div>
                        <textarea rows="20" name="sideFullAd">${sideFullAd}</textarea>
                    </label>
                </div>
                <br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>

        <div class="module-panel form fn-clear form--admin">
            <form action="${servePath}/admin/ad/banner" method="POST">
                <div class="fn__flex">
                    <label>
                        <div>${headerBannerPosLabel}</div>
                        <textarea rows="20" name="headerBanner">${headerBanner}</textarea>
                    </label>
                </div>
                <br/>
                <button type="submit" class="green fn-right">${submitLabel}</button>
            </form>
        </div>
    </div>
</div>
</@admin>
