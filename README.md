# dsh-aurora-bg

DeepSeek 官网风格动态极光背景插件 for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）Web UI。

深蓝流体底色 + 细网格纹理 + 蓝紫光斑 + 金色流纹，多层独立旋转公转与漂移，鼠标移动产生层次视差——纯 CSS transform 实现，**无 canvas / 无 mask / 无 blur**，低资源占用，兼容性极稳。

## 效果

- 五层背景（网格 / 蓝紫光斑 / 金色反转层 / 顶部暖光 / 细密快转层）独立动画
- 各层不同转速与方向：金色层反转、细密层快速公转，制造"流体涌动"感
- 鼠标视差：每层不同强度的跟随偏移
- scale 呼吸动画
- 自动适配明暗模式（深蓝基调）

## 安装

```sh
# 从 GitHub 安装（推荐）
dsh plugin --profile web add https://github.com/KUNTING0701/dsh-aurora-bg/archive/refs/tags/v1.0.0.tar.gz

# 或从本地构建的 tarball 安装
dsh plugin --profile web add /path/to/dsh-aurora-bg-1.0.0.tgz
```

安装后**重启 dsh web**，背景自动生效。可在 **设置 → 插件 → 插件列表** 中看到 `dsh-aurora-bg` 条目（已启用 · 已挂载）。

## 卸载

```sh
dsh plugin --profile web remove dsh-aurora-bg
```

然后重启 dsh web。

## 微调

修改 `lib/client.js` 顶部的 `CSS` 常量（光斑颜色/浓度/网格密度）和 `anim` 数组（每层转速 `r`、漂移频率 `f1/f2`、幅度 `a1/a2`、视差 `p/q`、呼吸 `s`）：

| 字段 | 含义 |
| :-- | :-- |
| `r` | 旋转角速度 rad/s（负值=反向） |
| `f1/f2` | 漂移频率 |
| `a1/a2` | 漂移幅度 px |
| `p/q` | 鼠标视差强度 |
| `s` | scale 呼吸幅度 |

## License

MIT
