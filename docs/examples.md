
这里收集了两个值得参考的网站。

<div class="reference-buttons">
  <a class="reference-button blue" href="https://vitepress.yiov.top/" target="_blank" rel="noopener noreferrer">
    <span class="flower">✿</span>
    <span>VitePress 示例网站</span>
    <span class="external">↗</span>
  </a>

  <a class="reference-button green" href="https://jacksonling.cn/" target="_blank" rel="noopener noreferrer">
    <span class="flower">✿</span>
    <span>Jacksonling 网站</span>
    <span class="external">↗</span>
  </a>
</div>


<style>
/* 页面整体：淡淡的雾蓝色背景 */
.reference-buttons {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 64px auto;
  padding: 55px 24px;
  border-radius: 24px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 18% 90%, #b9cbd5 0%, transparent 40%),
    radial-gradient(ellipse at 82% 15%, #d9e4e4 0%, transparent 45%),
    linear-gradient(145deg, #edf1ef, #dfe8ed 55%, #e9eee8);
}

/* 远处的山峦 */
.reference-buttons::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.65;
  background:
    linear-gradient(145deg, transparent 45%, #a8bdc6 45.5%, #a8bdc6 46%, transparent 46.5%) 0 100% / 100% 55% no-repeat,
    linear-gradient(35deg, transparent 42%, #c1d0d0 42.5%, #c1d0d0 43%, transparent 43.5%) 0 100% / 100% 65% no-repeat,
    radial-gradient(ellipse at 50% 100%, #bdcfc7 0%, transparent 55%);
}

/* 两枚按钮的共同样式 */
.reference-button {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 225px;
  min-height: 64px;
  padding: 18px 25px;
  box-sizing: border-box;
  border: 1px solid #ffffffb8;
  border-radius: 14px;
  color: #fff !important;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-decoration: none !important;
  box-shadow:
    0 8px 24px #52687922,
    inset 0 1px 0 #ffffffb0;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

/* 柔和的手绘纹理 */
.reference-button::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid #ffffff55;
  border-radius: 10px;
  pointer-events: none;
}

/* 蓝灰水彩 */
.reference-button.blue {
  background:
    radial-gradient(ellipse at 15% 20%, #ffffff40, transparent 40%),
    radial-gradient(ellipse at 85% 90%, #405d7a55, transparent 50%),
    linear-gradient(125deg, #91abc0, #6f8da8 55%, #5e7a98);
}

/* 灰绿水彩 */
.reference-button.green {
  background:
    radial-gradient(ellipse at 15% 20%, #ffffff40, transparent 40%),
    radial-gradient(ellipse at 85% 90%, #486d5b55, transparent 50%),
    linear-gradient(125deg, #a7bcae, #829f90 55%, #698b7b);
}

.reference-button:hover {
  transform: translateY(-4px);
  box-shadow:
    0 14px 30px #52687935,
    inset 0 1px 0 #ffffffc9;
}

.reference-button:focus-visible {
  outline: 3px solid #7898b3;
  outline-offset: 4px;
}

/* 白色花朵装饰 */
.reference-button .flower {
  position: relative;
  z-index: 1;
  color: #fffdf5;
  font-size: 25px;
  line-height: 1;
  text-shadow: 0 1px 4px #ffffff55;
}

.reference-button .button-label,
.reference-button .external {
  position: relative;
  z-index: 1;
}

.reference-button .external {
  font-size: 18px;
  opacity: 0.9;
}

@media (max-width: 640px) {
  .reference-buttons {
    flex-direction: column;
    gap: 18px;
    margin: 36px auto;
    padding: 40px 16px;
  }

  .reference-button {
    width: 100%;
    max-width: 320px;
  }
}
</style>
