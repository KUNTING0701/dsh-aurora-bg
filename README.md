# dsh-aurora-bg

DeepSeek 官网风格动态极光背景插件 for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）Web UI。

深蓝流体底色 + 细网格纹理 + 蓝紫光斑 + 金色流纹 + **官网同款点阵鲸鱼**（逐粒子动态），多层独立旋转公转与漂移，鼠标移动产生层次视差与粒子交互——纯 CSS transform + SVG 粒子实现，**无 WebGL / 无持续 canvas 动画 / 无 mask / 无 blur**，低资源占用，兼容性极稳。

## 效果

### 背景层
- 六层背景（远/近双层网格视差 + 蓝紫光斑 + 金色反转层 + 顶部暖光 + 细密快转层）独立动画
- 各层不同转速与方向：金色层反转、细密层快速公转，制造"流体涌动"感
- 双层网格视差（远层 92px/小视差 + 近层 46px/大视差）——鼠标移动产生立体景深
- scale 呼吸动画

### 点阵鲸鱼（官网 hero-whale 复刻）
- 小点点组成的鲸鱼图案（官网原版 SVG path 采样，60×60 亮度图取内部粒子）
- **组装动画**：粒子从散落点飞向鲸鱼形状（2.5s 缓动凝聚）
- **尾部游泳摆动**：朝向尾部的传播波浪
- **环形波纹**：从中心向外扩散
- **鼠标斥力**：鼠标靠近时粒子被三次衰减力推开 + 噪声角旋转绕行（官网参数 `radius 4.9 / strength .8 / distort 5`）
- **3D 光照**：亮度 0.28x~2.79x 随与光源距离变化，光源跟随鼠标（`range 14 / shadeMin .28 / shadeMax 2.79 / followX 1.05`）
- 粒子闪烁、整体慢旋 + 呼吸浮动

## 安装

```sh
# 从 GitHub 安装（推荐）
dsh plugin --profile web add https://github.com/KUNTING0701/dsh-aurora-bg/archive/refs/tags/v1.0.2.tar.gz

# 或从本地构建的 tarball 安装
dsh plugin --profile web add /path/to/dsh-aurora-bg-1.0.2.tgz
```

安装后**重启 dsh web**，背景自动生效。可在 **设置 → 插件 → 插件列表** 中看到 `dsh-aurora-bg` 条目（已启用 · 已挂载）。

## 卸载

```sh
dsh plugin --profile web remove dsh-aurora-bg
```

然后重启 dsh web。

## 微调

修改 `lib/client.js`：
- 顶部 `CSS` 常量：光斑颜色/浓度、网格密度、鲸鱼位置（`.dsh-whale` 的 `right/top/width`）
- 背景层 `anim` 数组：每层转速 `r`、漂移频率 `f1/f2`、幅度 `a1/a2`、视差 `p/q`、呼吸 `s`
- 鲸鱼动态参数：`sampleWhale()` 采样分辨率（S=60）、鼠标斥力（4.9 / .8 / 5）、光照（14 / .28 / 2.79）、`loose` 抖动幅度

| 字段 | 含义 |
| :-- | :-- |
| `r` | 旋转角速度 rad/s（负值=反向） |
| `f1/f2` | 漂移频率 |
| `a1/a2` | 漂移幅度 px |
| `p/q` | 鼠标视差强度 |
| `s` | scale 呼吸幅度 |

## License

MIT
