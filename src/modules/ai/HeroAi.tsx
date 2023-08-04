import { registerUniformComponent } from '@uniformdev/canvas-react';
import Hero, { HeroVariant } from '../../canvas/Hero';

[
  undefined,
  HeroVariant.ImageLeft,
  HeroVariant.ImageRight,
  HeroVariant.BackgroundLightImage,
  HeroVariant.BackgroundDarkImage,
].forEach(variantId => {
  registerUniformComponent({
    type: 'heroAi',
    component: Hero,
    variantId,
  });
});
