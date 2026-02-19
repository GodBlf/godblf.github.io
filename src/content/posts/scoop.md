---
title: Scoop windows 包管理工具
published: 2026-02-19
description: windows 效率工具
tags: ["Scoop", "包管理工具", "Windows", "效率工具"]
draft: false
category: ToolSoftware
---

# windows 包管理工具
- 类似于 linux的 apt、yum、brew 等包管理工具，Scoop 是 Windows 上的一个命令行安装器，旨在简化软件的安装和管理过程。
- Scoop 通过使用 PowerShell 脚本来安装和管理软件包，可自动处理依赖关系，配置环境变量，并提供了一个简单的命令行界面来搜索、安装、更新和卸载软件。

# 更改下载位置
## 1. 设置用户软件安装路径
```powershell
$env:SCOOP='D:\Scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
```
## 2. 设置全局软件安装路径 (需管理员权限运行 PowerShell)
```powershell
$env:SCOOP_GLOBAL='D:\ScoopGlobal'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'Machine')
```
# 下载
irm get.scoop.sh | iex

# 命令
search,搜索软件,scoop search python
install,安装软件,scoop install git
uninstall,卸载软件,scoop uninstall nodejs
cache rm,删除下载的安装包缓存,scoop cache rm *
list,查看已安装列表,scoop list
info,查看软件详情,scoop info curl
status,检查可更新的软件,scoop status
update,更新软件/库,scoop update *
cleanup,清除旧版本缓存,scoop cleanup *
bucket add,添加软件仓库,scoop bucket add extras
checkup,系统健康检查,scoop checkup
alias,管理自定义别名,scoop alias add rm uninstall


