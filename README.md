# QuantumultX

用于 **Quantumult X** 的分流与重写规则集合。

## 功能

- **广告过滤**：由 AdGuard DNS Filter 转换而来
- **重写解锁**：解锁 **Emby Premiere**，部分解锁 **Spotify Premium**

## 使用

### 分流规则 (去广告)

在 **Quantumult X** 配置文件的 `[filter_remote]` 部分添加：

```
https://raw.githubusercontent.com/qvshuo/QuantumultX/main/AdGuardDNSfilter.list, tag=AdGuard DNS Filter, update-interval=604800, enabled=true
```

### 重写规则 (解锁)

在 **Quantumult X** 配置文件的 `[rewrite_remote]` 部分添加：

```
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/emby_premium.conf, tag=Emby Premiere, update-interval=86400, enabled=true
https://raw.githubusercontent.com/qvshuo/QuantumultX/refs/heads/main/spotify.conf, tag=Spotify Premium, update-interval=86400, enabled=true
```

## 说明

**广告过滤规则来源：**
- [AdGuardSDNSFilter](https://github.com/AdguardTeam/AdGuardSDNSFilter) (由 GitHub Actions 每周自动转换更新)

**Emby Premiere 解锁思路参考：**
- [Emby Premiere 破解思路 - 技术 - 远方](https://yuanfangblog.xyz/technology/159.html)
- [破解 emby-server - 软件逆向 - 看雪安全社区｜专业技术交流与安全研究论坛](https://bbs.kanxue.com/thread-263534-1.htm)

**Spotify Premium 解锁规则来源：**
- [app2smile/rules — iOS App去广告](https://github.com/app2smile/rules)
