// Enemy object
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var obj = Object.create(Enemy.prototype);
    obj.sprite = 'images/enemy-bug.png';
    obj.x = x;
    obj.y = y;
    obj.speed = speed;
    return obj;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //Moving Enemy
    this.x += this.speed*dt;
    //Reseting Enemy
    if (this.x > 2000) {
        this.x = -200;
    }
    //Enemy-Player collisions handling
    if (player.y == 221 && this.y == 220){
        if (this.x > player.x-50 && this.x < player.x+50){
        player.resetPlayer();
        }
    }
    if (player.y == 139 && this.y == 140){
        if (this.x > player.x-50 && this.x < player.x+50){
        player.resetPlayer();
        }
    }
    if (player.y == 57 && this.y == 60){
        if (this.x > player.x-50 && this.x < player.x+50){
        player.resetPlayer();
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player object
var Player = function() {
    var obj = Object.create(Player.prototype);
    obj.sprite = 'images/char-boy.png';
    obj.x = 200;
    obj.y = 385;
    return obj;
};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyCode) {   
    switch(keyCode) {
        case "up":
            if (this.y == 57) {
                this.resetPlayer();
                break;
            }
            this.y -= 82;
            break;
        case "down":
            if (this.y == 385) {
                break;
            }
            this.y += 82;
            break;
        case "right":
            if (this.x == 400) {
                break;
            }
            this.x += 100
            break;
        case "left":
            if (this.x == 0) {
                break;
            }
            this.x -= 100
            break;
        default:
            break;
    }
   // console.log("x: "+this.x+" y: "+this.y);
};
//Reset player location
Player.prototype.resetPlayer = function() {
    this.x = 200;
    this.y = 385;
};


//Enemy objects
var enemy11 = Enemy(-100,60,200);
var enemy12 = Enemy(-400,60,700);
var enemy13 = Enemy(-900,60,330);
var enemy21 = Enemy(-100,140,550);
var enemy22 = Enemy(-600,140,100);
var enemy23 = Enemy(-600,140,300);
var enemy31 = Enemy(-100,220,300);
var enemy32 = Enemy(-400,220,150);
var enemy33 = Enemy(-600,220,500);
var allEnemies = [enemy11, enemy12, enemy13, enemy21, enemy22, enemy23, enemy31, enemy32, enemy33];
//Player object
var player = Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
