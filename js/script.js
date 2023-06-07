new TypeIt(".text-digit", {
    speed: 200,
    /* loop: true, */
})
.type('velocidade.',{delay: 300})
.delete(11)
.type('segurança.',{delay: 300})
.delete(11)
.type('e muito mais!', {delay: 800})
.pause(500)
.go();
