TweenMax.from(".content--intro", 2, {
  y:800, 
  scaleY:0,
  opacity:1,
  delay:2,
  ease:Elastic.easeOut
});
TweenMax.to(".content--intro", 1, {
  opacity: 0,
  delay: 6
});
TweenMax.from(".content--throw", 1, {
  opacity: 0,
  delay: 7,
  ease:Elastic.easeOut
});
TweenMax.to(".content--throw", 2, {
  opacity: 0,
  delay: 12
})