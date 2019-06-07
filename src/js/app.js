import * as PIXI from 'pixi.js';

function backgroundAnimation() {

  function animate() {
    displacementSprite.x += 10;
    displacementSprite.y += 4;
    requestAnimationFrame(animate);
  }

  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  document.body.appendChild(app.view);
  const image = new PIXI.Sprite.from("/images/turtle-hr.jpg");
  image.width = window.innerWidth;
  image.height = window.innerHeight;
  app.stage.addChild(image);

  const displacementSprite = new PIXI.Sprite.from("/images/cloud.jpg");
  const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];
  app.renderer.view.style.transform = 'scale(1.0)';
  displacementSprite.scale.x = 6;
  displacementSprite.scale.y = 6;
  animate();
}

backgroundAnimation();