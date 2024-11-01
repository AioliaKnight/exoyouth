import React from 'react';

const ProductBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 主背景漸層：柔和白到玫瑰粉的垂直漸層 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-rose-50/60" />

      {/* 右上角放射漸層：聚焦淡粉色區域 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ffe5e9,_transparent)] opacity-50" />

      {/* 淡白色網格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#fff_1px,_transparent_1px),linear-gradient(to_bottom,_#fff_1px,_transparent_1px)] bg-[size:5rem_5rem] opacity-10" />

      {/* 集中放射效果：強化背景視覺中心 */}
      <div className="absolute inset-0 bg-gradient-radial from-rose-100/30 via-transparent to-transparent opacity-80" />

      {/* 微脈衝效果：淡粉紅色水平動畫 */}
      <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-rose-200/15 to-transparent opacity-60" />
    </div>
  );
};

export default ProductBackground;
