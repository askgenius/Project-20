var wall, thikness;
var bullets, speed, weight;
var damage;

function setup() {
    canvas = createCanvas(1600, 400);
    wall = createprite(1200, 200, thikness, height / 2);
    speed = random(223, 321)
    weight = random(30, 52)
    thikness = random(22, 83)

}

function draw() {
    background(0, 0, 0, 0);

    if (hasCollided(bullet, wall)) {
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed / (thikness * thikness * thikness);

        if (damage > 10) {
            wall.shapeColour = colour(255, 0, 0);
        }

        if (damage < 10) {
            wall.shapeColour = colour(0, 255, 0);
        }
    }


    drawSprites();
}

function hasCollided(bullet, lwall) {
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge >= wallLeftEdge) {
        return true
    }
    return false;
}