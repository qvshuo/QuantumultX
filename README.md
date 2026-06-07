# QuantumultX

用于 **Quantumult X** 的分流与重写规则集合。

## 功能

- **通用广告过滤**：由 AdGuard DNS Filter 转换而来
- **应用内去广告 & 去除开屏广告**：支持国内外众多应用
- **重写解锁**：解锁 **Emby Premiere**，部分解锁 **Spotify Premium**
- **体验增强**：**Reddit** 自动翻译 & 部分解锁 Premium，**NodeSeek** 自动签到

## 使用

### 分流规则

在 **Quantumult X** 配置文件的 `[filter_remote]` 部分添加：

```
https://raw.githubusercontent.com/qvshuo/QuantumultX/main/AdGuardDNSfilter.list, tag=AdGuard DNS Filter, update-interval=604800, opt-parser=false, enabled=true
```

### 重写规则

在 **Quantumult X** 配置文件的 `[rewrite_remote]` 部分添加：

去除广告：

```
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/BiliBiliAdBlockLite.conf, tag=哔哩哔哩 AdBlock Lite, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/AMapAdBlock.conf, tag=高德地图 AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/NeteaseCloudMusicAdBlock.conf, tag=网易云音乐 AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/XianYuAdBlock.conf, tag=闲鱼 AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/XiaoHongShuAdBlock.conf, tag=小红书 AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/RedditAdBlock.conf, tag=Reddit AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/YouTubeAdBlock.conf, tag=YouTube AdBlock, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/ZhihuAdBlock.js, tag=知乎 AdBlock, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/JavDBAdBlock.js, tag=JavDB AdBlock, update-interval=86400, opt-parser=true, enabled=true
```

重写解锁：
```
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/emby_premium.conf, tag=Emby Premiere, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/SpotifyPremium.conf, tag=Spotify Premiere, update-interval=86400, opt-parser=false, enabled=true
```

体验增强：

```
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/StartUpAdBlock.conf, tag=墨鱼去开屏, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/RedditAutoTranslate.snippet, tag=Reddit Auto Translate, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/NodeSeekAutoCheckIn.snippet, tag=NodeSeek 自动签到, update-interval=86400, opt-parser=false, enabled=true
```

额外步骤：

- 部分重写规则依赖资源解析器（e.g. [KOP-XIAO](https://github.com/KOP-XIAO) 的 [resource-parser.js](https://github.com/KOP-XIAO/QuantumultX/blob/master/Scripts/resource-parser.js)）；
- NodeSeek 自动签到功能所需额外步骤：

  ```
  5 0 * * * https://raw.githubusercontent.com/ZenmoFeiShi/Qx/refs/heads/main/Nodeseek_NsCheckin.js, tag=NS🍗签到, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/author/ZenMoFeiShi.png, enabled=true
  ```

## 说明

**通用广告过滤规则来源：**
- [AdGuard DNS Filter](https://github.com/AdguardTeam/AdGuardSDNSFilter) 

**应用内去广告 规则来源：**
- [ddgksf2013/Rewrite](https://github.com/ddgksf2013/Rewrite)：哔哩哔哩，小红书 和 知乎
- [墨魚手記](https://ddgksf2013.top)：高德地图，网易云音乐，闲鱼 和 Reddit
- [ZenmoFeiShi/Qx](https://github.com/ZenmoFeiShi/Qx)：YouTube

**去除开屏广告规则来源：**
- [墨魚手記](https://ddgksf2013.top)：详见 [墨鱼手记的去开屏需求共享文档](https://docs.google.com/spreadsheets/d/1HDDSd5uadmqyd0UuBsIJltuRzLdME0P6LuaWPbURgWM)

**Emby Premiere 解锁思路参考：**
- [Emby Premiere 破解思路 - 技术 - 远方](https://yuanfangblog.xyz/technology/159.html)
- [破解 emby-server - 软件逆向 - 看雪安全社区｜专业技术交流与安全研究论坛](https://bbs.kanxue.com/thread-263534-1.htm)

**Spotify Premium 解锁规则来源：**
- [app2smile/rules — iOS App去广告](https://github.com/app2smile/rules)

**Reddit 自动翻译规则来源：**
- [RavelloH - Reddit 自动翻译](https://gist.githubusercontent.com/RavelloH/68ed0626dae69a1ce7c8ad6887087ea1/raw/main.snippet)

**NodeSeek 自动签到规则来源与使用方法：**
- [ZenmoFeiShi/Qx](https://github.com/ZenmoFeiShi/Qx)
- 点击论坛个人头像进入用户空间页面以获取请求头
